const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

app.listen(PORT, () => {
    console.log(`App running on https://localhost:${PORT}`);
});