#!/bin/bash
# Deploy Bill Leydon Memorial Site
# Run this after editing poems in ~/life-goals/poems/bill-leydon/

set -e

POEMS_DIR="/Users/quiznat/life-goals/poems/bill-leydon"
OUTPUT_FILE="src/data/poems.ts"

echo "Converting $POEMS_DIR/*.md to TypeScript..."

python3 << 'PYTHON'
import os
import re

poems_dir = "/Users/quiznat/life-goals/poems/bill-leydon"
output_file = "src/data/poems.ts"

poems = []

for filename in sorted(os.listdir(poems_dir)):
    if not filename.endswith('.md') or filename == 'README.md':
        continue
    
    filepath = os.path.join(poems_dir, filename)
    with open(filepath, 'r') as f:
        content = f.read()
    
    frontmatter_match = re.match(r'^---\n(.*?)\n---\n+(.*)', content, re.DOTALL)
    if not frontmatter_match:
        continue
    
    fm_text = frontmatter_match.group(1)
    body = frontmatter_match.group(2).strip()
    
    # Remove markdown title if present
    body = re.sub(r'^# .+\n+', '', body)
    
    title_match = re.search(r'^title:\s*"?([^"\n]+)"?', fm_text, re.MULTILINE)
    date_match = re.search(r'^date_sent:\s*(\d{4}-\d{2}-\d{2})', fm_text, re.MULTILINE)
    
    title = title_match.group(1) if title_match else filename.replace('.md', '')
    date_str = date_match.group(1) if date_match else "2021-01-01"
    poem_id = filename.replace('.md', '')
    
    poems.append({
        'id': poem_id,
        'title': title,
        'date': date_str,
        'content': body,
        'tags': ['poem']
    })

print(f"Found {len(poems)} poems")

# Build TypeScript output
lines = ["export interface Poem {", "  id: string", "  title: string", "  date: string", "  content: string", "  tags: string[]", "}", "", "export const poems: Poem[] = ["]

for p in poems:
    title_escaped = p['title'].replace("'", "\\'")
    content_escaped = p['content'].replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    
    lines.append("  {")
    lines.append(f"    id: '{p['id']}',")
    lines.append(f"    title: '{title_escaped}',")
    lines.append(f"    date: '{p['date']}',")
    lines.append(f"    content: `{content_escaped}`,")
    lines.append("    tags: ['poem']")
    lines.append("  },")

lines[-1] = lines[-1].rstrip(',')
lines.append("]")

output = '\n'.join(lines)

with open(output_file, 'w') as f:
    f.write(output)

print(f"Wrote {len(output)} chars to {output_file}")
PYTHON

echo "Building site..."
npm run build

echo "Committing source..."
git add src/data/poems.ts
git commit -m "Update poems: $(date '+%Y-%m-%d %H:%M')" || echo "No changes to commit"
git push origin main

echo "Deploying to GitHub Pages..."
DEPLOY_DIR="/tmp/wgleydon-deploy-$$"
mkdir -p "$DEPLOY_DIR"
cp -R dist/* "$DEPLOY_DIR/"
cd "$DEPLOY_DIR"
git init
git checkout -b gh-pages
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"
git remote add origin https://github.com/quiznat/wgleydon.com.git
git push -f origin gh-pages

echo ""
echo "✓ Deployed to https://wgleydon.com"
