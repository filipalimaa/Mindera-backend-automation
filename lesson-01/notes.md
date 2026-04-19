# Lesson 01 — Adventure Guide API & Postman Basics

📅 Week 1
📁 [Slides & Recording](https://drive.google.com/drive/folders/1fweFLVgYTq1ES6TOce5ACUjNfZvlePTY)
🎥 [Class Recording](https://drive.google.com/drive/folders/1wSoJx427-4DrTdytHNCP4uAkagFwE4wG)

---

## 🗺️ Adventure Guide API

The course uses a practice API called **Adventure Guide API**, which simulates character creation for an RPG-style game.

Creating a character is **not a single action** — it involves multiple HTTP requests:

- `POST` — create
- `PATCH` — partial update
- `GET` — retrieve
- `PUT` — full replace

---

## 🛠️ Postman Setup

Steps completed to get ready for hands-on exercises:

1. Installed Postman
2. Created an account
3. Joined the shared workspace
4. Created a collection called **adventures**

---

## 🔍 First Endpoint Explored

```
GET /api/attributes
```

Returns the **6 core character attributes**:

| Attribute     |
|---------------|
| Strength      |
| Dexterity     |
| Constitution  |
| Intelligence  |
| Wisdom        |
| Charisma      |

These attributes connect to character **skills**.

---

## ✅ Postman Validations

### Basic checks implemented:
- Response status should be `200`
- Response time should be under `1000ms`
- Response body should contain expected values

### ⚠️ Important Concept — Not all validations are reliable!

Checking only for strings (e.g. `"contains 'Strength'"`) can lead to **false positives**.

**Better approach — validate precisely:**
- Specific JSON fields
- Correct values in the correct place
- Expected data types
- Exact response structure

> The frontend depends on **accurate and predictable data** — sloppy tests give false confidence.

---

## 🧪 Better Test Design

Instead of one big test → **smaller, more focused (atomic) tests**.

### Approach:
1. Define an **expected response contract**
2. Iterate through it using **loops**
3. Write cleaner and more readable tests

**Result:** easier debugging and more maintainable test suites.

---

## 📝 Key Takeaways

- Organise requests in Postman collections
- Validate status code and response time
- Inspect API responses carefully
- Validate exact JSON fields (not generic string checks)
- Write atomic, focused tests
- Think about API testing in a robust, precise way

---

## ➡️ Next Steps

Continue exploring other endpoints:
- `GET /api/skills`
- `GET /api/skills/:id`

Focus on:
- Response validation
- JSON structure inspection
- Building confidence with Postman
