const express = require('express');
const multer = require("multer")
const path = require('path');
let app = express()
const router = express.Router();
router.use('/uploads', express.static('uploads'));
const cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: 'kpeworld',
  api_key: '455414113895392',
  api_secret: '7kNNkfb8SJz-Pr4Jwl8xSbEYVX0'
});

// Handle image upload
router.post('/upload',async function (req, res){
console.log(req.files)
  if (req?.files) {
    let file = req.files
   cloudinary.uploader.upload(file.avtar.tempFilePath, async (err, result) => {
      console.log(result)
      return res.status(201).send({ status: true, message: "success to upload", data: result })
    })
  }
  else {
    return res.status(400).send({ status: false, message:"failed to upload", data: null })
  }
}
)

module.exports = router;