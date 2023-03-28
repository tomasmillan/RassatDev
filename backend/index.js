const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to Rassat Server')
})

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server started on ${port}`));
