const test = require("node:test");
const assert = require("node:assert/strict");
const {
  transitionTicket,
  calculateTicketScore,
  canViewTicket
} = require("../src/ticketWorkflow");

test("validates ticket status transitions", () => {
  assert.equal(transitionTicket("open", "triaged"), "triaged");
  assert.throws(() => transitionTicket("closed", "open"), /Cannot move/);
});

test("prioritizes older urgent tickets", () => {
  assert.equal(calculateTicketScore({ priority: "urgent", ageHours: 4 }), 20);
  assert.equal(calculateTicketScore({ priority: "low", ageHours: 4 }), 4);
});

test("checks ticket visibility by role and ownership", () => {
  const ticket = { requesterId: "user-1" };
  assert.equal(canViewTicket({ id: "user-2", role: "support" }, ticket), true);
  assert.equal(canViewTicket({ id: "user-1", role: "customer" }, ticket), true);
  assert.equal(canViewTicket({ id: "user-2", role: "customer" }, ticket), false);
});
