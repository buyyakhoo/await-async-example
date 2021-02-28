function sayHello(){
    return "Hello";
}   
function delaySayHello() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Delay Hello");
        }, 1000);
    });
}

async function longSayHello() {
    await setTimeout(()=>{}, 1000);
    return "long time hello";
}


async function main(){
    let a = sayHello();
    let b = await delaySayHello();
    let c = await longSayHello();
    console.log(c);
    console.log(a);
    console.log(b);
}
main();


async function parallelRun(){
    let a = await Promise.all([sayHello(), delaySayHello(), longSayHello()]);
    console.log(a);
}
parallelRun();