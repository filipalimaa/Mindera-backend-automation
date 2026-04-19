# Lesson 02 — Variables, Authentication & HTTP Methods

📅 Week 1
📁 [Slides & Recording](https://drive.google.com/drive/folders/1fweFLVgYTq1ES6TOce5ACUjNfZvlePTY)
🎥 [Class Recording](https://drive.google.com/drive/folders/1wSoJx427-4DrTdytHNCP4uAkagFwE4wG)

---

## 🌟 Student Demo Highlight

**Anton** demonstrated an advanced approach:
- Testing the Skills API
- Extracting IDs from responses
- Reusing them with **Postman variables**

This is the foundation of scalable API test flows.

---

## 🔄 Working with Variables in Postman

| Step | Action |
|------|--------|
| 1 | Extract a value from a response |
| 2 | Store it in a variable |
| 3 | Reuse it across multiple requests |

Variables are essential for building **real, chained API test flows**.

---

## 🌐 HTTP Methods — Deep Dive

| Method   | Purpose               |
|----------|-----------------------|
| `GET`    | Retrieve data         |
| `POST`   | Create new data       |
| `PUT`    | Replace entire record |
| `PATCH`  | Update specific fields|
| `DELETE` | Remove data           |

> ⚠️ Key distinction: **PUT = full update**, **PATCH = partial update**

---

## 🔐 Token Authentication — Step by Step

```
POST /api/auth/token
```

Flow:
1. Send credentials in JSON format
2. Receive a token in the response
3. Use the token in subsequent requests via:

```
Authorization: Bearer <token>
```

---

## 🌍 Environment Variables in Postman

Instead of copying tokens manually, store them as environment variables:

```
{{auth_token}}
```

**Benefits:**
- Reuse tokens across requests
- Keep flows clean and readable
- Simulate real-world testing scenarios

---

## 🧙 Character Creation Flow

Full flow built in class:

```
1. POST /api/auth/token     → Authenticate, get token
2. POST /api/characters     → Create character (draft)
3. GET  /api/characters/:id → Retrieve character
4. PATCH /api/characters/:id → Update:
   - class
   - species
   - background
```

> Characters **start as drafts** and evolve step by step through PATCH requests.

---

## 🧠 API Testing Mindset

API testing is **NOT linear**:

- Users don't follow a fixed order
- Different flows can expose unexpected bugs
- Small variations can break the system

**Example from class:** A bug was found when sending **multiple names** in a single request.

---

## 🔺 Test Pyramid

```
        ▲
       /  \
      / E2E \          ← Full system (frontend + backend)
     /--------\
    /   UAT    \       ← Validated by business/users
   /------------\
  / Integration  \     ← ✅ API Testing (we are here)
 /----------------\
/   Unit Tests     \   ← Small, fast, many (mostly devs)
--------------------
```

**API testing = Integration layer → high value, high coverage.**

---

## 📝 Key Takeaways

- Use and reuse Postman variables to build scalable flows
- Authentication with Bearer tokens is a standard real-world pattern
- `PUT` replaces everything; `PATCH` updates only what you send
- Build chained API flows (auth → create → retrieve → update)
- API testing requires **exploration and creativity**
- Small variations in requests can reveal real bugs
- API testing lives in the **Integration layer** of the test pyramid

---

## ➡️ Next Steps — Mission: Character Creation Flow

Build a complete flow in Postman:

1. Authenticate → store `{{auth_token}}`
2. Create character → store `{{character_id}}`
3. Retrieve character with `GET`
4. Apply `PATCH` for class, species, background
5. Validate data at each step
