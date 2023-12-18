import express from "express";
import PersonOperations from "../controllers/personData.js"
//import Person from "../models/Person.js"



const person = new PersonOperations
const router = express.Router();

//home route

router.get('/', (req, res) =>{
    res.send('Server running!')
})

router.post('/person', async (req, res) =>{
    
    try {
        person.addPerson(req.body)
        res.status(201).json({message: 'Pessoa inserida com sucesso!'})
    } catch (error) {
        res.status(500).json({erro: error})
    }
})

router.get('/getbyid', async (req, res) => {
    try {
       let register = await person.getByCPF(req.body.cpf)
       res.status(200).json(register)
       console.log(register)
    } catch (err){
        res.status(500).json({message: 'Erro desconhecido'})
    }
})


export default router;