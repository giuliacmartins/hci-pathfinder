const express = require('express');
const app = express();
// const session = require('express-session');
const cors = require('cors'); /* Allows requests to go through */
const mysql = require('mysql2'); /* Had to use mysql2 in order to support the newer versions of mysql according to https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server */

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "PUT", "GET", "DELETE"],      // Had to manually input methods for it to work
    credentials: true
}));
app.use(express.json());


app.listen(3001, ()=>{
    console.log("Yay!!!");
});

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Anyaiscool1!',
    database: 'pathfinderapp',
});

app.get('/getAllSpells', (req, res) => {
    db.query("SELECT * FROM pathfinderapp.test_csv;", (err, result) => {
        if (err){
            console.log("Something wrong with the test.csv!");
        }
        else{
            res.send(result);
        }
    });
});