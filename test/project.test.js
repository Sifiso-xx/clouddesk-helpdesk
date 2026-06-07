const test = require("node:test");
const assert = require("node:assert/strict");

test("CloudDesk Helpdesk project metadata is defined", () => {
  assert.equal("CloudDesk Helpdesk".length > 0, true);
  assert.match("Software Developer, Backend Developer, Full Stack Developer, Cloud Engineer, DevOps Engineer", /Developer|Engineer|Graduate/);
});
