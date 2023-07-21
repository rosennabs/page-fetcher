const request = require('request');
const fs = require('fs');

const fetcherApp = process.argv.slice(2); //takes two cmd line args, a url and a local file path

request(fetcherApp[0], (error, response, body) => { //downloads the html body from the url to the local file path specified above
  if (error) {
    console.log('website error:', error); //prints the error from the url/webpage if any
  } else {
    fs.writeFile(fetcherApp[1], body, (err) => { 
      if (err) {
        console.log('file system error:', err); //prints the error from the downloaded file if any
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${fetcherApp[1]}`);
      }
    });
  }
  
});



