function resolveA() {
    console.log("starting promiseA");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("sun");
        console.log("promiseA is done");
      }, 2000);
    });
  }
  
  function resolveB() {
    console.log("starting promiseB");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("fun");
        console.log("promiseB is done");
      }, 1000);
    });
  }
  
  async function conStart() {
    console.log("==CON START==");
    const slow = resolveA(); 
    const fast = resolveB(); 
  
  
    console.log(await slow); 
    console.log(await fast); 
  }

  conStart(); 