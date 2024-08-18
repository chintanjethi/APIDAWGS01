const ZapClient = require('zaproxy');
const FileSystem = require("fs");
const zapOptions = {
  apiKey: '6d5vp9lkvg318piegu67h8kv2g',
  proxy: {
    host: '127.0.0.1',
    port: 8080,
  },
};

const zaproxy = new ZapClient(zapOptions);

let params = {
  url: 'https://unstop.com/hackathons/flipkart-grid-60-information-security-challenge-flipkart-grid-60-flipkart-1024250?search=&page=1'
};
// https://flipkart-rose-six.vercel.app/api/hello
async function scanSpider() {
    let response = await zaproxy.spider.scan(params);
    console.log(response);
}
// const scanID = 3;
// async function scanSpider() {
//   let response = await zaproxy.spider.scan(params);
//   console.log(response);
  
//   scanD = response.scan;
//   console.log(`Spider scan started with ID: ${scanD}`);
  
//   let status = await zaproxy.spider.status(scanID);
//   console.log(scanID);
  
//   while (status < 100) {
//       console.log(`Spider progress %: ${status}`);
//       await new Promise(resolve => setTimeout(resolve, 1000));  // Wait for 1 second
//       response = await zaproxy.spider.status(scanID);
//       // status = parseInt(response[0].scan);
//       console.log(status);
      
//   }
//   console.log(zaproxy.spider.results(scanID));
// }
scanSpider();
async function pollSpiderStatus() {
  // console.log(status);
}

// console.log('Spider scan completed.');
async function results(params) {
  
}
// results();

async function viewResults() {
    let response = await zaproxy.spider.results(params);
    // console.log(response);   
    FileSystem.writeFile('tp.json', JSON.stringify(response), (error) => {
      if (error) throw error;
    });
}                            
viewResults();



async function passiveScan() {
  let response = await zaproxy.core.alerts(params);
  console.log(response);
  
 FileSystem.writeFile('file.json', JSON.stringify(response), (error) => {
  if (error) throw error;
});
  // console.log(response.alerts[0].description);
  
}
// passiveScan();

// const axios = require("axios");

// // Make request
// axios
// 	.get("http://zap/JSON/ascan/view/scanProgress/")
// 	// Show response data
// 	.then((res) => console.log(res.data))
// 	.catch((err) => console.log(err));

// console.log(`Traditional Spidering target ${target}`);

// zaproxy.spider.scan(params);

// async function checkSpiderStatus() {
//   setTimeout(() => {
//     zaproxy.spider.status().then(status => {
//       if (parseInt(status) < 100) {
//         console.log(`Spider progress %: ${status}`);
//         checkSpiderStatus();  // Check again after another delay
//       } else {
//         console.log('Spider completed');
//       }
//     }).catch(error => {
//       console.error('Error:', error);
//     });
//   }, 5000);  // Wait for 5 seconds before checking status again
// }

// // Start checking the spider status
// checkSpiderStatus();

// console.log(`Scanning target ${target}`);

// zaproxy.ascan.scan(params);

// async function checkScanStatus() {
//   setTimeout(() => {
//     zaproxy.ascan.status().then(status => {
//       if (parseInt(status) < 100) {
//         console.log(`Ascan progress %: ${status}`);
//         checkScanStatus();  // Check again after another delay
//       } else {
//         console.log('Ascan completed');
//       }
//     }).catch(error => {
//       console.error('Error:', error);
//     });
//   }, 5000);  // Wait for 5 seconds before checking status again
// }

// // Start checking the scan status
// checkScanStatus();



// viewResults();

// const headers = {
//     'Accept': 'application/json'
//   };
  
//   fetch('http://zap/JSON/ascan/action/scan/', {
//     method: 'GET',
//     headers: headers
//   })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
  