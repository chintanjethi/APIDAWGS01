const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Define the pattern to match your source files
const filePattern = path.join(__dirname, '**/*.js'); // Adjust this pattern if your API files have different extensions

// Function to extract API endpoints from a file content
function extractApis(content) {
    const apiPattern = /(['"`])(http[s]?:\/\/[^\s'"]+)\1/g;
    const apis = [];
    let match;
    while ((match = apiPattern.exec(content)) !== null) {
        apis.push(match[2]);
    }
    return apis;
}

// Function to process each file and list APIs
function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const apis = extractApis(content);
        if (apis.length > 0) {
            console.log(`File: ${filePath}`);
            apis.forEach(api => console.log(`  ${api}`));
        }
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
    }
}

// Find and process all JavaScript files
glob(filePattern, (err, files) => {
    if (err) {
        console.error('Error finding files:', err);
        return;
    }
    files.forEach(processFile);
});
