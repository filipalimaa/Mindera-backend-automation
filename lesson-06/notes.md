# Lesson 06 — Test Architecture: Types, Data & Client Functions

📅 April 29, 2026
📁 [Slides](https://drive.google.com/drive/folders/1fweFLVgYTq1ES6TOce5ACUjNfZvlePTY)
🎥 [Recording](https://drive.google.com/drive/folders/1wSoJx427-4DrTdytHNCP4uAkagFwE4wG)

---

## 🏗️ Structuring Tests Like a Real Project

Instead of writing everything inside the test file, we introduced a layered structure:

```
tests/
├── types/       → define data shapes (TypeScript interfaces/types)
├── data/        → store test data as constants
├── client/      → reusable functions that call the API
└── specs/       → the actual test files
```

> This is how real-world automation projects are structured.

---

## 🔐 Reusable Authentication

Instead of repeating the auth call in every test, we extracted it into a reusable function:

```typescript
// client/auth.client.ts
export async function getToken(request: APIRequestContext): Promise<string> {
  const response = await request.post('/api/auth/token', {
    data: {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
  });
  const body = await response.json();
  return body.token;
}
```

Call it once in `beforeAll`, reuse everywhere.

---

## 🔧 Client Functions — Abstraction Layer

We created reusable functions for each API action:

```typescript
// client/character.client.ts
export async function createCharacter(
  request: APIRequestContext,
  token: string,
  data: CreateCharacter,
) {
  return request.post('/api/characters', {
    headers: { Authorization: `Bearer ${token}` },
    data,
  });
}
```

**Before:** raw `request.post(...)` scattered across every test
**After:** tests call clean, named functions

> Cleaner, shorter, more maintainable code.

---

## 📦 Separating Test Data

Test data moved into dedicated constants files:

```typescript
// data/character.data.ts
export const CHARACTER_NAME = 'Vael Phira';
export const CLASS_ID = 11;       // Warlock
export const SPECIES_ID = 5;      // Half-Elf
export const BACKGROUND_ID = 3;   // Charlatan
```

**Benefits:**
- One place to update values
- Reusable across multiple test files
- Clearer test scenarios — no magic numbers

---

## 🧩 Using TypeScript Types

We defined types for request payloads:

```typescript
// types/character.types.ts
type CreateCharacter = {
  name: string;
  classId?: number;
  speciesId?: number;
  backgroundId?: number;
};
```

The `?` means the field is **optional** — the character can be created with just a name.

**Why types matter:**
- Prevent mistakes at compile time
- Improve code readability
- Make the codebase safer and self-documenting

---

## 🔒 Security Consideration

**Avoid this:**
```typescript
username: "demo",
password: "demo123"
```

**Do this instead:**
```typescript
username: process.env.API_USERNAME,
password: process.env.API_PASSWORD,
```

Store sensitive values in a `.env` file and add it to `.gitignore`.
Never commit credentials to GitHub.

---

## ⚡ Parallel vs Serial Execution

| Mode | When to use |
|------|-------------|
| **Parallel** (default) | Independent tests — faster execution |
| **Serial** (`test.describe.serial`) | Dependent tests — data shared between steps |

> Choose based on whether your tests depend on each other's output.

---

## 🗡️ CRUD Assignment

Build a full CRUD flow in Playwright applying the new structure:

```
1. Create character   → POST
2. Get character      → GET by ID
3. Update character   → PATCH
4. Delete character   → DELETE
5. Confirm deletion   → GET → expect 404
```

Apply:
- **Client functions** for each API call
- **Data constants** for IDs and names
- **TypeScript types** for request payloads

---

## 🏆 Final Project

**Suggested presentation date: May 20th**

Evaluation criteria:
- Effort and consistency
- Strategy and test coverage
- Understanding of concepts
- Structure and architecture

> Not only code quality — but how you approached the problem.

---

## 📝 Key Takeaways

- Separate logic, data, and types into dedicated folders
- Build reusable client functions instead of repeating raw requests
- Never hardcode sensitive data — use environment variables
- Parallel for independent tests, serial for dependent flows
- Think like a test architect, not just a test writer

---

## ➡️ Next Steps / Homework

- Complete the CRUD assignment in Playwright
- Apply the full structure: `client/` + `data/` + `types/`
- Commit and push your code to GitHub
- Start thinking about your final project structure

> You're now building production-level test architecture. 🏗️