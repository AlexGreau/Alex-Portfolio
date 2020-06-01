

new Promise((resolve) => {
    setTimeout(() => {
        console.log('1');
        resolve();
    }, 2000)
}).then(() => {
    console.log('2')
    console.log('3')
})