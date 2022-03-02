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
  
async function makeRequests(url) {
    await fakeRequestPromise(2000, 'page1');
    console.log('here is your data: ', url)
}

makeRequests();