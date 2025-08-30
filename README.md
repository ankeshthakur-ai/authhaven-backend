# Authantication System Backend

This is a Node.js backend for a fullstack authentication system. It provides secure user registration, login, JWT-based authentication, and protected routes using Express and MongoDB.

## Features
- User registration and login
- Password hashing with bcryptjs
- JWT authentication
- Protected routes (middleware)
- MongoDB integration with Mongoose
- Environment variable support (.env)
- CORS enabled

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors
- nodemon (development)

## Folder Structure
```
AS_Backend/
├── package.json
├── server.js
├── .env
├── .gitignore
├── config/
│   └── db.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── auth.js
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (local or Atlas)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ankeshthakur-ai/authhaven-backend.git
   cd authhaven-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
4. Start the server:
   ```sh
   npm run dev
   # or
   nodemon server.js
   ```

## API Endpoints

### Auth Routes
- `POST /api/auth/signup` — Register a new user
- `POST /api/auth/login` — Login and receive JWT token
- `GET /api/auth/me` — Get current user info (protected, requires `x-auth-token` header)

## Usage
- Use Postman or any HTTP client to test endpoints.
- Store JWT token in client (localStorage/cookie) and send it in `x-auth-token` header for protected routes.

## Environment Variables
- `.env` file is required and should not be committed (see `.gitignore`).
- Example:
  ```env
  MONGO_URI=mongodb://localhost:27017/AuthanticationSystem
  JWT_SECRET=your_jwt_secret
  PORT=5000
  ```

## Important Notes
- Do not commit sensitive information (like `.env` or `node_modules`).
- All passwords are securely hashed.
- JWT tokens expire in 1 hour by default.

## License
This project is licensed under the ISC License.

## Author
- Ankesh Thakur

---
Feel free to contribute or open issues for improvements!
