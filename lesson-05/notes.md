# Lesson 05 — Test Structure & Playwright Architecture

📅 April 27, 2026
📁 [Slides](https://drive.google.com/drive/folders/1fweFLVgYTq1ES6TOce5ACUjNfZvlePTY)
🎥 [Recording](https://drive.google.com/drive/folders/1wSoJx427-4DrTdytHNCP4uAkagFwE4wG)

---

## 🛠️ Project Setup & Git Workflow

We reinforced the basics of working with a real project in VS Code:

```bash
git status   # check current state
git add .    # stage changes
git commit -m "message"
git push
```

Files configured:
- `.gitignore` — keeps unwanted files out of the repo
- `tsconfig.json` — ensures TypeScript stability

> Proper setup = fewer issues later.

---

## 🧪 Building API Tests in Playwright

We built a real test flow step by step:

1. Get authentication token
2. Request character list
3. Validate response (`status 200`)
4. Validate character data (e.g., ID)

Same logic as Postman — but now fully in code.

---

## 🔗 Chaining Requests in Code

We connected multiple API calls inside a single test:

- Token → used in headers
- Response → parsed as JSON
- Values → reused in next requests

```typescript
const response = await request.get('/api/characters', {
  headers: { Authorization: `Bearer ${token}` },
});
const body = await response.json();
```

> This is how real API automation works.

---

## ⚠️ The Problem: Code Growing Too Much

As we added more API calls, tests became:
- Too long
- Harder to maintain
- Tightly coupled (dependencies between calls)

We needed a better structure.

---

## ✅ Solution: Better Test Structure

### `test.beforeAll`
Runs **once** before all tests in a block — ideal for setup like authentication.

```typescript
test.beforeAll(async ({ request }) => {
  const response = await request.post('/api/auth/token', {
    data: { username: '...', password: '...' },
  });
  const body = await response.json();
  token = body.token;
});
```

### Shared Variables
Declare variables outside tests so they can be shared:

```typescript
let token: string;
let characterId: number;
```

> `const` → value never changes | `let` → value will be reassigned

---

## 🔄 Sequential Execution with `test.describe.serial`

By default, Playwright runs tests **in parallel** — which breaks dependent flows.

**Solution:**

```typescript
test.describe.serial('Character flow', () => {
  // tests run in order, one after another
});
```

This ensures:
- Tests run in the correct order
- Data (token, ID) flows correctly between tests
- Dependent flows don't fail due to race conditions

---

## 🏗️ Final Structure — Best Practice

```typescript
test.describe.serial('Character flow', () => {

  let token: string;
  let characterId: number;

  test.beforeAll(async ({ request }) => {
    // Step 1 — authenticate once
    const res = await request.post('/api/auth/token', {
      data: { username: '...', password: '...' },
    });
    token = (await res.json()).token;
  });

  test('Get character list', async ({ request }) => {
    // Step 2 — use token from beforeAll
    const res = await request.get('/api/characters', {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    characterId = body[0].id;
  });

  test('Validate character by ID', async ({ request }) => {
    // Step 3 — use characterId from previous test
    const res = await request.get(`/api/characters/${characterId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(res.status()).toBe(200);
  });

});
```

This structure is **modular**, **readable**, and **scalable**.

---

## 💡 Important Concepts

| Concept | What it means |
|---------|---------------|
| `const` | Value never changes after assignment |
| `let` | Value can be reassigned (use for token, IDs) |
| `baseURL` | Set once in config, avoid repeating the full URL |
| `Authorization` header | `Bearer ${token}` — passed in every authenticated request |
| `test.beforeAll` | Setup that runs once before all tests in the block |
| `test.describe.serial` | Forces sequential execution instead of parallel |

---

## 📝 Key Takeaways

- Structure matters as much as the code itself
- Avoid repeating setup logic across tests
- Use `beforeAll` for shared setup (e.g. authentication)
- Use `describe.serial` for flows where tests depend on each other
- Keep each test small and focused on one thing
- Think about maintainability from the start

---

## ➡️ Next Steps / Homework

Refactor existing tests using the new structure:

- Wrap tests in `test.describe.serial`
- Move authentication to `test.beforeAll`
- Use shared `let` variables for `token` and `characterId`
- Split the flow into multiple focused tests:
  - Validate first 3 characters from the list
  - Reuse their IDs in follow-up tests

**Goal:** cleaner, more structured, more maintainable tests.

> You're not just writing tests anymore — you're designing test architecture. 🏗️