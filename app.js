var app = require('express')();

app.set("port" , process.env.PORT || 3000);

app.get("/" , function(req,res) {
    res.send("<h1>Hello Heroku World</h1>");
    res.send("© <h4>From Snake Skill Project</h4>");
});


app.listen(app.get("port") , function() {
    console.log("App started on port " + app.get("post"));
});



