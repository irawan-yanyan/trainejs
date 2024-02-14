// let progress = 100;
// const download = new Promise((res,rej)=>{
//     if(progress === 90){
//         res("Download complete");
//     }else{
//         rej("Download failed");
//     }
// });
// download.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// promise chain

let initProgress = 0;

const download = new Promise((res,rej)=>{
    let progress = initProgress + 25;
    res(progress);
});

download.then((result)=>{
    console.log(`Download complete ${result} %`);
    return result + 25;
}).then((result)=>{
    console.log(`Download complete ${result} %`);
    return result + 50;
}).then((result)=>{
    if(result === 100){
        console.log(`Download complete`);
    }
    console.log(`Download ${result}`);
})

