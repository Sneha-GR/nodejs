 var fs = require('fs');

 fs.appendFile('user.txt', 'Welcome John', function (err) { 
  if (err) throw err;
  console.log('File Saved!');

  fs.readFile('user.txt', 'utf8', function (err, data) {
    if (err) throw err;
        const msg = data.split(" ");
        const name = msg[1];
        console.log(name);
        if(name == 'John')
            console.log('Valid User');
        else
            console.log('Unknown user');
        
    })

  });


