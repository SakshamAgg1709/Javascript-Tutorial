console.log("This is tut25")

setTimeout(() => {//This code will work in background and will not block the further code
        for (let i = 0; i < 45; i++) {
        const element = i;
        console.log("THis is index number" + i)
    }
}, 100);
console.log("Done Printing")