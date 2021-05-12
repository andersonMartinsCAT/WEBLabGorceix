var axios = require("axios");
const mysql = require('mysql');
const iot = "http://127.0.0.1:39320/iotgateway"

var newData;

const con = mysql.createConnection({
    host: 'localhost', // O host do banco. Ex: localhost
    user: 'root', // Um usuário do banco. Ex: user 
    password: '', // A senha do usuário. Ex: user123
    database: 'weblab' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

con.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})


var browse = () => axios.get(iot + "/browse")

browse().then(function(resp){
    console.log(resp.data.browseResults)

    var read = () => axios.get(`${iot}/read?ids=${resp.data.browseResults[4].id}&ids=${resp.data.browseResults[0].id}`)
    function iot2sql(){
        read().then(function(resp){
            //console.log(resp.data.readResults)
            newData = {temp_amb: resp.data.readResults[0].v}
            con.query(
                'INSERT INTO tempe SET ?', newData, (err, res) => {
                if (err) throw err
            
                console.log(`Novo dado adicionado: ${res.insertId}`)
            })
        })
    }
    setInterval(iot2sql, 1000);
})