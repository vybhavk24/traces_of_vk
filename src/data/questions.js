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
    question: "Should you read it?",
    answer:
      "I have no idea. The poems are neither good nor bad. They resonate based on your emotional state and mine when I penned them down. So if you can relate, it's great — else it's a waste of time.",
  },
  {
    id: 5,
    question: "Why poetry?",
    answer:
      "Some say it's a conversation with your own soul or how you see this world and the beings in it. Some say it's an art or a hobby. For me it's just a snapshot of that particular moment, holding that particular emotion — and the thing it does for me ultimately shows I'm alive.",
  },
  {
    id: 6,
    question: "Why do I write?",
    answer:
      "I have this voice inside my head that keeps narrating everything in the form of poetry. And for it to stop, I need to throw it somewhere — and they result in these writings. So I write to make the voice stop...",
    // This line stands alone as a moment before the poems begin
    closing: " but it never does!",
  },
];

export default questions;
