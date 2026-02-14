/**
 * Event dates, venues, and narrative copy.
 * Each event is a chapter — not just a card, but a moment with meaning.
 */

export const events = [
  {
    id: 'haldi',
    title: 'Haldi',
    titleBn: 'হলুদ',
    date: '2026-03-23',
    time: null,
    shortLine: 'A joyful pre-wedding ritual',
    /** Narrative: why it matters, what it feels like */
    narrative:
      'The morning before we say "we do" — turmeric, laughter, and blessings. A ritual of joy that ties family and friends into the very fabric of our wedding. Where yellow meets happiness, and the world feels a little lighter.',
    feeling: 'Playful. Sacred. Full of light.',
    /** One line for cards / emphasis */
    poeticLine: 'Where yellow meets joy.',
    assets: { left: '/image/girl-haldi.png', right: '/image/man-haldi.png' },
  },
  {
    id: 'shadi',
    title: 'Shadi',
    titleBn: 'শাদি',
    date: '2026-03-24',
    time: null,
    shortLine: 'Our wedding ceremony',
    narrative:
      'The hour we become one. Surrounded by those we love most, we exchange our vows and step into marriage — not as two separate paths, but as one journey, together.',
    feeling: 'Sacred. Intimate. Forever.',
    poeticLine: 'Two souls. One promise.',
    venue: 'Akashdip Guest House',
    address: 'Dakshin Sagarbar, Purba Medinipur, West Bengal 721151',
    lat: 21.94,
    lng: 87.78,
    mapLabel: 'Akashdip Guest House',
  },
  {
    id: 'boubhat',
    title: "Boubhat (Bride's Feast)",
    titleBn: 'বৌভাত',
    date: '2026-03-25',
    time: null,
    shortLine: "The bride's feast — join us for a grand celebration",
    narrative:
      'The feast that follows. We open our hearts and our table — a celebration of togetherness, abundance, and the families that brought us here. Good food, warm embraces, and the joy of being surrounded by the people we love.',
    feeling: 'Warm. Generous. Alive.',
    poeticLine: 'A table set with love.',
    venue: 'Baragar',
    address: 'Debra Bazar, Pachim Medinipur, West Bengal 721126',
    lat: 22.388825,
    lng: 87.574152,
    mapLabel: 'Baragar, Debra Bazar',
    asset: '/image/food-greet.png',
  },
]

export const countdownTarget = { date: '2026-03-24', time: null }

export default events
