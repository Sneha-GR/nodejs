var info = require('./userInfo.js');

function formatNames(user) 
{

    var part = info.name.split(' ');
    part[0] = part[0].charAt(0).toUpperCase() + part[0].slice(1);
    part[1] = part[1].charAt(0).toUpperCase() + part[1].slice(1);
    info.name = part.join(' ');

    return info.name + " enjoys " + info.hobby.toUpperCase() + "\n" + info.hobby + " string has " + info.hobby.length + " characters.";
}


console.log(formatNames(info));