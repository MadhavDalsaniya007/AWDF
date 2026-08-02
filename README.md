# AWDF
# REST API CRUD using Express.js

A simple RESTful Backend Server built with **Node.js** and **Express.js** that demonstrates complete **CRUD (Create, Read, Update, Delete)** operations using an in-memory array. The API is tested using **Postman**.

---

## 📌 Features

- Express.js Server
- RESTful API
- CRUD Operations
- JSON Request/Response
- Express Middleware
- HTTP Status Codes
- Postman Testing

---

## 🛠 Technologies Used

- Node.js
- Express.js
- Postman
- Visual Studio Code

---

## 📂 Project Structure

```
REST_API/
│── node_modules/
│── package.json
│── package-lock.json
│── index.js
└── README.md
```

---

## 📥 Installation

### 1. Clone or Download the Project

```bash
git clone <repository-url>
```

or download the ZIP file.

### 2. Navigate to Project Folder

```bash
cd REST_API
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Server

```bash
node index.js
```

Server will start at:

```
http://localhost:3000
```

---

## 📖 API Endpoints

### Get All Students

**GET**

```
http://localhost:3000/students
```

---

### Get Student by ID

**GET**

```
http://localhost:3000/students/:id
```

Example

```
http://localhost:3000/students/1
```

---

### Add Student

**POST**

```
http://localhost:3000/students
```

Body

```json
{
  "name": "Karan",
  "age": 21
}
```

---

### Update Student

**PUT**

```
http://localhost:3000/students/:id
```

Body

```json
{
  "name": "Karan Patel",
  "age": 22
}
```

---

### Delete Student

**DELETE**

```
http://localhost:3000/students/:id
```

Example

```
http://localhost:3000/students/3
```

---

## 🔄 Middleware

The application uses the following middleware:

- `express.json()` for parsing JSON request bodies.
- Custom logging middleware to log HTTP requests.

Example:

```javascript
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
```

---

## 📋 Sample Response

### GET /students

```json
[
  {
    "id": 1,
    "name": "Rahul",
    "age": 20
  },
  {
    "id": 2,
    "name": "Amit",
    "age": 22
  }
]
```

---

## 📊 HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## 🧪 Testing

All API endpoints can be tested using **Postman**.

Methods used:

- GET
- POST
- PUT
- DELETE

---

## 🚀 Future Improvements

- MongoDB Database Integration
- MySQL Support
- JWT Authentication
- Input Validation
- Error Handling Middleware
- MVC Architecture
- Environment Variables
- Docker Support

---

## 👨‍💻 Author

**Name:** Your Name

**Course:** Advanced Web Application Development (AWDF)

**Project:** RESTful Backend Server using Express.js

---

## 📜 License

This project is developed for educational purposes.
