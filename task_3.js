// //Program 1
// //menentukan apakah kamu kena tilang di tanggal ganjil/genap
function hariGanjilGenap(){
    return new Promise((resolve, reject) => {
        const date = new Date();
        if(date.getDate()%2 === 0){
            resolve("Tanggal ganjil, kamu tidak kena tilang!");
        }else{
            reject(new Error("Tanggal genap, kamu kena tilang!"));

            setTimeout(() => {
                console.log("Kamu telah dihukum selama 3 detik");
            }, 3000);
            
        }
    });
}

hariGanjilGenap()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error(err.message);
})


//Program 2
//Cek nama dalam array

async function cekNama(nama){
    return new Promise((resolve, reject) => {
        if(nama !== "Iqbal"){
            resolve("Halo " + nama + ", kamu boleh masuk!");
        }else{
            reject(new Error(nama + " tidak valid!"));
        }
    })
}

const arrNama = ["Iqbal", "Brandon" , "Reza", "Vicko"];
for(let x of arrNama){
    cekNama(x)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err.message);
    })
}