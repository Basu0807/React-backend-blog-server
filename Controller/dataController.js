const Data = require("../blogData/allData");

const dataController=(req,res)=>{
    res.send(Data)
}

module.exports=dataController;