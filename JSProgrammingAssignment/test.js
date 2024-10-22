async function add(a, b){
    return a+ b;
}

async function calc() {
    const result = await add(10, 5)
    return result * 2;
}

calc().then(value => console.log(value))