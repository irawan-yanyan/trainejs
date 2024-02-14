const download = (url) => {
    return new Promise((resolve, reject) => {
      resolve(`Downloading from ${url}....`);
    });
  };
  
  const url1 = 'https://brachio.site/download';
  const url2 = 'https://trex.site/download';
  const url3 = 'https://stego.site/download';
  
  async function runDownload() {
    let result1 = await download(url1);
    console.log(result1);
  
    let result2 = await download(url2);
    console.log(result2);
  
    let result3 = await download(url3);
    console.log(result3);
  
    console.log('Download Complete');
  }
  
  // run async function
  runDownload();