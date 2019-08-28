# mern-todo-app
An attempt to learn the MERN stack

## Usage
To run this on your machine, you will need 4 terminals

*(Assuming you have all of these installed on your machines...)*
1. For react (front-end)
2. For nodemon (back-end)
3. For mongod
4. For mongo

On your react terminal, make sure you are in the **mern-todo-app** directory and run
`npm start`

On your nodemon terminal, go to the **backend** directory and run
`nodemon server`

On your mongod terminal, go to the **backend** directory and run
`mongod --dbpath=datadb`

On your mongo terminal, go to the **backend** directory and run `mongo` first and then the MongoDB Shell will appear.
Run:
`use todos`

You're all set!
Just to the port that npm has assigned your frontend to and start using the app! =)