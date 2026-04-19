// ============================================================
// GET /api/attributes — Postman Test Scripts
// Lesson 01 — Adventure Guide API & Postman Basics
// ============================================================

// ✅ 1. Status code should be 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// ✅ 2. Response time should be under 1000ms
pm.test("Response time is under 1000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

// ✅ 3. Response body should be valid JSON
pm.test("Response body is valid JSON", function () {
    pm.response.to.be.json;
});

// ✅ 4. Validate exact attribute names are present (precise check)
const expectedAttributes = [
    "Strength",
    "Dexterity",
    "Constitution",
    "Intelligence",
    "Wisdom",
    "Charisma"
];

const responseBody = pm.response.json();

// Iterate through expected values — more maintainable than one big test
expectedAttributes.forEach(function (attribute) {
    pm.test(`Response contains attribute: ${attribute}`, function () {
        // Adjust the path below to match the actual API response structure
        const attributeNames = responseBody.map(item => item.name);
        pm.expect(attributeNames).to.include(attribute);
    });
});

// ✅ 5. Validate response structure for each item
pm.test("Each attribute has expected fields", function () {
    responseBody.forEach(function (attribute) {
        pm.expect(attribute).to.have.property("name").that.is.a("string");
        // Add more field checks here as you learn the full schema
    });
});
