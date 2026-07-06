# 🔐 Auth System Frontend

A React-based frontend for a user authentication system. The application allows users to register an account, log in using their username and password, and access a protected profile page after successful authentication.

> **Note:** This repository contains **only the frontend** of the application. It communicates with a separate backend API built using Node.js, Express, and MySQL.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Application](#-running-the-application)
- [Usage](#-usage)
- [Future Improvements](#-future-improvements)
- [Useful Resources](#-useful-resources)
- [Author](#-author)
- [License](#-license)

---

## 📌 Overview

This project is the frontend of a full-stack authentication system developed using **React**. It provides an intuitive user interface for registration, login, and profile access.

Users without an account are required to register first before logging in. Once authenticated successfully, they are redirected to their profile page.

The frontend communicates with a backend API built with **Node.js**, **Express**, and **MySQL**.

---

## ✨ Features

- User registration
- User login using username and password
- Protected profile page
- Client-side form validation
- React Router navigation
- Responsive user interface
- API integration with a Node.js/Express backend

---

## 🛠 Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- React Router DOM
- Fetch API

---

## 📁 Project Structure

```text
App/
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🌐 API Endpoints

The frontend communicates with the following backend endpoints:

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/register` | Register a new user |
| POST | `/login` | Authenticate an existing user |
| GET | `/profile` | Retrieve the authenticated user's profile |

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

---

## 📥 Installation

### 1. Clone the repository

```bash
git clone https://github.com/EllyMikera/auth-system.git
```

### 2. Navigate into the project directory

```bash
cd App
```

### 3. Install dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_URL=http://localhost:5000
```

Replace the URL with your deployed backend API if necessary.

---

## ▶ Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 💻 Usage

1. Open the application in your browser.
2. Register for an account if you don't already have one.
3. Log in using your username and password.
4. After successful authentication, you will be redirected to your profile page.
5. Only authenticated users can access the profile page.

---

## 🔮 Future Improvements

- Password visibility toggle improvements
- Remember Me functionality
- Refresh Tokens
- Email Verification
- Password Reset functionality

---

## 📚 Useful Resources

- React Documentation: https://react.dev/
- Vite Documentation: https://vite.dev/
- React Router Documentation: https://reactrouter.com/

---

## 👤 Author

**Elly Mikera**

- GitHub: https://github.com/EllyMikera
- LinkedIn: https://www.linkedin.com/in/elly-mikera-a1b52836a
- Email: mikeraelly015@gmail.com

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub. It helps others discover the project and support its development