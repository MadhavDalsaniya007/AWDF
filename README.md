# 🚀 Express.js REST API Master Project

A comprehensive **Node.js + Express.js REST API** project covering both:

- 🟢 **Practical 4:** In-Memory CRUD Operations
- 🔵 **Practical 5:** MongoDB & Mongoose CRUD Operations

The project demonstrates RESTful API development, Express middleware, Mongoose schema/model integration, environment configuration, HTTP status codes, and API testing with Postman.

---

## 📌 Features

- **Dual Storage Architecture**
  - In-memory array operations for `/students`
  - Persistent MongoDB storage for `/tasks`
- **Complete CRUD Operations**
  - Create
  - Read
  - Update
  - Delete
- **Mongoose ODM Integration**
  - Schema definition
  - Model creation
  - MongoDB database operations
- **Express Middleware**
  - `express.json()` for JSON request-body parsing
  - Custom HTTP request logger
- **Environment Configuration**
  - Uses `dotenv`
  - MongoDB URI and server port stored in `.env`
- **Standard HTTP Status Codes**
  - `200 OK`
  - `201 Created`
  - `400 Bad Request`
  - `404 Not Found`
  - `500 Internal Server Error`
- **Postman Ready**
  - All endpoints can be tested using Postman

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **Express.js** | REST API framework |
| **MongoDB** | Persistent NoSQL database |
| **Mongoose** | MongoDB ODM |
| **dotenv** | Environment variable management |
| **Postman** | API testing |
| **Visual Studio Code** | Development environment |

---

## 📂 Project Structure

```text
REST_API/
│
├── models/
│   └── Task.js
│
├── node_modules/
│
├── .env
├── .env.example
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

### File Description

- `index.js` — Main Express server and API routes
- `models/Task.js` — Mongoose schema and model
- `.env` — Local environment variables
- `.env.example` — Example environment configuration
- `.gitignore` — Files/folders excluded from Git
- `package.json` — Project dependencies and scripts
- `package-lock.json` — Exact dependency versions

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/taskmanager
```

> **Note:** MongoDB normally uses port `27017`. Do not use `3000` for the MongoDB URI because `3000` is the Express server port in this project.

You can also create `.env.example`:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/taskmanager
```

Keep your actual `.env` file private and add it to `.gitignore`.

---

## 📥 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd REST_API
```

### 2. Install Dependencies

```bash
npm install
```

If dependencies have not already been installed, you can install the required packages with:

```bash
npm install express mongoose dotenv
```

### 3. Start MongoDB

Make sure your MongoDB server is running before testing the `/tasks` endpoints.

If MongoDB is installed locally, start the MongoDB service according to your operating system setup.

### 4. Start the Server

Using the npm script:

```bash
npm start
```

Or directly:

```bash
node index.js
```

The Express server should run at:

```text
http://localhost:3000
```

---

# 📖 API Documentation

## 🟢 Practical 4 — In-Memory API

Base route:

```text
/students
```

| Method | Endpoint | Description | Request Body |
|---|---|---|---|
| GET | `/students` | Get all students | None |
| GET | `/students/:id` | Get student by ID | None |
| POST | `/students` | Add a new student | JSON |
| PUT | `/students/:id` | Update student by ID | JSON |
| DELETE | `/students/:id` | Delete student by ID | None |

### POST `/students`

Example request:

```json
{
  "name": "Karan",
  "age": 21
}
```

### PUT `/students/:id`

Example request:

```json
{
  "name": "Karan Patel",
  "age": 22
}
```

---

# 🔵 Practical 5 — MongoDB & Mongoose API

Base route:

```text
/tasks
```

| Method | Endpoint | Description | Request Body |
|---|---|---|---|
| GET | `/tasks` | Get all tasks | None |
| GET | `/tasks/:id` | Get task by ID | None |
| POST | `/tasks` | Create a new task | JSON |
| PUT | `/tasks/:id` | Update task by ID | JSON |
| DELETE | `/tasks/:id` | Delete task by ID | None |

### POST `/tasks`

Example request:

```json
{
  "title": "Complete Project",
  "completed": false
}
```

### PUT `/tasks/:id`

Example request:

```json
{
  "title": "Complete Project",
  "completed": true
}
```

> Replace `:id` with the actual MongoDB document ID returned by the API.

---

## 🔄 Middleware Used

### Express JSON Parser

```javascript
app.use(express.json());
```

This middleware allows Express to read JSON data sent in request bodies.

### Custom HTTP Request Logger

```javascript
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
```

Example console output:

```text
[2026-08-12T07:30:00.000Z] GET /students
[2026-08-12T07:31:00.000Z] POST /tasks
```

---

# 📊 HTTP Status Codes

| Status Code | Meaning | Typical Usage |
|---|---|---|
| `200` | OK | Successful GET, PUT, DELETE |
| `201` | Created | Successful POST |
| `400` | Bad Request | Invalid input |
| `404` | Not Found | Resource does not exist |
| `500` | Internal Server Error | Unexpected server/database error |

---

# 🧪 Testing with Postman

Use the following base URL:

```text
http://localhost:3000
```

## Students API

### 1. Get All Students

```text
GET http://localhost:3000/students
```

### 2. Get Student by ID

```text
GET http://localhost:3000/students/1
```

### 3. Add Student

```text
POST http://localhost:3000/students
```

Body → **raw** → **JSON**

```json
{
  "name": "Karan",
  "age": 21
}
```

### 4. Update Student

```text
PUT http://localhost:3000/students/1
```

Body:

```json
{
  "name": "Karan Patel",
  "age": 22
}
```

### 5. Delete Student

```text
DELETE http://localhost:3000/students/1
```

---

## Tasks API

### 1. Get All Tasks

```text
GET http://localhost:3000/tasks
```

### 2. Get Task by ID

```text
GET http://localhost:3000/tasks/<mongodb-id>
```

### 3. Create Task

```text
POST http://localhost:3000/tasks
```

Body:

```json
{
  "title": "Complete Project",
  "completed": false
}
```

### 4. Update Task

```text
PUT http://localhost:3000/tasks/<mongodb-id>
```

Body:

```json
{
  "title": "Complete Project",
  "completed": true
}
```

### 5. Delete Task

```text
DELETE http://localhost:3000/tasks/<mongodb-id>
```

---

# 🔐 `.gitignore`

A recommended `.gitignore` file:

```gitignore
node_modules/
.env
npm-debug.log*
```

> Never commit passwords, API keys, database credentials, or other secrets stored in `.env`.

---

# 🚀 Running the Project

The complete workflow is:

```text
Install Node.js
      ↓
Clone / Create Project
      ↓
npm install
      ↓
Configure .env
      ↓
Start MongoDB
      ↓
npm start
      ↓
Open Postman
      ↓
Test /students
      ↓
Test /tasks
```

---

# 🔮 Future Improvements

- 🔐 JWT Authentication & Authorization
- 🛡️ Centralized Error Handling Middleware
- ✅ Input Validation using Joi or `express-validator`
- 🏗️ Full MVC Architecture
- 📄 Swagger / OpenAPI API Documentation
- 🧪 Automated API Testing
- 🐳 Docker Support
- ☁️ MongoDB Atlas Integration
- 👤 User Authentication and Role-Based Access Control

---

# 🎓 Academic Information

**Course:** Advanced Web Application Development (AWDF)

**Projects Covered:**

- Practical 4 — In-Memory REST API
- Practical 5 — MongoDB & Mongoose REST API

This project is developed for educational and practical learning purposes.

---

## 👨‍💻 Author

**Madhav**

---

## 📜 License

This project is developed for educational purposes.
