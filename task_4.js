import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => {
    return res.json();
}).then((data) => {
    const nama = data.map(x => x.name);
    console.log(nama);
}).catch((err) => {
    console.log(err);
})