
const postgresConnection = require('./database')
const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json());

app.get("/query",  (req,res)=>{
  const postgressqlQuery =  req.body.postgressqlQuery;
  console.log(postgressqlQuery)
  postgresConnection.query(postgressqlQuery,(err,rows)=>{
      if(err) {
        console.log('err from app.js '+err)
      } else {
        console.log(rows.rows)
        res.send(JSON.stringify(rows.rows[0]))  
      }
   })
})

app.post('/query', (req, res) => {
  const postgressqlQuery = req.body.postgressqlQuery;
  postgresConnection.query(postgressqlQuery,(err,rows)=>{
    if(err) {
      console.log('err from app.js '+err)
    } else {
      console.log(JSON.stringify(rows))
      res.send(JSON.stringify(rows)) 
      // res.send("POST Request Recevied: affectedRows = "+ JSON.stringify(rows.affectedRows))  
    }
 })
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(5000,()=>{
    console.log('server is running on port 5000');
  })



