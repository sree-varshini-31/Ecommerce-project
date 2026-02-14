# Ecommerce Project 🚀

Full-stack e-commerce application built by **5-member team** from **Exceler pvt Ltd**. Features user authentication, product catalog, shopping cart, and responsive design.

## 📁 Project Structure
Ecommerce-project/
├── backend/ # Spring Boot REST API
│ ├── pom.xml
│ ├── src/main/java/com/excelr/
│ └── src/main/resources/
├── src/ # React Frontend
│ ├── components/
│ ├── pages/
│ ├── App.jsx
│ └── package.json
├── README.md
└── package-lock.json

## 🚀 Quick Start

### Backend (Spring Boot)
```bash
cd backend
mvn clean spring-boot:run

Runs on: http://localhost:8080
Frontend (React + Vite)
npm install
npm run dev
Runs on: http://localhost:5173

✨ Features
✅ User Registration & JWT Authentication
✅ Product Catalog with Search/Filter
✅ Shopping Cart & Checkout
✅ Responsive UI (Mobile-first)
✅ RESTful APIs with Validation

🛠️ Tech Stack
Frontend	Backend
React 18	Spring Boot 3.x
Vite	Maven
TailwindCSS	Spring Data JPA
React Router	Spring Security
Axios	MySQL/H2 Database
📋 API Endpoints
text
GET     /api/products           # List products
GET     /api/products/{id}      # Get product
POST    /api/auth/register      # Register user
POST    /api/auth/login         # Login
POST    /api/cart/add           # Add to cart
🧪 Testing
bash
# Backend
cd backend && mvn test

# Frontend  
npm test
🌐 Deployment
Backend: Railway / Heroku + PostgreSQL

Frontend: Vercel / Netlify

Database: Railway / PlanetScale
👥 Team Credits
5-member team credits :
Sree Varshini
Shaik Moheeja
N .Sushma
Usha Sri Katakam
Pragathi
🤝 Contributing
Fork the repo
git checkout -b feature/new-feature
Commit changes
Push & create PR
