const express = require("express")
const app = express()
const axios = require("axios")
const cors = require("cors")
app.use(cors())
const endpoint = `https://rickandmortyapi.com/api/character/`


app.get("/characters/",async ( req,res)=>{
    
try{
    const response = await axios.get(endpoint)
    const personajes = response.data
    res.json(personajes)

}
catch{

    res.status(404).json({error: "Error al obtener los personajes "})
}

})

app.get("/characters/:names", async (req,res)=>{
    const names = req.params.names
    const url = `${endpoint}?name=${names}`
    try{
        const response = await axios.get(url)
        const character  = response.data.results[0] // Crea una variable para seleccionar el primer personaje
        const {name,status,species,gender,origin,image} = character
        res.json({name: name, status: status, species: species, gender: gender, origin: origin, image: image})
      }
    // }
    catch{
        res.status(404).json({mensaje:"Error al obtener el nombre"})

    }

})

app.listen(3000,()=>{
    console.log("Este servidor se está lanzando en el http://localhost:3000")
})

