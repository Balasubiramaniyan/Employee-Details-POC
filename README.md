# Employee-Details-POC

First need to install node js and mongodb  your machine 
Next download the project then start the npm install  and npm start

npm install 
node version above 12.0
connect mongodb cluster

The port run on http://localhost:2001/

//***Create user api *** //
http://localhost:2001/api/v1.0/createuser
Request :
{"email":"abc@gmail.com",
"name":"some",
"gender": "male",
"contact":"9710912342" }

//*** List api ***//
http://localhost:2001/api/v1.0/getuser

//*** Edit user ***//
http://localhost:2001/api/v1.0/edituser

{
  "email":"abcbala@gmail.com",
}

//*** update user details ***//
http://localhost:2001/api/v1.0/updateuser

{
    "email":"kdhasan24.kd@gmail.com",
     "contact":"8754844684"
}

//*** Delete user ***//
http://localhost:2001/api/v1.0/deleteuser

{
  "email":"abcbala@gmail.com",
}

///*** Upload Image ***///

http://localhost:2001/api/v1.0/uploadProfilePicture?email=bala@gmail.com

req form data
mypic       type file upload

///*** Upload Resume ***///

http://localhost:2001/api/v1.0/uploadResume?email=bala@gmail.com

req form data
myFile       type file upload



