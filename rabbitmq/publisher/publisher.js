const fetch = require('node-fetch');




for (var index = 0; index < 5; index++) {
    
    const data = {
        name: 'Temperature',    
        value: Math.random() * 30
    }
    
    // http://localhost:3000/api/messages

    fetch('http://localhost:5000/api/rabbit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        }
    ).then(res => {
        return res.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

    fetch('http://localhost:5000/api/mongo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        }
    ).then(res => {
        return res.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

    console.log(data); 
  }

