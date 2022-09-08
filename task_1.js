const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
            let cek = dataDay.find((item) => {
                return item === day.toLowerCase();
            })
            if(cek){
                resolve(cek.charAt(0).toUpperCase() + cek.slice(1));
            }else{
                reject(new Error(day + " bukan hari kerja"));
            }
        }, 3000)
    })
}

cekHariKerja("rAbU")
.then((result) => {
    console.log("Hari ini adalah hari " + result);
})
.catch((err) => {
    console.error(err.message);
})
//Then catch berfungsi dalam penanganan objek Promise yang melakukan error handling
//Dalam promise, terdapat dua kondisi, yaitu ketika proses menghasilkan
//TRUE yang akan masuk ke resolve, dan ada kondisi FALSE yang akan masuk ke reject
//Then ini nanti yang akan menghandle jika promise hasilnya adalah true atau resolve
//catch ini yang akan menghandle jika promise hasilnya adalah false atau reject

const cekTry = async () => {
    try{
        const data = await cekHariKerja("rAbU");
        console.log(data);
    }catch(e){
        console.error(e.message);
    }
}

cekTry();
//Try catch juga berfungsi dalam menangani error handling
//Perbedaannya try catch digunakan dalam async await
//Jadi, proses yang berjalan di dalam blok try menghasilkan sebuah exception,
//catch akan menangkap exception tersebut dan akan melakukan tindakan tertentu