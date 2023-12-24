const express = require('express');
const app = express();
const port = 3000;

// Sample array to store items
let itemsArray = ['Item 1', 'Item 2', 'Item 3'];

// Middleware to parse JSON
app.use(express.json());

// Route to fetch all items in the array
app.get('/items', (req, res) => {
    res.json({ items: itemsArray });
});

// Route to add an item to the array
app.post('/items', (req, res) => {
    const newItem = req.body.item; // Assuming the request body has a field called 'item'

    if (newItem) {
        itemsArray.push(newItem);
        res.status(201).json({ message: 'Item added successfully', newItem });
    } else {
        res.status(400).json({ message: 'Please provide an item to add' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
