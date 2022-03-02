const fakeRequestPromise = (url) => {
    return new Promise((fulfill, reject) => {
      const delay = Math.floor(Math.random() * 4500) + 500;
      setTimeout(() => {
        if (delay > 4000) {
          reject(`Connection timeout`);
        } else {
          fulfill(`Here is your fake data from ${url}`);
        }
      }, delay)
    })
}
  
async function makeRequests() {
    let data = await fakeRequestPromise('test.com');
    console.log(data);

    let data2 = await fakeRequestPromise('test.com');
    console.log(data2);

    let data3 = await fakeRequestPromise('test.com');
    console.log(data3);

    let data4 = await fakeRequestPromise('test.com');
    console.log(data4);
}

makeRequests();