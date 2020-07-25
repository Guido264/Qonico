const fetch = require('node-fetch');




for (var index = 0; index < 100; index++) {
    
    const data = {
        name: 'Temperature',    
        value: Math.random()
    }
    
    fetch('http://localhost:3000/api/messages', {
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

