import { addNewContact, deleteContact, getContactById, getContacts, updateContact } from "../controllers/crmController";


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

    .put(updateContact)
    
    .delete(deleteContact)
}

export default routes;