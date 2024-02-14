let nama = "ITI";

new Promise((res,rej)=>{
        setTimeout(()=>{
                if(nama === "IT"){
                    res("Teknik Informatika");
                }else{
                    rej("Bukan IT");
                }
        },1000);
}).then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});