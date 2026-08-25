// ─────────────────────────────────────────────
//  QUESTIONS & ANSWERS DATA
//
//  To ADD a question    → copy any block below and paste at the end (before the closing bracket)
//  To EDIT a question   → change the "question" or "answer" string
//  To DELETE a question → remove the entire { id, question, answer } block
//  To REORDER           → cut and paste blocks in the order you want
//
//  Rules:
//  - Each "id" must be unique (just keep incrementing the number)
//  - Don't touch anything outside this file to make changes here
//  - The last question supports an optional "closing" field —
//    this line is displayed as a standalone moment before the poems begin
//  - Any question can have an optional "poem" field —
//    it displays as a poem (preserving line breaks) below the answer
// ─────────────────────────────────────────────

const questions = [
  {
    id: 1,
    question: "Why this website?",
    answer:
      "Honestly I was tired of losing my poems and storing them, updating them was a pain. So just wanted someplace where they can all exist independently.",
  },
  {
    id: 2,
    question: "How are these poems born?",
    answer:
      "Basically they're the result of my personal observation, magnified by my imagination. So are they real? Or do they exist how I want them to exist in my head? That perception of reality is an everyday battle.",
  },
  {
    id: 3,
    question: "Is it meant to attract an audience?",
    answer:
      "Honestly it's hard to relate to someone else's state of mind at a particular moment of their experience. So it's not meant for audience. But if you have experienced the same state of mind and can relate to it — that's magnificent.",
  },
  {
    id: 4,
    question: "Should I read it?",
    answer:
      "I have no idea. The poems are neither good nor bad. They resonate based on your emotional state and mine when I penned them down. So if you can relate, it's great — else it's a waste of time.",
  },
  {
    id: 5,
    question: "Why poetry?",
    answer:
      "Some say it's a conversation with your own soul or how you see this world and the beings in it. Some say it's an art or a hobby. For me it's just a snapshot of that particular moment, holding that particular emotion — and here's a little poetry about it, cause why not :p.",
    poem: `Poetry is love,
without trying to own it!

It has taken me a rather long time,
to understand that statement.
And I still don't know how to love,
or what it means to love!

I observe a flower and write about its beauty,
without trying to pluck it.
I admire a girl, make her my muse,
without trying to own her.

I write about a star and its beauty,
without trying to hold it.
And about the mountains,
without taking them home!

I write about the ocean and its depth,
without trying to bottle it.
And I write about a bird and her chicks,
without trying to cage her!

Every person or object, imagined or real,
seen or unseen, touched or invisible...
They all invite observation,
even admiration,
and they all make me want to fall in love.

So yea, maybe,
poetry is love without trying to own it.
And as you might have guessed,
I can try all I want,
but they cannot be owned.

That's why admiration is enough!
Letting it be itself,
without trying to alter it,
watching yourself be in love…
And in a way, it's incredibly beautiful.`,
  },
  {
    id: 6,
    question: "Why do I write?",
    answer:
      "I have this voice inside my head that keeps narrating everything in the form of poetry. And for it to stop, I need to throw it somewhere — and they result in these writings. So I write to make the voice stop.",
    closing: "— but it never does.",
  },
];

export default questions;