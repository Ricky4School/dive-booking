# 🌊 Dive Booking Web App (React + TypeScript)

A modern dive booking web application built with React, TypeScript, and Tailwind CSS.
This project simulates a real-world booking system with API integration, internationalization, and clean frontend architecture.

---

## 🚀 Features

* 🏝️ Landing Page with Hero Carousel & Sections
* 📦 Dive Package Listing (API-driven)
* 🧾 Booking System (LocalStorage persistence)
* 📜 Booking History (CRUD)
* 📞 Contact Page (Map + Social Links)
* 🌐 Multi-language Support (English / 中文)
* ⚡ Responsive UI with Tailwind CSS

---

## 🧱 Tech Stack

* **Frontend:** React + TypeScript
* **Routing:** React Router
* **Styling:** Tailwind CSS
* **HTTP Client:** Axios
* **State/Data Layer:** Custom Hooks
* **i18n:** react-i18next
* **Mock API:** JSON (simulating backend)

---

## 📁 Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/           # Page-level components
├── hooks/           # Custom hooks (data layer)
├── services/        # API & request layer
├── types/           # TypeScript types
├── i18n/            # Localization files
```

---

## 🔌 API (Mock)

Data is served from:

```
/public/api/packages.json
```

Using:

```ts
axios.get("/api/packages.json")
```

---

## 🌍 Internationalization

* Supports **English (en)** and **Chinese (zh)**
* Language preference is stored in **localStorage**
* Automatically restored on page reload

---

## 💳 Booking Flow

1. Browse dive packages
2. Navigate to booking page
3. Submit booking form
4. Data stored in localStorage
5. View in booking history

---

## ⚙️ Getting Started

```bash
npm install
npm run dev
```

---

## 🎯 Future Improvements

* 🔄 Replace mock API with real backend
* 🧠 Add global state management (Zustand)
* 📊 Add filtering & sorting for packages
* 🔔 Toast notifications for UX
* 🔐 Authentication system

---

## 👨‍💻 Author

Built as a hands-on project to simulate real-world frontend architecture and improve system design skills.

---
