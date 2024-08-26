import inquirer from 'inquirer';
import qr from 'qr-image';
import * as fs from 'node:fs';

 
inquirer
.prompt([
    // stores the data in json file
    // example 
    // {"URL" : the-name-you-gave}
    {
        message: "Enter the URL:",
        name: "URL"
    }
])
.then((answers) => {

    // // to generate QR Image
    const url = answers.URL

    // by default it creates png file
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));
    

    // Saving the inputs of user into file

    fs.appendFile("URL.txt","\n" + url,'utf8', (err)=> {
        if(err) throw err;
        console.log("Task Successfull!")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      console.log("Something Went Wrong!");
    }
  });