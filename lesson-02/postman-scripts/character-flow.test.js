// ============================================================
// POST /api/auth/token — Extract & Store Auth Token
// Lesson 02 — Run this in the "Tests" tab of the auth request
// ============================================================

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response contains token", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("token");
    pm.expect(jsonData.token).to.be.a("string");

    // Store token in environment variable for reuse
    pm.environment.set("auth_token", jsonData.token);
    console.log("✅ Token saved to environment variable: auth_token");
});


// ============================================================
// POST /api/characters — Create Character & Store ID
// Run this in the "Tests" tab of the create character request
// Header required: Authorization: Bearer {{auth_token}}
// ============================================================

pm.test("Status code is 201 (Created)", function () {
    pm.response.to.have.status(201);
});

pm.test("Response contains character ID", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("id");

    // Store character ID for use in GET and PATCH requests
    pm.environment.set("character_id", jsonData.id);
    console.log("✅ Character ID saved:", jsonData.id);
});


// ============================================================
// GET /api/characters/{{character_id}} — Retrieve Character
// Run this in the "Tests" tab of the get character request
// ============================================================

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time is under 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

pm.test("Character has expected fields", function () {
    const character = pm.response.json();
    pm.expect(character).to.have.property("id");
    pm.expect(character).to.have.property("name");
    // Characters start as drafts — class/species may still be null
});


// ============================================================
// PATCH /api/characters/{{character_id}} — Update Character
// Run this in the "Tests" tab of each PATCH request
// Body example: { "class": "Wizard" }
// ============================================================

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("PATCH update was applied", function () {
    const character = pm.response.json();
    // Adjust field name to match whichever PATCH you're testing
    // e.g. after patching class:
    pm.expect(character.class).to.not.be.null;
    pm.expect(character.class).to.be.a("string");
});
