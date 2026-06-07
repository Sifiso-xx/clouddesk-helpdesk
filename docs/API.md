# API Documentation

## Overview

This document describes the planned API surface for CloudDesk Helpdesk.

## Endpoints

### POST /api/tickets

**Purpose:** Supports the core CloudDesk Helpdesk workflow.

**Auth:** Required unless public endpoint.

**Validation:** Validate request body, path parameters, and ownership/role permissions.

**Example Response**

```json
{
  "status": "ok",
  "data": {}
}
```

### GET /api/tickets

**Purpose:** Supports the core CloudDesk Helpdesk workflow.

**Auth:** Required unless public endpoint.

**Validation:** Validate request body, path parameters, and ownership/role permissions.

**Example Response**

```json
{
  "status": "ok",
  "data": {}
}
```

### GET /api/tickets/:id

**Purpose:** Supports the core CloudDesk Helpdesk workflow.

**Auth:** Required unless public endpoint.

**Validation:** Validate request body, path parameters, and ownership/role permissions.

**Example Response**

```json
{
  "status": "ok",
  "data": {}
}
```

### PATCH /api/tickets/:id/status

**Purpose:** Supports the core CloudDesk Helpdesk workflow.

**Auth:** Required unless public endpoint.

**Validation:** Validate request body, path parameters, and ownership/role permissions.

**Example Response**

```json
{
  "status": "ok",
  "data": {}
}
```

### POST /api/tickets/:id/comments

**Purpose:** Supports the core CloudDesk Helpdesk workflow.

**Auth:** Required unless public endpoint.

**Validation:** Validate request body, path parameters, and ownership/role permissions.

**Example Response**

```json
{
  "status": "ok",
  "data": {}
}
```

### POST /api/tickets/:id/attachments

**Purpose:** Supports the core CloudDesk Helpdesk workflow.

**Auth:** Required unless public endpoint.

**Validation:** Validate request body, path parameters, and ownership/role permissions.

**Example Response**

```json
{
  "status": "ok",
  "data": {}
}
```

### GET /api/admin/analytics

**Purpose:** Supports the core CloudDesk Helpdesk workflow.

**Auth:** Required unless public endpoint.

**Validation:** Validate request body, path parameters, and ownership/role permissions.

**Example Response**

```json
{
  "status": "ok",
  "data": {}
}
```


## Error Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Readable error message"
  }
}
```
