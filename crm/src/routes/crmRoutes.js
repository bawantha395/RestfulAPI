import { addNewContact, getContactById, getContacts } from "../controllers/crmController";


const routes = (app) =>{
    app.route("/contact")
    .get((req,res,next) =>{
        //middleware
        console.log(`requst from: ${req.originalUrl}`)
        console.log(`reqst type: ${req.method}`)
        next();
       
    }, getContacts)

    .post(addNewContact);


    app.route("/contact/:contactId")
    .get(getContactById)
    .put((req,res)=>{
        res.send("put reqst succes ")
    })
    
    .delete((req,res)=>{
        res.send("delete reqst succes ")
    })
}

export default routes;