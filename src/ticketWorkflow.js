const STATUS_TRANSITIONS = {
  open: ["triaged", "closed"],
  triaged: ["in_progress", "closed"],
  in_progress: ["waiting_on_customer", "resolved"],
  waiting_on_customer: ["in_progress", "closed"],
  resolved: ["closed", "in_progress"],
  closed: []
};

const PRIORITY_WEIGHTS = {
  low: 1,
  medium: 2,
  high: 3,
  urgent: 5
};

function transitionTicket(currentStatus, nextStatus) {
  if (!STATUS_TRANSITIONS[currentStatus]?.includes(nextStatus)) {
    throw new Error(`Cannot move ticket from ${currentStatus} to ${nextStatus}`);
  }
  return nextStatus;
}

function calculateTicketScore(ticket) {
  const ageHours = Math.max(1, ticket.ageHours || 1);
  const priority = PRIORITY_WEIGHTS[ticket.priority] || PRIORITY_WEIGHTS.medium;
  return priority * ageHours;
}

function canViewTicket(user, ticket) {
  if (user.role === "admin" || user.role === "support") {
    return true;
  }
  return user.id === ticket.requesterId;
}

module.exports = {
  STATUS_TRANSITIONS,
  transitionTicket,
  calculateTicketScore,
  canViewTicket
};
