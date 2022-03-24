### Talker Manager Project

This project was my **first experience** with NodeJs.

This experience began with a simple **npm init** to build the **package.json** file. In the development, I had to use **asynchronous callbacks**, **Promises**, the **fs module** to read and write in the API document and the frameworks **Express** and **Insomnia.Rest**. 


> Where can you can find my codes?
- The **middlewares** directory contains all the functions that receive **(request, response** and **next**) as parameters and return a **response with status and specific data**;
- Inside the same directory you will find another directory called **validations** which contains some functions whose logic could be used in more than one part of the code to validate information received ias **headers and body requisitions**;
- The **index.js** file in the root contains all the requests (**GET, POST, PUT, DELETE**), the **Express module import** and the **Express.listen()** to set the 3000 localhost port as the server. 


<img src="https://miro.medium.com/max/1051/1*vHw6ENUfu71KHiyTm0BtUA.png" alt="nodejs-express" size="500" />
