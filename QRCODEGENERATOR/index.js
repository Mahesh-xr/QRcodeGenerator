/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'
inquirer.prompt([{
    type:'input',
    name:'userURL',
    message:'Enter Your URL: '
}]).then((answers) =>{
    var userInputURL = answers.userURL;
    var qrImage = qr.image(userInputURL,{type:'png'})
    qrImage.pipe(fs.createWriteStream(`mahe.png`));
    fs.writeFile('url.txt',userInputURL,(err) => {
        if (err) console.error(err);
        else console.log('File written successfully!');
      });



    

})
