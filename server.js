const express = require('express');
const mongoose = require('mongoose');
const apiroutes = require('./routes/apiroutes');
const htmlroutes = require('./routes/htmlroutes');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(apiroutes);
app.use(htmlroutes);

app.listen(PORT, () => {
    console.log(`App running on https://localhost:${PORT}`);
});