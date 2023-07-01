const express = require("express");
const router = express.Router();

const datas = require("../module/model")

//Get Method
router.get("/", (req,res) =>{
    try {
        res.send("Connected")
    } catch (error) {
        res.send("Error Occured")
    }
})

//Get Create Method 
router.get("/add", (req,res) =>{
    res.render("add")
})

//Create Method
router.post("/add", async(req,res) =>{
    //console.log(req.body,"user");
    const user = new datas({
        
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        city: req.body.city
    })
    
    try {
        
        const data = await  user.save()
        res.json(data);
       
    } catch (err) {
        res.send({message:"Not Created"})
        console.log(err)
    }
})

//Show
router.get("/show", async(req,res) =>{
    try {
        const value = await datas.find()
        // res.json({message:"Table",value})
        res.render("index",{users: value})
    } catch (error) {
        res.send({message:"Error"})
    }
})

//Get Update Method
router.get("/update/:id", async(req,res) =>{
    let id = req.params.id;
        const value = await datas.findById({_id:id})
        res.render("update",{user: value})
})

//Update Method
router.post("/update/:id", async(req,res) =>{
    let id = req.params.id;
    const edit = ({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        city: req.body.city
    })
    try {
        const value = await datas.findByIdAndUpdate(id, {$set: edit})
        res.json({message:"Updated",value})
    } catch (error) {
        res.send({message:"Not Updated"})
    }
})

//Delete Method
router.post("/delete/:id", async(req,res) =>{
    let id = req.params.id;
    try {
        const value = await datas.findByIdAndDelete(id)
        res.json({message:"Deleted",value})
    } catch (error) {
        res.send({message:"Not Deleted"})
    }
})

module.exports = router;