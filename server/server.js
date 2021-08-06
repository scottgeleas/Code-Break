const express = require('express');
const path = require('path');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../code-break/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../code-break/build/index.html'));
});

db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
});
