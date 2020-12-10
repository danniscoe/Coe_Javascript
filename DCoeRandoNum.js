function getRandomNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.random(Math.floor));
        }, 500);
    });
}
async function runRight() {
    console.log('start here');
    const result = await getRandomNumber();
    console.log(result);
}
runRight();