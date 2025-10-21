const express=require('express'); // import express
const fs=require('fs'); //import fs module
const app=express(); //creare instance of express

app.use(express.json());
// Read all contacts from the JSON file
let contacts=JSON.parse(fs.readFileSync('contacts.json',{encoding:'utf8'}));

// Display contacts in a formatted way
app.get('/contacts',(req,res)=>{
    res.status(200).json({
        sucess:true,
        contacts
    });
})
// Add a new contact to the JSON file
app.post('/add-contact',(req,res)=>{
    const {id,name,email,phone}=req.body;
    const newContact={
        id,name,email,phone
    };
    contacts.push(newContact);
     fs.writeFileSync('contacts.json', JSON.stringify(contacts, null, 2));
    console.log(contacts);

    res.status(201).json({
        sucess:true,
        message:'data added sucessfully'
    })
})

// Find and display a specific contact by name
app.get('/contact/:name',(req,res)=>{
    const name=req.params.name;
    const contact=contacts.find((contact)=>{
        return contact.name===name
    });
    res.status(200).json({
        sucess:true,
        contact
    });
})

// - Delete a contact by id
app.delete('/contact/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    contacts = JSON.parse(fs.readFileSync('contacts.json', 'utf8'));
    const index = contacts.findIndex(contact => contact.id === id);
    if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `Contact with id ${id} not found`
    });
  }
    const deletedContact = contacts.splice(index, 1)[0];
    fs.writeFileSync('contacts.json', JSON.stringify(contacts, null, 2));

    res.status(200).json({
        sucess:true,
        message:'delete sucessfully',
        deletedContact
    });
    console.log(contacts); 
})
// server listin
app.listen(3000,()=>{
    console.log('server listining on the port 3000');
})