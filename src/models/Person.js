import mongoose from "mongoose";

const Person = mongoose.model('Person', {
    name: String,
    age: Number,
    gender: String,
    cpf: String,
    motherName: String
})

export default Person;