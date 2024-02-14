async function myAsync(){
    let p = new Promise((res,rej)=>{
        setTimeout(()=>{
            res("hallo async");
        },1000);
    });

    let result = await p;
    console.log(result);

}

myAsync();
