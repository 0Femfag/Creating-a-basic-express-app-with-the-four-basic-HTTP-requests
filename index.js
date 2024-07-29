const express = require("express");
const app = express();

app.use(express.json());

app.get("/get", function(req, res){
    return res.send("This is our first assessment task");
});

app.post("/post", (req, res)=>{
    const body = req.body;
    console.log(body);
    return res.json({message: "This is a backend express application"});
});

app.put("/put", function(req, res){
    return res.send("update successful");
});

app.delete("/delete", (req, res)=>{
    return res.send("Upward trajectory");
});


app.listen(1000, ()=>{
    console.log("app is running now");
});
