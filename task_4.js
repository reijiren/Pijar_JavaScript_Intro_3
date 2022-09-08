import fetch from "node-fetch";

async function fetchData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data.map(x => x.name));
    }catch(err){
        console.log("Fetching API Error");
        console.log(err);
    }
    
}

fetchData();