const fakeRequestPromise = (url) => {
    return new Promise((fulfill, reject) => {
      const delay = Math.floor(Math.random() * 4500) + 500;
      setTimeout(() => {
        if (delay > 4000) {
          reject(`Connection timeout`);
        } else {
          fulfill(`Here is your fake data from: ${url}`);
        }
      }, delay)
    })
}
  
async function makeRequests() {
    try {
        let firstRequest = await fakeRequestPromise('test/page1.com');
        console.log(firstRequest);
    
        let secondRequest = await fakeRequestPromise('test/page2.com');
        console.log(secondRequest);
    
        let thirdRequest = await fakeRequestPromise('test/page3.com');
        console.log(thirdRequest);
    
        let fourthRequest = await fakeRequestPromise('test/page4.com');
        console.log(fourthRequest);

    } catch(err) {
        console.log('Connection error: ', err);
        
    } finally {
        console.log('End of request')
    }
}

makeRequests();