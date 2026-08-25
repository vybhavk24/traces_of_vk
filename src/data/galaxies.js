// ─────────────────────────────────────────────
//  GALAXIES DATA
//
//  Each galaxy is a category of poems.
//  To ADD a galaxy    → add a new block below
//  To EDIT a galaxy   → change label or description
//  To DELETE a galaxy → remove the block
//                       (move its poems to another galaxy first)
//
//  The "id" must match the "galaxy" field in each poem file exactly.
//  Use lowercase, no spaces (use hyphens if needed): "my-trilogy"
// ─────────────────────────────────────────────

const galaxies = [
  {
    id: "she",
    label: "she",
    description: "poems about people who stayed long enough to become words",
  },
  {
    id: "cosmos",
    label: "cosmos",
    description: "the universe, existence, and everything in between",
  },
  {
    id: "philosophy",
    label: "philosophy",
    description: "questions with no answers, answers with no questions",
  },
  {
    id: "surroundings",
    label: "surroundings",
    description: "ordinary moments that refused to stay ordinary",
  },
  {
    id: "god",
    label: "god",
    description: "devotion, doubt, and the space between",
  },
  {
    id: "persons",
    label: "persons",
    description: "people observed from a careful distance",
  },
  {
    id: "random",
    label: "random",
    description: "the voice spoke and this is what came out",
  },
  // Add more galaxies here as needed

  {
    id: "a-trilogy",
    label: "a-trilogy",
    description: "I tried three pieces that are connected",
  },

    {
    id: "kannada",
    label: "ಕನ್ನಡ ಪದ್ಯಗಳು",
    description: "Bariyod kasta, but try madak yenu :p",
  },
];

export default galaxies;
