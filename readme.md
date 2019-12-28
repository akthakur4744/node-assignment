Pre-requisites:
    setup mongoDB locally
    install node.js latest version
    create data folder in root
    start the mongoDB server using cmd : 
        mongod.exe --dbpath <path of data folder created earlier>
        eg: mongod.exe --dbpath "C:\Users\m1041793\Documents\Mongodb\data"
    hit npm install in the root path

How to start
    run npm start
    make a post request to localhost:3000/user with below req body:
    {
        "firstName":<First Name>,
        "lastName":<Last Name>,
        "password":<Password>,
        "email":<Email>(unique)
    }

    eg:-

    {
        "firstName":"Akshay",
        "lastName":"Thakur",
        "password":"12345678",
        "email":"akthakur4749@gmail.com"
    }
