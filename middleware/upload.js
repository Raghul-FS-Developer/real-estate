const aws =  require('aws-sdk');
const multer =  require('multer');
const multerS3 = require('multer-s3');
const uuid = require('uuid').v4;
const path = require('path');
require('dotenv').config()


const s3 = new aws.S3({accessKeyId:`${process.env.AccessKeyId}`,
secretAccessKey:`${process.env.SecretAccessKey}`});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket:'files007',
        acl: 'public-read',
        metadata:(req,file,cb)=>{
            cb(null, {fieldName: file.fieldname})
        },
        key:(req,file,cb)=>{
            const ext = path.extname(file.originalname);
            cb(null, `${uuid()}${ext}`)
        }
    })
});

module.exports = upload

