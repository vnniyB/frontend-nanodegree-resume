/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*$("#main").append("Vincent Borgers");

var awesomeThoughts;

awesomeThoughts = "I am Vincent and I am AWESOME!";

console.log(awesomeThoughts);

var funThoughts; 

funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

console.log(funThoughts);

$("#main").append(funThoughts); */

var name = "Vincent Borgers";

var formattedName = HTMLheaderName.replace("%data%", name);

var formattedRole = HTMLheaderRole.replace("%data%", "Data Scientist");


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var str1 = "audacity";
var str2 = str1.slice(-6);

console.log("U"+str2);

var skills = ["R","JS","SQL","Unix","git"];
var contact = {
  "phone"    : "02108238262",
  "email"    : "vincent.borges@gmail.com",
  "linkedin" : "https://nz.linkedin.com/in/vincent-borgers-4a99ab90",
  "github"   : "https://github.com/vnniyb"
};

var bio = {
  "name"          : name,
  "role"          : "Data Scientist",
  "contact"       : contact, 
  "picture"       : "images/fry.jpg",
  "welcome"       : "Welcome to my house"
};

var formattedPhone = HTMLmobile.replace("%data%", bio.contact.phone);

var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);

var formattedLinkedin = HTMLcontactGeneric.replace("%contact%", "linkedin");
var formattedLinkedin = formattedLinkedin.replace("%data%", "<a style='display: inherit' href='" + bio.contact.linkedin + "'> Click here </a>");

var formattedGithub = HTMLgithub.replace("%data%", "<a style='display: inherit' href='" + bio.contact.github + "'>" + bio.contact.github + "</a>");

var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedSkills = HTMLskills.replace("%data%", skills.join(", "));

$("#header").append(formattedBioPic);
$("#header").append(formattedPhone);
$("#header").append(formattedEmail);
$("#header").append(formattedLinkedin);
$("#header").append(formattedGithub);
$("#header").append(formattedWelcome);

$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);

console.log(skills.length);