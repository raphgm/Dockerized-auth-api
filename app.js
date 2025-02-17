const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Mock database (for demo purposes)
let users = [
  { id: 1, email: 'user@example.com', password: 'password123' }
];

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ message: 'Login successful!', user: { id: user.id, email: user.email } });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Registration endpoint
app.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  const existingUser = users.find(u => u.email === email);

  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = { id: users.length + 1, email, password };
  users.push(newUser);
  res.status(201).json({ message: 'User registered!', user: newUser });
});

// Start server
app.listen(port, () => {
  console.log(`Auth API running on port ${port}`);
});

module.exports = app; // Export for testing