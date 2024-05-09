// const btn = document.getElementById("btn")

function getRickInfo(){
    const getName = document.getElementById("search") 
    const container = document.getElementById("container")

    const nombreRick = getName.value.toLowerCase()

    fetch(`http://localhost:3000/characters/${nombreRick}`)
    .then(response=> response.json())
    .then(data=>{
        // const character  = data.results[0] // Crea una variable para seleccionar el primer personaje
        const {name,status,species,gender,origin:{name:nombre ,url},image} = data
        // const pais = Name.toLowerCase()
        container.innerHTML = `
        <p><b>Nombre:</b> ${name}</<p>
        <p><b>Status:</b> ${status}</<p>
        <p><b>Especie:</b> ${species}</<p>
        <p><b>Género:</b> ${gender}</<p>
        <p><b>Pais de origen:</b>${nombre}
        
        <a href="${url} "> Procedencia </a>/</p>

        <p><img src="${image}" alt ="${name}"></<p>
        `
        
    })
    .catch(error => alert("No existe el nombre introduce uno correcto") )

    }



//     btn.addEventListener("click",()=>{
// getRickInfo() 
//    })

