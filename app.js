const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Howdy world!'));

const PORT = 3000

app.listen(PORT, () => {
    console.log(`My REST API running on port ${PORT}`)
})