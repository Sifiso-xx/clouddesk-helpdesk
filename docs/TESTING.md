# Testing

## What The Tests Prove

- Ticket status transitions follow the expected workflow.
- Priority and assignment helpers behave consistently.
- Analytics helpers can summarise ticket state without a full UI.
- Core support rules can be reviewed independently from deployment concerns.

## How To Run

```bash
npm test
```

## Why This Matters

The tests focus on workflow rules because those are the parts most likely to affect users, support agents, and managers in a real helpdesk system.

## Next Test Improvements

- Add route integration tests for ticket creation, comments, and status changes.
- Add Playwright tests for the admin triage flow.
- Add tests for attachment type restrictions and ownership visibility.
