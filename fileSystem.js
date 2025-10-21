 var fs = require('fs');

 fs.appendFile('details.txt', 'Name : Riya \n Age : 22 \n City : Mumbai \n', function (err) { 
  if (err) throw err;
  console.log('File Saved!');

  fs.readFile('details.txt', 'utf8', function (err, data) {
    if (err) throw err;
        const msg = data.split(":");
        const name = msg[1].split("\n");
        const user = name[0];
        console.log(user);
        if(user == ' Riya ')
            console.log('Profile Verified');
        else
            console.log('Invalid Profile');
        
    })

    fs.appendFile('details.txt', ' Status: Active ', function (err) {
    if (err) throw err;
    console.log('File Updated!');
    })

    fs.rename('details.txt', 'verified_profile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
    });


  });


