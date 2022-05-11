# Employee-Details-POC

First need to install node js and mongodb  your machine 
Next download the project then start the npm install  and npm start

npm install 


The port run on http://localhost:2001/

//***Create user api *** //
http://localhost:2001/api/v1.0/createuser
Request :
{"email":"abc@gmail.com",
"subject":"some",
"contact":"8754844684" ////schedule in minutes
}

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
    "schedule":"12" ////schedule in minutes
}

///***upload File **///

http://localhost:2001/api/v1.0/uploadProfilePicture

req form data
mypic       type file upload



