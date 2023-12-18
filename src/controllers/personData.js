import Person from "../models/Person.js";

export default class PersonOperations{
    
    async addPerson(data){
        const {name, age, gender, cpf, motherName} = data;
        const person = {
            name,
            age,
            gender,
            cpf,
            motherName,
        }

        try {
            await Person.create(person)
            //case add successful
            return true
        }catch (error){
            //case add fail
            throw new Error(error)
        }
    }
    async getByCPF(cpf){
        const data = await Person.find({cpf: cpf})
        return data
    }
}