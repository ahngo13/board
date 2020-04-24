const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/insert", require("./routes/insertRouter"));
app.use("/update", require("./routes/updateRouter"));
app.use("/read", require("./routes/readRouter"));
app.use("/delete", require("./routes/deleteRouter"));

app.listen(3000, ()=>{
    console.log('liston 3000');
});