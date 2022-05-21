/*
*Title: Uptime Monitoring Application
*Description: A Restful API to monitor up or down time of user define Links
*Author: Bipu
*Date: 05/21/2022
*
*/

//Dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');

// app object - module scaffolding

const app = {};

//configuration
app.config = {
    port: 3000
};

//create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listning to post ${app.config.port}`);
    });
};

// Handle Request Response
app.handleReqRes = handleReqRes;
//start the server
app.createServer();