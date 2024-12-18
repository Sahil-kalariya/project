const express = require("express");
const app = express();
const PORT = 3000;

app.get("/" , (req, res) => {
    console.log("hello");
})

app.listen(PORT , () =>{
       console.log(`server listening on port ${PORT}`);
})