
let  janji = "bernyanyi";
let p = new Promise((res,rej)=>{
    setTimeout(()=>{
        if(janji==="bernyanyi"){
            res("penonton senang");
        }else{
            rej("anda tidak bernyanyi");
        }
    },500);
});

p.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});