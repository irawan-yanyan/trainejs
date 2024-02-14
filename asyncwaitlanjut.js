const getStatus = (url) => {
        console.log(`downloading from ${url}`);
        return new Promise((res,rej)=>{
                setTimeout(() => {
                    res("download compete...")
                }, 3000);
                console.log("beres...");
        });
       
};

async function download(url){
    let status = await getStatus(url);
    console.log(status);

}

const url = 'https://www.detik.com';
download(url);
