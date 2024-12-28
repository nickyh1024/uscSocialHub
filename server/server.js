const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve frontend files

app.get('/api/food', (req, res) => {
    res.json([
        { name: "Cava", type: "Mediterranean", distance: "0.3 miles" },
        { name: "Chipotle", type: "Mexican", distance: "0.2 miles" },
        { name: "Dulce", type: "Cafe", distance: "0.5 miles" }
    ]);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
