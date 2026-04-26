# Lesson 04 — CRUD, Newman & Introduction to Playwright

📅 Week 2
📁 [Slides](https://drive.google.com/drive/folders/1fweFLVgYTq1ES6TOce5ACUjNfZvlePTY)
🎥 [Recording](https://drive.google.com/drive/folders/1wSoJx427-4DrTdytHNCP4uAkagFwE4wG)

---

## 🎲 Ability Scores Update — API Behaviour

We confirmed updates in the API regarding `abilityScores`:

- Both `PUT` and `PATCH` are supported
- Both require sending the **full** `abilityScores` object
- All 6 attributes must be included (even if value = 0)

| Method | Endpoint |
|--------|----------|
| `PUT` | `/ability-scores` |
| `PATCH` | `/api/characters/{id}` |

> Missing fields = request fails.

---

## 🔄 CRUD Flow — Full Lifecycle

We introduced the **CRUD** concept:

| Operation | Method |
|-----------|--------|
| Create | `POST` |
| Read | `GET` |
| Update | `PATCH` / `PUT` |
| Delete | `DELETE` |

Full flow demonstrated in class:

1. Create a character → `POST`
2. Update it (class, background, attributes) → `PATCH`
3. Retrieve it → `GET`
4. Delete it → `DELETE`
5. Confirm deletion → `GET` returns `404`

> This is a core testing strategy for API lifecycle coverage.

---

## ⚙️ Postman → Newman (Automation Step)

We reinforced using **Newman** to run Postman collections:

- Run tests via terminal
- Bypass Postman limits
- Integrate with CI/CD pipelines
- Generate test reports

Moving from **manual → automated** execution.

---

## ⚠️ Postman Limitations

Real limitations discussed in class:

- Too many open tabs
- Unclear save behaviour
- No version control
- Security concerns (stored data and secrets)

> This is why we start moving to code-based tools.

---

## 🎭 Playwright — Introduction

We introduced **Playwright** as a more powerful solution for test automation.

**Setup Requirements:**
- VS Code
- Node.js + npm
- Git

**Installation:**
```bash
npm init playwright@latest
```
Choose TypeScript and install all dependencies.

---

## 🧪 First Tests in Playwright

We created our first API test using:

```typescript
const response = await request.get(...)
```

Validations included:
- Status code → `200`
- JSON response structure
- Specific field checks

> Very similar logic to Postman — but now in code.

---

## ✅ Playwright Advantages vs Postman

| Feature | Postman | Playwright |
|---------|---------|------------|
| Version control | ❌ | ✅ Git |
| Reusable tests | Limited | ✅ |
| Scalability | Limited | ✅ |
| Frontend + Backend | ❌ | ✅ |
| Built-in reports | Basic | ✅ |

> One tool for full test automation.

---

## 🔧 Backend-Only Configuration

We optimised the Playwright config for API testing:

- Removed browser projects
- Created a backend-only setup

> No need for browsers when testing APIs.

---

## 🚀 CI/CD in Practice

We pushed code to GitHub and triggered **GitHub Actions**:

```bash
git add .
git commit -m "feat: add playwright api tests"
git push
```

Result:
- Tests executed automatically on push
- Pipeline validates the code

> First step into real automation pipelines.

---

## 📝 Key Takeaways

- Understand and apply the full CRUD flow
- Know when to use `PUT` vs `PATCH`
- Automate Postman collections with Newman
- Understand the limitations of GUI-based tools
- Write API tests in Playwright using TypeScript
- Use Git for version control of your tests
- Run tests automatically in CI/CD pipelines

---

## ➡️ Next Steps / Homework

- Implement the full CRUD flow in Postman (including `DELETE` validation)
- Start writing API tests in Playwright for:
  - Attributes API
  - \+ 2 additional APIs of your choice
- Validate at least **4 fields** per API
- Commit and push your code to GitHub