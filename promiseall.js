//ttps://hdevsaurus.com/javascript-asynchronous

// const downloadStart = new Promise((resolve, reject) => {
//     resolve('0%');
//   });
//   const downloadHalf = new Promise((resolve, reject) => {
//     resolve('50%');
//   });
//   const downloadFull = new Promise((resolve, reject) => {
//     resolve('100%');
//   });
  
//   Promise.all([downloadStart, downloadHalf, downloadFull]).then((result) => {
//     console.log(result); // [ '0%', '50%', '100%' ]
//   });

// menghindari callback hell ( penulisan berulang)

const download = (url) => {
    return new Promise((resolve, reject) => {
      resolve(`Downloading from ${url}....`);
    });
  };
  
  const url1 = 'https://brachio.site/download';
  const url2 = 'https://trex.site/download';
  const url3 = 'https://stego.site/download';
  
  Promise.all([download(url1), download(url2), download(url3)]).then((result) => {
    //console.log(result);
    for (let downloadInfo of result) {
      console.log(downloadInfo);
    }
    console.log('Download Complete');
  });