var express   =    require("express");
var mysql     =    require('mysql');
var app       =    express();

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'ecomdb',
    debug    :  false
});

function handle_database(req,res,listName) {
    
    pool.getConnection(function(err,connection){
        if (err) {
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }

        console.log('connected as id ' + connection.threadId);
        switch(listName) {
            case "cart": 
                    connection.query("SELECT c.*, st.name ship_to, s.description status"
                                        +"  FROM cart c"
                                        +"  JOIN ship_to st ON st.ship_to_id = c.ship_to_id"
                                        +"  JOIN status s ON s.status_id = c.status_id",function(err,rows){
                    connection.release();
                    if(!err) {
                            res.json(rows);
                        }           
                    });
                break;
            case "user":
                    connection.query("SELECT * FROM user",function(err,rows){
                    connection.release();
                    if(!err) {
                            res.json(rows);
                        }           
                    });
                break;
        }

        connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
}

app.get("/userList",function(req,res){-
        res.header("Access-Control-Allow-Origin", "*");
        handle_database(req,res,"user");
});
app.get("/cartList",function(req,res){-
        res.header("Access-Control-Allow-Origin", "*");
        handle_database(req,res,"cart");
});

app.listen(3000);