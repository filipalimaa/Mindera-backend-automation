# Lesson 03 — DevTools, Automation & Thinking Like a Tester

📅 Week 2

---

## 🔍 API Investigation with Chrome DevTools

We explored how to inspect APIs directly from the browser using the **Network** tab in Chrome DevTools.

What we learned:
- How to track API requests triggered by UI actions
- How to filter noise and focus on relevant calls
- How to inspect headers, payloads, and responses

> Understanding real traffic helps you test APIs in a more realistic way.

---

## 🧱 Character Flow — The Big Picture

We revisited the character creation flow and reinforced an important idea: **a character is not created in one step — it evolves.**

To move forward, we must combine:
- Class
- Species
- Background
- Ability Scores

This is a **state-based flow**, not a set of isolated requests.

---

## ⚠️ Debugging & Authentication Issues

Real issues discussed in class:
- `401 Unauthorized` errors
- Token misconfiguration
- Request setup inconsistencies

> Even when everything "looks right", small setup mistakes can break the entire flow.

---

## 🤖 Postman Automation — Level Up

We started automating the process using Postman scripts:

**Pre-request Scripts**
- Generate dynamic data (e.g. unique character names)

**Post-request Scripts**
- Extract values from responses
- Store token and character ID automatically

**Variables**
- Reuse data across requests

Result: less manual work, more reliable flows.

---

## ⚙️ Newman — Running Tests Like a Pro

Introduction to **Newman**, the Postman CLI runner. With it, you can:
- Run your entire collection from the terminal
- Execute flows automatically
- Validate behaviour after changes

> Think of this as your first step toward automation pipelines.

---

## 🔐 Authentication vs Authorization

| Concept | Question |
|---------|----------|
| **Authentication** | Who are you? |
| **Authorization** | What can you do? |

Both are essential when testing secure APIs.

---

## 📦 Variables — When to Use What

**Environment Variables** — shared across collections and environments
```
username / password / auth_token
```

**Collection Variables** — specific to your test flow
```
characterName / characterId
```

> Good separation = cleaner and more scalable tests.

---

## 🎲 Business Rules — Ability Scores

The 6 core attributes:

| Attribute | |
|-----------|-|
| 💪 Strength | Physical power |
| 🤸 Dexterity | Agility and reflexes |
| 🛡️ Constitution | Endurance and health |
| 🧠 Intelligence | Reasoning and memory |
| 👁️ Wisdom | Perception and intuition |
| 🎭 Charisma | Influence and personality |

**Point Buy System:**
- Start with a base value
- Distribute 27 points
- Higher values cost more points
- Background can add bonuses

Reference: https://redcap.press/character-creation?method=Point+Buy

> Testing is not just checking responses — it's validating **business logic correctness**.

---

## 🧠 Thinking Like a Tester

Instead of picking random values for your character:
- Understand the class
- Understand the role
- Align attributes with purpose

**Example:** Rogue Gnome Criminal → prioritise Dexterity and survival skills.

This connects: **API + Product + Real-world logic**.

---

## 🔺 Testing Strategy — Smart Coverage

Key question raised: *do we test everything?*

The reality:
- Too many combinations exist
- Full coverage is expensive and impractical

Better approach:
- Focus on core logic
- Test high-risk scenarios
- Balance effort vs value

> Great testers don't test everything — they test what matters.

---

## 📝 Key Takeaways

- Inspect APIs using Chrome DevTools
- Automate flows with Postman scripts
- Use Newman to execute collections from the terminal
- Understand the difference between authentication and authorization
- Structure variables properly (environment vs collection)
- Validate business rules, not just responses
- Think critically about test coverage