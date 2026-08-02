const express = require('express');
const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Dummy Database
let students = [
    { id: 1, name: "Rahul", age: 20 },
    { id: 2, name: "Amit", age: 22 }
];

// GET All
app.get('/students', (req, res) => {
    res.json(students);
});

// GET By ID
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id == req.params.id);

    if (!student)
        return res.status(404).json({ message: "Student not found" });

    res.json(student);
});

// POST
app.post('/students', (req, res) => {

    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    students.push(student);

    res.status(201).json({
        message: "Student Added",
        student
    });
});

// PUT
app.put('/students/:id', (req, res) => {

    const student = students.find(s => s.id == req.params.id);

    if (!student)
        return res.status(404).json({ message: "Student not found" });

    student.name = req.body.name;
    student.age = req.body.age;

    res.json({
        message: "Student Updated",
        student
    });
});

// DELETE
app.delete('/students/:id', (req, res) => {

    const index = students.findIndex(s => s.id == req.params.id);

    if (index === -1)
        return res.status(404).json({ message: "Student not found" });

    students.splice(index, 1);

    res.json({
        message: "Student Deleted"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});