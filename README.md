# 🚀 Vibe Coder Assignment – Influencer Discovery App

A simple but polished influencer discovery and shortlist management app built with React, TypeScript, Vite, Tailwind CSS, and Zustand.

Built as part of a frontend assignment focused on UI/UX, state management, and component design.

The goal of this project was to improve a starter codebase by fixing issues, improving UI/UX, and introducing better state management and structure.

---

## 🔗 Features

### 🔍 Influencer Discovery
- Browse influencers across Instagram, YouTube, and TikTok
- Search by username or full name
- Filter results by platform
- Clean, responsive card-based UI

---

### ⭐ Shortlist System
- Add influencers to a shortlist
- Prevent duplicate entries
- Remove profiles from shortlist
- View all saved profiles in a separate page

---

### 🎨 UI/UX Improvements
- Redesigned UI with a clean SaaS-style layout
- Consistent spacing, typography, and hover interactions
- Better empty states for both search and shortlist pages
- Toast feedback for user actions (add/remove)
- Disabled state for already-added profiles
- Micro-interactions for better user experience

---

## 🧠 Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- React Router

---

## 🏗️ Architecture Decisions

### 🧩 State Management (Zustand)

Replaced React Context with Zustand for:
- Simpler global state handling
- Better performance (reduced unnecessary re-renders)
- Cleaner and scalable architecture

The store handles:
- Adding profiles
- Removing profiles
- Preventing duplicates

---

### 🎨 UI Approach

Instead of using a UI library, a lightweight design system was built using Tailwind CSS:

- Card-based layout for profiles
- Consistent spacing and hover patterns
- Reusable button and interaction styles

Focus was on clarity, consistency, and usability.

---

### 🧱 Component Structure

- `ProfileCard` → individual influencer card
- `ProfileList` → renders filtered results
- `SearchPage` → main discovery page
- `ShortlistPage` → saved profiles view
- `Layout` → global wrapper

---

## ⚖️ Trade-offs

- Avoided UI libraries to keep bundle lightweight
- Used simple Tailwind transitions instead of animation libraries
- Kept state management minimal instead of over-engineering persistence

---

## 🚀 Possible Improvements

If given more time, I would:

- Add localStorage persistence for shortlist
- Introduce skeleton loading states
- Add Framer Motion for smoother animations
- Improve accessibility (ARIA labels, keyboard navigation)
- Add unit tests for store and components

---

## 📌 How to Run

```bash
npm install
npm run dev
```