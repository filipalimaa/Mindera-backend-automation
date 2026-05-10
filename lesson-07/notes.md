# Lesson 07 — Final Strategy, Architecture & Presentation Prep

📅 May 4, 2026
📁 [Slides](https://drive.google.com/drive/folders/1fweFLVgYTq1ES6TOce5ACUjNfZvlePTY)
🎥 [Recording](https://drive.google.com/drive/folders/1wSoJx427-4DrTdytHNCP4uAkagFwE4wG)

---

## 🎯 Focus of the Session

This session was all about preparing for the final project:
- Final project strategy
- Test architecture improvements
- Presentation expectations

> Moving from learning tools → to building a complete solution.

---

## 🔒 Environment Variables (.env)

Store sensitive credentials outside your code:

```bash
# .env
API_USERNAME=your_username
API_PASSWORD=your_password
```

Access in code:
```typescript
process.env.API_USERNAME
process.env.API_PASSWORD
```

**Rules:**
- `.env` must be listed in `.gitignore`
- Never commit credentials to GitHub
- Same concept as Postman environments — now in code

---

## 🏗️ Object Model for API Testing

A scalable folder structure for real projects:

```
tests/
├── client/      → API request functions
├── data/        → test data constants
├── types/       → TypeScript types & interfaces
├── features/    → test flows / spec files
└── snippets/    → reusable validation helpers
```

**Goal:** avoid large, messy test files — each layer has one responsibility.

---

## ♻️ Reusable Snippets

Instead of repeating the same assertions everywhere:

```typescript
// ❌ Repeated in every test
expect(response.status()).toBe(200);

// ✅ Extracted into a reusable helper
// snippets/response.snippets.ts
export function expectStatusOk(response: APIResponse) {
  expect(response.status()).toBe(200);
}
```

**Benefits:**
- Cleaner, shorter tests
- Easier to maintain — fix in one place
- Centralized validation logic

---

## 🧠 Test Strategy Mindset

**Key principle: Start simple → then evolve.**

1. Build something that works first
2. Avoid overengineering early
3. Improve step by step

> Real-world development is iterative, not perfect from the start.

---

## 🗡️ Final Project — What to Build

A complete character creation and validation flow:

| Step | Action |
|------|--------|
| 1 | Create character |
| 2 | Assign class, species, background |
| 3 | Set ability scores |
| 4 | Validate at each step |
| 5 | Final character validation |

**Business rules to validate:**
- Correct attribute distribution
- Class behavior (hit die, saving throws, spellcasting)
- Character consistency across updates

> Testing = validating rules, not just responses.

---

## ✅ What is a "Complete Character"?

A character is complete when:
- Ability scores are defined
- No missing fields (`missingFields` is empty)
- No pending steps remaining
- `status` is `"complete"` (no longer `"draft"`)

---

## 🎤 Final Presentation — Expectations

**Duration:** 10–12 minutes

**Present:**
- Your test strategy and decisions
- Your validations and why you chose them
- Your code or flow walkthrough

**Format — your choice:**
- Slides
- Live demo
- Video
- Any creative format

---

## 📊 Evaluation Criteria

| Criteria | What matters |
|----------|-------------|
| Problem understanding | Do you know what you're testing and why? |
| Test strategy | What did you choose to cover and why? |
| Validations | Are they meaningful and accurate? |
| Code organization | Is it clean, readable, structured? |
| Presentation clarity | Can you explain your decisions? |

> Not just code quality — your thinking process matters most.

---

## 🤝 Collaboration & Flexibility

- Work alone or in pairs
- AI tools are allowed — but you must understand your own code
- Choose your approach: Playwright, Postman, or mixed

---

## ⚡ Execution Tips

```bash
# Run a specific test file
npx playwright test specs/character.spec.ts

# Skip a test temporarily
test.skip('...', async () => { ... });

# Tag tests for selective runs
test('Create character @smoke', ...)
npx playwright test --grep @smoke
```

> Control your test execution during the demo.

---

## 🧭 Project Strategy Tips

- Start with a simple, working flow
- Focus on one character (like Vael Phira 🧝‍♀️)
- Validate key business rules, not just status codes
- Keep code clean and readable
- Document your decisions

---

## 📝 Key Takeaways

- Use `.env` for credentials — never hardcode them
- Structure your project in layers: `client/`, `data/`, `types/`, `snippets/`
- Create reusable helpers instead of repeating assertions
- Start simple and evolve — avoid overengineering
- Understand what a "complete character" means in business terms
- Your thinking process is evaluated, not just your code

---

## ➡️ Next Steps

- Complete your final project
- Build your narrative and presentation
- Be ready to explain every decision you made
- Presentation date: **May 20, 2026** 🎓