
module.exports = app => {
    const multer = require('multer')
    const AWS = require('../configs/aws')

    // SET STORAGE
    const storage = multer.memoryStorage({
        destination: function (req, file, callback) {
            callback(null, '')
        }
    })

    var upload = multer({ storage}).single('file')

    app.post('/uploadfile', upload, (req, res) => {
        
        const file = req.files.file.name

        console.log(req.files.file.data)

        const params ={
            Bucket : AWS.Bucket,
            Key:`monfichier.${fileType}`,
            Body: req.files.file.data,
        }

        AWS.s3.upload(params,(err,data)=>{
            if(err){
                res.status(500).send(err)
            }
            res.status(200).send(data)
        })
            
    })
}