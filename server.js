const express = require('express');
const app = express();

// Handle POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Addition endpoint
app.post('/addition', (req, res) => {
  const { num1, num2 } = req.body;
  const result = parseFloat(num1) + parseFloat(num2);
  res.json({ result });
});

// Subtraction endpoint
app.post('/subtraction', (req, res) => {
  const { num1, num2 } = req.body;
  const result = parseFloat(num1) - parseFloat(num2);
  res.json({ result });
});

// Multiplication endpoint
app.post('/multiplication', (req, res) => {
  const { num1, num2 } = req.body;
  const result = parseFloat(num1) * parseFloat(num2);
  res.json({ result });
});

// Division endpoint
app.post('/division', (req, res) => {
  const { num1, num2 } = req.body;
  if (parseFloat(num2) === 0) {
    res.status(400).json({ error: 'Division by zero is not allowed' });
  } else {
    const result = parseFloat(num1) / parseFloat(num2);
    res.json({ result });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
