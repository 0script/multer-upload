#movie-app

##Table of content

* [About the project](#about-the-project)
* [Technologies](#technologies)
* [Features](#features)
* [Setup](#setup)

##About the project

Small application that allow the uploading of a single image file with a username.

##Technologies

* HTML
* CSS
* JAVASCRIPT
* nodejs
    * multer
    * express

##Features
	* Handle a multipart form 
    * The file are saved as in './uploads/username-date-yyyy-mm-dd.extension'

##Setup

* Download the project and run the server :

```shell
#download the repo
$git clone git@github.com:0script/multer-upload.git
$cd multer-upload/
#install nodejs and npm
$sudo apt install nodejs npm
#install the needed pkg
$npm install
#run the server
$npm test
```