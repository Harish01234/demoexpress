import express from "express"

const app=express()

app.get('/',(req,res)=>{
    res.json({
        "msg":"its a json"
    })
})



app.get('/user',(req,res)=>{
    res.json({
        "username":"batman"
    })
})

app.listen(3000)
