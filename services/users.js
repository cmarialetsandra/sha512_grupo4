var crypto = require('crypto');

const users = [
    {username: 'dagmara.aburto', password: '85d8ccb00cda76e3cecfdcf643a552b0350e0e865ddd0b4eee97c3ac52d044ea878473e96754523ea201f5220b038987fef9e5e45b8fbd878ef78614bc92d23f'},
    {username: 'hazel.acuna', password: '23d7c2bf359083d4a3703fbdc1b01c16f6506084a9d7c2d688cc4ffc1f980613fee532573f6625cce1255adaeac58a4b4cf15e8e5eea410c79224c5df70f22d4'},
    {username: 'yolanda.bustamante', password: '59dd77f3e0842d34bd36145cd72797bde59e9003cc9598f209829d20c6d9f8c81a3338be1a0373483bfd2dc6a8a2f29ac6eb4f2706b86bed20fe111fc75bc0f0'},
    {username: 'marialetsandra.carrazco', password: 'bc59262e3608682103b6b8166f3f3dc9580e568d2873a3b620ed9b24d9d6c43202ab03f3521dbedac536f7ed92fa24dc0c864ce2863ebad69ab5e81419952e44'},
];

exports.login = function(req, res){

    const username = req.body.username;
    const password = req.body.password;

    var hash = crypto.createHash('sha512');
    var data = hash.update(password, 'utf-8');
    var generate_hash = data.digest('hex');
    console.log("hash : " + generate_hash);

    let isLogin = false;

    users.forEach(user => {
        if(user.username === username && user.password === generate_hash){
            isLogin = true;
        }
    });

    res.json({ response: isLogin });
    
}