const UserModel = require('../models/User.js');

const imageUpload = async (req, res) => {
   try {
     const image = new UserModel({ image: req.file.filename });

     const savedImage = await image.save();
     res.status(200).json({ message: "Image uploaded", savedImage });
   } catch (error) {
     res.status(500).json({ message: "Internal server error", error });
   }
};

module.exports = { imageUpload };
