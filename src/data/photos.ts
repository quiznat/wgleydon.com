export interface Photo {
  src: string
  caption: string
  era: number
}

export interface PhotoEra {
  id: number
  title: string
  subtitle: string
  years: string
}

export const eras: PhotoEra[] = [
  { id: 0, title: 'The Beginning', subtitle: 'Where it all started', years: '1940s' },
  { id: 1, title: 'Childhood', subtitle: 'Billy', years: '1950s' },
  { id: 2, title: 'Growing Up', subtitle: 'The teenager', years: '1960s' },
  { id: 3, title: 'Love & Family', subtitle: 'Marriage, travel, togetherness', years: '1970s–80s' },
  { id: 4, title: 'Fatherhood', subtitle: 'A new chapter', years: '1980s' },
  { id: 5, title: 'Baby Mike', subtitle: 'Dad and his boy', years: '1980s–90s' },
  { id: 6, title: 'The Years Between', subtitle: 'Growing up together', years: '1990s–2000s' },
  { id: 7, title: "Mike's Wedding", subtitle: 'The next generation', years: '2010s' },
  { id: 8, title: 'Grandpa Bill', subtitle: 'The best role of all', years: '2010s–20s' },
  { id: 9, title: 'Later Years', subtitle: 'Birds, books, and family', years: '2020s' },
]

export const photos: Photo[] = [
  // Era 0 — The Beginning
  { src: '/photos/0-margaret-ellen-rose-and-bill-june-17-1948.jpg', caption: 'Margaret, Ellen, Rose and Bill — June 17, 1948', era: 0 },

  // Era 1 — Childhood
  { src: '/photos/1-billy-coming-down-the-stairs-at-grammie-s-alice-and-charlie-s-house.jpg', caption: "Billy coming down the stairs at Grammie's — Alice and Charlie's house", era: 1 },
  { src: '/photos/1-eddie-grammie-and-billy.jpg', caption: 'Eddie, Grammie and Billy', era: 1 },
  { src: '/photos/1-toasting-bill.jpg', caption: 'Toasting Bill', era: 1 },
  { src: '/photos/1-young-bill-leydon-with-uncle-charlie-tyacke-and-brother-ed-leydon.jpg', caption: 'Young Bill with Uncle Charlie Tyacke and brother Ed', era: 1 },
  { src: '/photos/1-auntie-alice-and-billy.jpg', caption: 'Auntie Alice and Billy', era: 1 },

  // Era 2 — Growing Up
  { src: '/photos/2-mary-beth-mary-alice-and-bill-at-grammie-s.jpg', caption: "Mary Beth, Mary Alice and Bill at Grammie's", era: 2 },
  { src: '/photos/2-the-cool-teenager.jpg', caption: 'The cool teenager', era: 2 },

  // Era 3 — Love & Family
  { src: '/photos/3-mom-dad.jpg', caption: 'Mom & Dad', era: 3 },
  { src: '/photos/3-mom-dad-2.jpg', caption: 'Mom & Dad', era: 3 },
  { src: '/photos/3-mom-dad-3.jpg', caption: 'Mom & Dad', era: 3 },
  { src: '/photos/3-mom-dad-stacy.jpg', caption: 'Mom, Dad & Stacy', era: 3 },
  { src: '/photos/3-dad.jpg', caption: 'Dad', era: 3 },
  { src: '/photos/3-dad-2.jpg', caption: 'Dad', era: 3 },
  { src: '/photos/3-family-shot.jpg', caption: 'Family shot', era: 3 },
  { src: '/photos/3-family-shot-2.jpg', caption: 'Family shot', era: 3 },
  { src: '/photos/3-adams-pond.jpg', caption: 'Adams Pond', era: 3 },
  { src: '/photos/3-bill-and-fran-at-our-wedding.jpg', caption: 'Bill and Fran at our wedding', era: 3 },
  { src: '/photos/3-bill-at-our-wedding-send-off.jpg', caption: 'Bill at our wedding send off', era: 3 },
  { src: '/photos/3-charlie-and-uncle-bill.jpg', caption: 'Charlie and Uncle Bill', era: 3 },
  { src: '/photos/3-christmas-in-pech.jpg', caption: 'Christmas in Pech', era: 3 },
  { src: '/photos/3-dinner-in-pech-germany.jpg', caption: 'Dinner in Pech, Germany', era: 3 },
  { src: '/photos/3-oldest-and-youngest-sibling-in-germany-about-to-go-out-on-the-town.jpg', caption: 'Oldest and youngest sibling in Germany — about to go out on the town', era: 3 },

  // Era 4 — Fatherhood
  { src: '/photos/4-maureen-and-bill-s-wedding.jpg', caption: "Maureen and Bill's wedding", era: 4 },
  { src: '/photos/4-wedding-2.jpg', caption: 'The wedding', era: 4 },
  { src: '/photos/4-wedding-cake.jpg', caption: 'Wedding cake', era: 4 },
  { src: '/photos/4-bill-maureen-and-mom.jpg', caption: 'Bill, Maureen and Mom', era: 4 },
  { src: '/photos/4-bill-holding-a-baby.jpg', caption: 'Bill holding a baby', era: 4 },
  { src: '/photos/4-bill-entertaining-the-siblings-august-31st-1984-plymouth-mi.jpg', caption: 'Bill entertaining the siblings — August 31, 1984, Plymouth, MI', era: 4 },
  { src: '/photos/4-img-3626.png', caption: 'Family', era: 4 },

  // Era 5 — Baby Mike
  { src: '/photos/5-baby-mike.jpg', caption: 'Baby Mike', era: 5 },
  { src: '/photos/5-baby-mike-2.jpg', caption: 'Baby Mike', era: 5 },
  { src: '/photos/5-baby-mike-3.jpg', caption: 'Baby Mike', era: 5 },
  { src: '/photos/5-baby-mike-mom-dad.jpg', caption: 'Baby Mike with Mom & Dad', era: 5 },
  { src: '/photos/5-dad-mike.jpg', caption: 'Dad & Mike', era: 5 },
  { src: '/photos/5-toddler-mike.jpg', caption: 'Toddler Mike', era: 5 },
  { src: '/photos/5-susan-mike-dad-mom.jpg', caption: 'Susan, Mike, Dad & Mom', era: 5 },
  { src: '/photos/5-thanksgiving.jpg', caption: 'Thanksgiving', era: 5 },
  { src: '/photos/5-img-3628.png', caption: 'Family', era: 5 },

  // Era 6 — The Years Between
  { src: '/photos/6-mike-and-dad-baseball-hall-of-fame.jpg', caption: 'Mike and Dad at the Baseball Hall of Fame', era: 6 },
  { src: '/photos/6-bill-and-jack.jpg', caption: 'Bill and Jack', era: 6 },
  { src: '/photos/6-adsl.jpg', caption: 'ADSL', era: 6 },
  { src: '/photos/6-sweeney-family.png', caption: 'Sweeney Family', era: 6 },

  // Era 7 — Mike's Wedding
  { src: '/photos/7-parents-first-meeting.jpg', caption: 'Parents first meeting', era: 7 },
  { src: '/photos/7-rehersal-dinner.jpg', caption: 'Rehearsal dinner', era: 7 },
  { src: '/photos/7-bill-and-maureen-at-mike-s-wedding.jpg', caption: "Bill and Maureen at Mike's wedding", era: 7 },
  { src: '/photos/7-wedding-picture-full.png', caption: 'Wedding picture', era: 7 },

  // Era 8 — Grandpa Bill
  { src: '/photos/8-dad-and-baby-jack.jpg', caption: 'Dad and baby Jack', era: 8 },
  { src: '/photos/8-dad-and-baby-jack-2.jpg', caption: 'Dad and baby Jack', era: 8 },
  { src: '/photos/8-dad-mom-baby-jack.jpg', caption: 'Dad, Mom & baby Jack', era: 8 },
  { src: '/photos/8-dad-mom-jack.jpg', caption: 'Dad, Mom & Jack', era: 8 },
  { src: '/photos/8-dad-mom-and-jack.jpg', caption: 'Dad, Mom and Jack', era: 8 },
  { src: '/photos/8-dad-and-jack.jpg', caption: 'Dad and Jack', era: 8 },
  { src: '/photos/8-dad-and-jack-2.jpg', caption: 'Dad and Jack', era: 8 },
  { src: '/photos/8-dad-and-jack-book.jpg', caption: 'Dad and Jack — reading together', era: 8 },
  { src: '/photos/8-dad-and-jack-on-wheels.jpg', caption: 'Dad and Jack on wheels', era: 8 },
  { src: '/photos/8-dad-md-jack.jpg', caption: 'Dad and Jack', era: 8 },
  { src: '/photos/8-dad-mom-lily.jpg', caption: 'Dad, Mom & Lily', era: 8 },
  { src: '/photos/8-dad-mom-lily-2.jpg', caption: 'Dad, Mom & Lily', era: 8 },
  { src: '/photos/8-dad-and-mom-and-lily.jpg', caption: 'Dad, Mom and Lily', era: 8 },
  { src: '/photos/8-dad-mike-jack.jpg', caption: 'Dad, Mike & Jack', era: 8 },
  { src: '/photos/8-dad-mike-jack-2.jpg', caption: 'Dad, Mike & Jack', era: 8 },
  { src: '/photos/8-dad-and-mike.jpg', caption: 'Dad and Mike', era: 8 },
  { src: '/photos/8-dad-birthday.jpg', caption: 'Dad — birthday', era: 8 },
  { src: '/photos/8-dad-birthday-2.jpg', caption: 'Dad — birthday', era: 8 },
  { src: '/photos/8-lm-and-dad.jpg', caption: 'LeeMarie and Dad', era: 8 },
  { src: '/photos/8-christmas-dinner.jpg', caption: 'Christmas dinner', era: 8 },
  { src: '/photos/8-chrismas-dinner.jpg', caption: 'Christmas dinner', era: 8 },
  { src: '/photos/8-mom-and-dad-holiday-plates.jpg', caption: 'Mom and Dad — holiday plates', era: 8 },
  { src: '/photos/8-lunch.jpg', caption: 'Lunch', era: 8 },
  { src: '/photos/8-sweeny-family.jpg', caption: 'Sweeney Family', era: 8 },
  { src: '/photos/8-img-0824.jpg', caption: 'Family', era: 8 },

  // Era 9 — Later Years
  { src: '/photos/9-dad-and-baby-charileimg-5626.jpg', caption: 'Dad and baby Charlie', era: 9 },
  { src: '/photos/9-dad-and-jack.jpg', caption: 'Dad and Jack', era: 9 },
  { src: '/photos/9-dad-and-mike.jpeg', caption: 'Dad and Mike', era: 9 },
  { src: '/photos/9-bird-watching.jpeg', caption: 'Bird watching', era: 9 },
  { src: '/photos/9-chowda.jpeg', caption: 'Chowda', era: 9 },
]
