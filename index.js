const express = require('express');
let app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('ToDo Masters Express App'));
app.listen(port, function() {
    console.log(`Express server listening on port ${port}`)\n});