const fetch = require('node-fetch')
const url = "http://api.nobelprize.org/v1/prize.json"
async function getNobel(){
    const response = await fetch(url)
    const data = await response.json()

    let filter = data.prizes.filter(prize => prize.year >= "2000" && prize.year <= "2019" && prize.category === "chemistry")
    filter.forEach(data=>{
        data.laureates.forEach(laureate =>{
            console.log(`Name: ${laureate.firstname} ${laureate.surname}`)
        })
    })

    
}

getNobel()