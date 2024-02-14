new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Beli bakso"), 1000); 
})
.then(function(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Makan bakso"), 1000);
    });
})
.then(function(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Membayar bakso"), 1000);
    });
})
.then(function(result) {
    console.log(result);
});