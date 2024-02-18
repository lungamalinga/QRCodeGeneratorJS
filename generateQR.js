import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// prompt the user for a lilnk
inquirer
  .prompt([{
    message: "Please enter your link to generate a QR code:",
    name: "URL",
  }])

  // generate image 
  .then((answers) => {
    
    const url = answers.URL
    
    var qr_png = qr.image(url, { type: 'png' });
    
    qr_png.pipe(fs.createWriteStream("./qr_code.png"));
    console.log('QR Code Image generated and saved!!');

  })

  .catch((error) => {
    if (error.isTtyError) {
      console.log('Error:', error);
    } else {
      console.log('Error: 2', error);
    }
  });