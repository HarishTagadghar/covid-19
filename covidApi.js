const request = require('request');
const express = require('express')

const app = express();

const covid = (location,callback)=>{
    let url = `https://covid19.mathdro.id/api/countries/${location}/`
    request({url , json: true} , (error,respond) =>{
        if(error){
            callback(`server error to featch the location` , undefined)
        }else if (respond.body.error){
            callback(`incorrect loacation make shore you spell country name currectly`, undefined)
        }else{
            callback(undefined,{confirmed :respond.body.confirmed.value, recovered :respond.body.recovered.value, deaths :respond.body.deaths.value})
        }
    })
}

app.get('/address' , (req,res) => {
  if  (!req.query.address){
        return res.send({
            error:'you must provide a address'
        })
    }
    covid(req.query.address, (error,data) =>{
        if(error){
            return console.log(error);
        }
       res.send(data)
            
        })
})




app.listen(3000,()=>{
    console.log('running on port 3000');
    
})