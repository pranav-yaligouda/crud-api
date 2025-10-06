# CRUD API

A RESTful API for performing CRUD operations on user data, built with Node.js, Express, MongoDB (via Mongoose), and JWT authentication. The project includes robust error handling, environment-based configuration, and Docker support for containerized deployment.

---

## Features

- **User Registration & Authentication**
	- Register new users with hashed passwords using bcrypt.
	- Login with JWT token generation.
	- Logout endpoint (placeholder).

- **User Management**
	- Fetch all users.
	- Fetch user by ID (excluding password).
	- Create, update, and delete users (route placeholders).

- **Error Handling**
	- Centralized error middleware for Mongoose validation, duplicate keys, and invalid ObjectIds.

- **Environment Configuration**
	- Uses `.env` for sensitive configuration (MongoDB URI, JWT secret, etc.).

- **Docker Support**
	- Dockerfile for containerized deployment.
	- `.dockerignore` to exclude unnecessary files.

- **Linting**
	- ESLint configuration for code quality.

---


## Project Structure

```
├── package.json           # Project metadata, dependencies, scripts
├── Dockerfile             # Docker container configuration
├── .env                   # Environment variables (not committed)
├── .dockerignore          # Files/folders to ignore in Docker builds
├── .gitignore             # Files/folders to ignore in git
├── README.md              # Project documentation
├── src/
│   ├── app.js                 # Express app entry point
│   ├── config/
│   │   └── envconfig.js       # Loads environment variables
│   ├── controllers/
│   │   ├── auth.controller.js # Auth logic (register, login, logout)
│   │   └── user.controller.js # User CRUD logic
│   ├── database/
│   │   └── connectDb.js       # MongoDB connection setup
│   ├── middlewares/
│   │   └── error.middleware.js# Central error handler
│   ├── models/
│   │   └── user.model.js      # Mongoose user schema/model
│   └── routes/
│       ├── auth.routes.js     # Auth endpoints
│       └── user.routes.js     # User endpoints
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or Atlas)
- Docker (optional, for containerization)

### Installation

1. **Clone the repository**
	 ```sh
	 git clone https://github.com/pranav-yaligouda/crud-api.git
	 cd crud-api
	 ```

2. **Install dependencies**
	 ```sh
	 npm install
	 ```

3. **Configure environment variables**

	 Create a `.env` file in the root directory:

	 ```
	 NODE_ENV=development
	 PORT=5000
	 MONGODB_URI=your-mongodb-uri
	 JWT_SECRET=your-jwt-secret
	 JWT_EXPIRES_IN=1d
	 ```

4. **Run the server**
	 - Development (with auto-reload):
		 ```sh
		 npm run dev
		 ```
	 - Production:
		 ```sh
		 npm start
		 ```

---

## API Endpoints

### Auth Routes

- `POST /api/v1/auth/register` — Register a new user
- `POST /api/v1/auth/login` — Login and receive JWT token
- `POST /api/v1/auth/logout` — Logout (placeholder)

### User Routes

- `GET /api/v1/users/` — Get all users
- `GET /api/v1/users/:id` — Get user by ID
- `POST /api/v1/users/` — Create user (placeholder)
- `PUT /api/v1/users/:id` — Update user by ID (placeholder)
- `DELETE /api/v1/users/:id` — Delete user by ID (placeholder)

---

## Docker Usage

1. **Build the Docker image**
	 ```sh
	 docker build -t crud-api .
	 ```

2. **Run the container**
	 ```sh
	 docker run -p 5000:5000 --env-file .env crud-api
	 ```

---

## Development

- **Linting**
	```sh
	npm run lint
	```

- **Environment Variables**
	- [`.env`](.env) for development
	- `.env.production` for production (ignored by git)

---

## License

MIT License © 2025 Pranav Yaligouda

---

## Contributing

Pull requests and issues are welcome! See [issues](https://github.com/pranav-yaligouda/crud-api/issues).

---

## Author

Pranav Yaligouda
