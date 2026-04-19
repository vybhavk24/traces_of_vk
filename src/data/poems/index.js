// ─────────────────────────────────────────────
//  POEMS INDEX
//
//  This is the only file that knows about all poems.
//  Every other part of the app reads from here.
//
//  TO ADD A NEW POEM:
//  1. Create a new file in src/data/poems/ (e.g. 003.js)
//  2. Import it below
//  3. Add it to the `poems` array
//  That's it. Nothing else needs to change.
//
//  TO REMOVE A POEM:
//  1. Remove the import line
//  2. Remove it from the array
//
//  TO REORDER:
//  Just reorder the entries in the array.
// ─────────────────────────────────────────────

import poem001 from "./001";
import poem002 from "./002";

const poems = [
  poem001,
  poem002,
];

export default poems;
