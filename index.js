const express =require('express');
const cors =require('cors');
const data = require('./blogData/dataStore');

const app =express();
const port =5000;
app.use(cors());

app.use('/blog',data)

app.get('/',(req,res)=>{
    res.send('home page')
})


app.listen(port,()=>{
    try {
        console.log(`Server is live at port no. ${port}`)
        
    } catch (error) {
        console.log(error);
    }
}
)