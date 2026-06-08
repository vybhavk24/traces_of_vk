// ─────────────────────────────────────────────
//  POEM SCHEMA — REFERENCE & TEMPLATE
//
//  Every poem in this project follows this shape.
//  Copy the template below when adding a new poem.
// ─────────────────────────────────────────────

/*

TEMPLATE — copy this, fill it in, save as its own file inside src/data/poems/

{
  id: "001",               // unique, zero-padded number — never reuse or change once set
  title: "",               // title of the poem

  body: ``,                // the full poem, inside backticks
                           // line breaks are preserved exactly as you type them

  mood: "",                // free text — how this poem feels
                           // e.g. "melancholic", "restless", "quietly euphoric", "hollow"

  themes: [""],            // free text array — what it's about, can be multiple
                           // e.g. ["love", "distance"] or ["cosmos", "existence"]
                           // ⚠ be consistent with casing — use lowercase always

  origin: "",              // free text — how/when/why this was born, in your voice

  date: "YYYY-MM",         // month + year — e.g. "2024-03"

  galaxy: "",              // which galaxy (category) this poem belongs to
                           // must match an "id" in src/data/galaxies.js exactly
                           // e.g. "she", "cosmos", "philosophy", "random"

  sequence: null,          // leave as null for standalone poems
                           // for trilogies/series, use:
                           // sequence: {
                           //   name: "my first trilogy",  // series name
                           //   order: 1,                  // position: 1, 2, 3...
                           // }
}

*/

// ─────────────────────────────────────────────
//  FIELD REFERENCE
//
//  id        → string, unique, never change after creation
//  title     → string
//  body      → string (template literal), preserves line breaks
//  mood      → string, free text, your words
//  themes    → array of strings, lowercase, consistent spelling
//  origin    → string, free text, casual voice
//  date      → string, format "YYYY-MM"
//  galaxy    → string, must match a galaxy id in galaxies.js
//  sequence  → null OR { name: string, order: number }
// ─────────────────────────────────────────────
