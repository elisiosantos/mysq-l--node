const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) =>{
    res.render('home')
})

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodemysql",
    port: 3307
})

conn.connect((error)=>{
    if(error){
        console.log(error)
        return
    }
    console.log("conectou ao mysql")
    app.listen(3000, ()=>{
        console.log("Servidor rodando na porta 300")
    })
})