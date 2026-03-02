# 🛒 Mini Ekart — Full Stack E-Commerce App

Mini Ekart is a full-stack e-commerce web application built with the MERN stack.
It supports user authentication, admin features, cart management, and Razorpay payments.

---

## 🚀 Live Demo

* 🌐 Frontend: https://mini-ekart-app-five.vercel.app/
* ⚙️ Backend API: https://mini-ekart-backend.onrender.com

---

## ✨ Features

### 👤 User Features

* User registration and login (JWT based)
* Browse products
* Add to cart
* Address management
* Razorpay payment integration
* Order placement and history

### 🛠️ Admin Features

* Admin dashboard
* Product management
* Order management
* Sales overview

---

## 🏗️ Tech Stack

**Frontend**

* React (Vite)
* Redux Toolkit
* Tailwind CSS
* Axios

**Backend**

* Node.js
* Express.js
* MongoDB (Atlas)
* JWT Authentication
* Multer (file upload)

**Deployment**

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

---

## 📦 Installation (Local Setup)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/mini-ekart-app.git
cd mini-ekart-app
```

---

### 2️⃣ Backend setup

```bash
cd backend
npm install
```

Create `.env` in backend:

```
PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend setup

```bash
cd frontend
npm install
```

Create `.env` in frontend:

```
VITE_API_URL=https://mini-ekart-backend.onrender.com
VITE_RAZORPAY_KEY_ID=your_key
```

Run frontend:

```bash
npm run dev
```

---

## 🔐 Environment Variables

### Backend

* `MONGO_URI`
* `JWT_SECRET`
* `RAZORPAY_KEY_ID`
* `RAZORPAY_KEY_SECRET`

### Frontend

* `VITE_API_URL`
* `VITE_RAZORPAY_KEY_ID`

---

## ⚠️ Notes

* Render free tier may cause cold start delays (~30–60 seconds).
* Ensure environment variables are properly configured in Vercel.
* Do not commit `.env` files.

---

