const routes = (app) =>{
    app.route("/contact")
    .get((req,res,next) =>{
        //middleware
        console.log(`requst from: ${req.originalUrl}`)
        console.log(`reqst type: ${req.method}`)
        next();
       
    }, (req,res, next)=>{
        res.send("get reqst succes")
    })

    .post((req,res)=>{
        res.send("post reqst succes ")
    })


    app.route("/contact/:contactId")
    .put((req,res)=>{
        res.send("put reqst succes ")
    })

    .delete((req,res)=>{
        res.send("delete reqst succes ")
    })
}

export default routes;