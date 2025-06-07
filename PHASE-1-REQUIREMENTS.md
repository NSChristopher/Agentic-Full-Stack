# Phase 1 MVP Requirements – Online Ordering System

## Overview

This document describes the requirements for Phase 1 of the Restaurant Ordering System MVP. The goal is to build a functional demo where customers can browse a menu, add items to a cart, select pickup or delivery, and complete checkout with a fake credit card.

---

## Core Features

### 1. Menu Browsing
- Display a basic menu (hardcoded or seeded).
- Each menu item: Name, Price, (optional) Description.

### 2. Cart Management
- Add/remove menu items to/from cart.
- Change item quantities.
- Cart displays running total.

### 3. Order Type Selection
- Option to choose “Pickup” or “Delivery”.
- If “Delivery” selected, prompt for delivery address.

### 4. Checkout & Fake Payment
- Review order summary before confirming.
- Payment form (fake): Name, Card Number, Expiry, CVV.
- No real payment; submit for demo only.
- Show confirmation page with order details.

---

## Technical Constraints

- **Frontend:** React 18, Vite, Tailwind, ShadCN UI
- **Backend:** Express.js REST API (optionally, use in-memory or SQLite with Prisma ORM)
- **No authentication required** for customers
- **Orders should be persisted** (in-memory or DB) for test/demo

---

## Out of Scope (Phase 1)

- Real payment processing
- Admin dashboard
- Menu CRUD (for now, menu is static)
- Notifications and reporting
- Branding and advanced settings

---

## Acceptance Criteria

- [ ] User can view menu and add/remove items to cart
- [ ] User can choose pickup or delivery (and enter delivery address)
- [ ] User can complete checkout with fake payment info
- [ ] User sees order confirmation page
- [ ] Orders are stored (for demo purposes)
