var path = require('path');
var ncp = require('ncp').ncp;
var fs = require('fs')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

var srcPath = path.dirname('D:/csv-project/source/fhp_clamis_Institutiona/190581906400500004'); //current folder

var metadata = {
  "sjin": "CHO0120001001005",
  "payorCode": "CHO",
  "docCode": "01",
  "fileCreationDate": "date",
  "scanlogixStatus": "Success ",
  "dmsType": "S3",
  "imageUrl": "https://cho.hps-ocr.com/01/20200410/CHO0120099003001.tif",
  };       
  
  

  console.log(metadata)
  
  fs.writeFileSync(path.resolve(__dirname, 'D:/csv-project/Target/Metadata/190581906400500004.json'), JSON.stringify(metadata));
  // var metadata = fs.writeFileSync(`D:/csv-project/Target/Metadata/${srcPath}.json`).toString();
  //  var Metadata = JSON.parse(metadata);  

var destPath = 'D:/csv-project/Target/01/20031'; //Any destination folder

console.log('Copying files...');
ncp(srcPath, destPath, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Copying files complete.');
});
