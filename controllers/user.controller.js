const router = require("express").Router();

const User = require("../models/user.model");

//CREATE USER
router.post("/", async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.put("/:id", async (req, res) => {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedUser);
        } catch (err) {
          res.status(500).json(err);
        }
     
  
  });

  router.get("/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//   //GET ALL USER
  router.get("/", async (req, res) => {
   
    try {
      const user = await User.find();
        
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete("/:id", async (req, res) => {
      const user = await User.findById(req.params.id);
        try {
          await user.delete();
          res.status(200).json("User has been deleted...");
        } catch (err) {
          res.status(500).json(err);
        }
   
  });

module.exports = router;