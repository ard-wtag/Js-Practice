fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
.then(response => {
    console.log(response)
    return response;
}).then((previous_response)=> {
    //response.json 
    console.log(previous_response);
    let json_data=previous_response.json() // parsing the data in json format
    return json_data 
}).then(data=>{
    console.log(data); 
    console.log("data.types:  ",data.types)
    let tp=data.types; 
    console.log("tp: ",tp[0].type.name)
})
.catch(error => console.log(error)) ; 