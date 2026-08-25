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
import poem003 from "./003";
import poem004 from "./004";
import poem005 from "./005";
import poem006 from "./006";
import poem007 from "./007";
import poem008 from "./008";
import poem009 from "./009";

const poems = [
  poem001,
  poem002,
  poem003,
  poem004,
  poem005,
  poem006,
  poem007,
  poem008,
  poem009,
];

export default poems;
