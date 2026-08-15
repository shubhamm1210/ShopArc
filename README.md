# 🛒 ShopArc — Full-Stack E-Commerce Platform

ShopArc is a full-stack e-commerce web application built using the MERN stack. It provides a complete shopping workflow with user authentication, product browsing, cart management, address handling, order placement, and Razorpay payment integration.

---

## 🚀 Live Demo

* 🌐 **Frontend:** https://mini-ekart-app-five.vercel.app/
* ⚙️ **Backend API:** https://mini-ekart-backend.onrender.com

---

## ✨ Features

### 👤 User Features

* User registration and login with JWT authentication
* Browse available products
* Add and manage products in the cart
* Manage delivery addresses
* Place orders using Razorpay
* View previous orders and order history

### 🛠️ Admin Features

* Admin dashboard
* Add, update, and manage products
* Manage customer orders
* View sales overview

---

## 🏗️ Tech Stack

### Frontend

* React.js with Vite
* Redux Toolkit
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* JWT Authentication

### Deployment

* **Frontend:** Vercel
* **Backend:** Render
* **Database:** MongoDB Atlas

---

## 📂 Project Structure

```text
ShopArc/
├── frontend/
│   ├── src/
│   └── ...
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
│
└── README.md
```

---

## ⚙️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/mini-ekart-app.git
cd mini-ekart-app
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

```

Start the backend:

```bash
npm run dev
```

### 3. Set up the frontend

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` directory:

```env
VITE_API_URL=https://mini-ekart-backend.onrender.com
```

Start the frontend:

```bash
npm run dev
```

The application will then be available on the local development server provided by Vite.

---

## 🔐 Environment Variables

### Backend

| Variable              | Purpose                            |
| --------------------- | ---------------------------------- |
| `MONGO_URI`           | MongoDB connection string          |
| `JWT_SECRET`          | Secret used for JWT authentication |
           |

### Frontend

| Variable               | Purpose             |
| ---------------------- | ------------------- |
| `VITE_API_URL`         | Backend API URL     |

---

## ⚠️ Notes

* The backend is deployed on Render's free tier, so the first request may take some time if the service is inactive.
* Make sure all required environment variables are configured before running the application.
* Never commit `.env` files or expose secret keys in the repository.

---

## 👨‍💻 Author

**Shubham Kumar**

Computer Engineering Undergraduate — NIAMT Ranchi

* GitHub: https://github.com/shubhamm1210
* LinkedIn: https://www.linkedin.com/in/shubhamkumar1210
