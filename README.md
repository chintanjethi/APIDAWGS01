# Project Setup Instructions

## Step 1: Install Dependencies

Navigate to the `api-manager` and `backend` directories and install the required dependencies.

```bash
# Navigate to api-manager directory and install dependencies
cd path/to/api-manager
npm install

# Navigate to backend directory and install dependencies
cd path/to/backend
npm install
```
## Step 2: Update the Environment Variables

Before starting the backend, update the .env file with your specific configurations.

    ZAP API Key: This should be your OWASP ZAP API key.
    MongoDB URL: The URL of your MongoDB instance.
    Port: The port on which the backend server will run.

Sample .env file:
```bash
ZAP_API_KEY=your-zap-api-key
MONGODB_URL=mongodb://localhost:27017/yourDatabaseName
PORT=8000
```
    Replace your-zap-api-key with your actual ZAP API key.
    Replace mongodb://localhost:27017/yourDatabaseName with your actual MongoDB connection string.
    Adjust the PORT if you want to run the server on a different port.

## Step 3: Start the Application

Once the dependencies are installed and the environment variables are set, start the application.
```bash
# Star the frontend
cd path/to/api-manager
npm start

# Start the backend
cd path/to/backend
npm start
```
The backend server should now be running on the specified port.
## Notes

    Make sure MongoDB is running and accessible via the URL provided in the .env file.
    If you encounter any issues, check the logs for more details.
```vbnet

This README file provides clear instructions on how to install dependencies, update environment variables, and start the backend server. Make sure to replace `path/to/` with the actual paths where your `api-manager` and `backend` directories are located.
```
