const express = require("express");
const app = express();
const PORT = 3000;

app.get("/" , (req, res) => {
    console.log("hello");
})
 
app.get("/meet" , (req, res) => {
    console.log("merge conflict from meet");
})

app.get("/branch1" , (req, res) => {
    console.log("elo");
})

app.get("/title",()=>{
    console.log("This is a Title Page")
})

app.get("/title1",()=>{
    console.log("This is a Title1 Page")
})
app.get("/home" , () => {
    console.log("this is home");
})
app.get("/home" , () => {
    console.log("this is home");
})

app.listen(PORT , () =>{
       console.log(`server listening on port ${PORT}`);
})
