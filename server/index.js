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

app.post('/getSpellComponents', (req, res) => {
    const spellClass = req.body.spellClass;
    const spellType = req.body.spellType;
    
    db.query("SELECT * FROM `pathfinder-schema`.spells WHERE spell_class LIKE ? AND spell_type LIKE ?",
     [spellClass, spellType],
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

app.post('/getSpellNames', (req, res) => {
    const spellName = req.body.spellName;
    
    db.query("SELECT * FROM `pathfinder-schema`.spells WHERE LOWER(spell_name) LIKE ?",
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
            console.log("oh no!!");
            
        
    }
    });
});