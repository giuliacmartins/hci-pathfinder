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
    // password: 'Anyaiscool1!', // molina's server
    password: 'GMar75975!', // giulia's server
    database: 'pathfinder-schema',
});

app.get('/getAllSpells', (req, res) => {
    db.query("SELECT * FROM `pathfinder-schema`.spells;", (err, result) => {
        if (err){
            console.log("Something wrong with the spells!");
        }
        else{
            res.send(result);
        }
    });
});

app.get('/getSpellComponents', (req, res) => {
    let spellName = req.body.spellName;
    console.log(spellName);
    db.query("SELECT component_name FROM `pathfinder-schema`.component_junction WHERE component_name LIKE ?",
     `%${spellName}%`,
    (err, result) => {
        if (err){
            console.log("Something wrong with searching in prisoners for medics!");
        }
        if (result.length > 0){
            res.send(result);
        }
        else{
            res.send({message: "No one matches..."});
            
        
    }
    });
});