##Yekra Ajax Test
Write javascript code using jquery that serializes the form, and send it in an ajax POST request to the '/purchases' url.
- While the request is in progress, replace the .purchase_btn content with "processing..." .
- If server response is 500, reenable the button and set the .message div's contents to read "there's been an error".
- If server response is success, replace the contents of the .purchase_section div with a "Thanks for your purchase" message.

##Installation
This sample app was implemented using Express.js. We are going to install Node.js using the following [installation guide]:http://coolestguidesontheplanet.com/installing-node-js-on-osx-10-10-yosemite/

After that step, we will be able to use npm in order to install packages.
````
npm install
````

##Running the server
We start the server by opening a terminal on the project home path and typing:
````
node server.js
````