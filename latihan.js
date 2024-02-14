// console.log("test1");
// setTimeout(() => {
//     console.log("ini time out");
// }, 3000);
// console.log("test2");

const notify = () => {
    console.log("download complete...");
};

const download = (url,cb) =>{
    console.log(`urlnya dalah  ${url}`);
    cb();
};

const url = "https://www.detik.com";

download(url,notify);