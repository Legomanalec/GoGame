const bcrypt = require('bcrypt');

class Router{
  constructor(app, db){
    this.register(app, db);
  }
  register(app, db){
    app.post('/signup/registered', (req, res) => {
      let username = req.body.username;
      let password = req.body.password;

      if(password.length < 8){
        res.json({
          success: false,
          msg: 'Password lenght is less then 8, try again'
        })
        return;
      }
      var values= [
        [username, password, 0, 0]
      ];
      // add code here
      var sqlInsert='Insert into user(username, password, win, lose) values ?'
      db.query(sqlInsert,[values], function (err, result) {
        if (err) {
          res.json({
            success: false,
            msg: 'User already exists, try again'
          })
        } else{
          res.json({
            success: true,
            msg: 'User has been registered'
          })
        }
      });
      db.end(function(err) {
       if (err) {
         return console.log(err.message);
       } else{
         console.log("Close connection!");
       }
     });
    });
  }
}

module.exports = Router;
