setTimeout(() => {
    document.body.style.background = 'blue';

    setTimeout(() => {
        document.body.style.background = 'yellow';

        setTimeout(() => {
            document.body.style.background = 'green';
        }, 1000);

    }, 1000);
    
}, 1000);

// example

const delayColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.background = newColor;
        doNext();
    }, delay);
}

delayColorChange('red', 1000, () => {
    delayColorChange('green', 1000)
})   

// old way

const fakeRequestCallBack = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection timeout');
        } else {
            success(`Here is your data from ${url}`);
        }
    }, delay)
}

fakeRequestCallBack('test.com/page1', function(response) {
    console.log('It worked');
    console.log(response);
    fakeRequestCallBack('test.com/page2', function(response) {
        console.log('It worked');
        console.log(response);
        fakeRequestCallBack('test.com/page3', function(response) {
            console.log('It worked');
            console.log(response);
        }, function(error) {
            console.log('Error');
            console.log(error);
        })
    }, function(error) {
        console.log('Error');
        console.log(error);
    })
}, function(error) {
    console.log('Error');
    console.log(error);
})

// ************************************************** //

const fakeRequestPromise = url => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
        if (delay > 4000) {
            reject('Connection timeout');
        } else {
            resolve(`Here is your data from ${url}`);
        }
    }, delay)
    })
} // console.log(fakeRequestPromise('test.com'))

fakeRequestPromise('testurl.com')
    .then(() => {
        console.log('It worked');
        fakeRequestPromise('test.com/page1')
        .then(() => {
            console.log('2nd request worked')
        }).catch(() => {
            console.log('Connection error 2')
        })
    }).catch(() => {
        console.log('Connection error')
    })

// ********************************************* //

const fakeRequestPromise = url => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
        if (delay > 4000) {
            reject('Connection timeout');
        } else {
            resolve(`Here is your data from ${url}`);
        }
    }, delay)
    })
}

// console.log(fakeRequestPromise('test.com'))

fakeRequestPromise('testurl.com')
    .then(() => {
        console.log('1st request worked');
        fakeRequestPromise('test.com/page1')
        .then(() => {
            console.log('2nd request worked')
            return fakeRequestPromise('testurl.com/page2')
        }).then(() => {
            console.log('3rd request worked')
            return fakeRequestPromise('testurl.com/page3')
        }).catch(() => {
            console.log('Connection error 2')
        })
    }).catch(() => {
        console.log('Connection error')
    })

// **************************************** //


const fakeRequest = url => {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        setTimeout(() => {
            if (randomNumber < 0.7) {
                resolve('Fake data here: ');
            } else {
                reject('Request error')
            }
        }, 1000)
    })
}

fakeRequest('test/1')
    .then((data) => {
        console.log('Done with the request');
        console.log(data, 'Test data');
    })
    .catch((error) => {
        console.log('Connection error: ', error);
    })

// 

// const delayColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.background = newColor;
//         doNext();
//     }, delay);
// }

// delayColorChange('red', 1000, () => {
//     delayColorChange('green', 1000)
// })  

const delayColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        document.body.style.background = color;
        resolve()
        }, delay);
    })
}

delayColorChange('red', 1000)
.then(() => {
    delayColorChange('orange', 1000)
})
.then(() => {
    delayColorChange('yellow', 1000)
})
.then(() => {
    delayColorChange('green', 1000)
})
.then(() => {
    delayColorChange('violet', 1000)
})
.then(() => {
    delayColorChange('indigo', 1000)
})
.then(() => {
    delayColorChange('blue', 1000)
})

delayColorChange('blue', 1000, () => {
    delayColorChange('red', 1000, () => {
        delayColorChange('yellow', 1000)
    })
})


// **********************LAST DAY************************ //

const login = async (username, password) => {
    // if password is not passed in
    if (!username || !password) throw 'Missing credentials'
    if (password === 'Password123') return 'Welcome'
    throw 'Invalid password.'
}

login('TestUsername', 'Password123')
    .then(msg => {
        console.log('Logged in');
        console.log('Message: ', msg);
    })
    .catch(err => {
        console.log('Login error: ', err);
    })


// **********************ASYNC WAY************************ //
const delayColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.background = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayColorChange('red', 1000)
    await delayColorChange('orange', 1000)
    await delayColorChange('yellow', 1000)
    await delayColorChange('green', 1000)
    await delayColorChange('violet', 1000)
    await delayColorChange('indigo', 1000)
    await delayColorChange('blue', 1000)
}

// rainbow()

async function printRainbow() {
    await rainbow();
    console.log('End of rainbow')
}

printRainbow()