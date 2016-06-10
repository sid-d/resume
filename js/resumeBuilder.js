/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name": "Sid Smith",
  "role": "Developer",
  "contacts": {
    "mobile": "222-225-2134",
    "email": "abcemail@gmail.com",
    "github": "sid-d",
    "twitter": "sss",
    "location": "Evanston, IL"
  },
  "welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit sem, luctus a mi a, consectetur vulputate nisl. Duis at orci est. Mauris bibendum iaculis feugiat. Nam eu elit porttitor, vulputate nisi quis, elementum elit. Fusce scelerisque pretium vehicula. Aliquam nisl dolor, aliquet a hendrerit non, accumsan vel libero. Praesent rhoncus eleifend tortor quis tempus.",
  "skills": [
    "ruby",
    "JavaScript",
    "skill3"
  ],
  "bioPic": "http://www.fastly.picmonkey.com/_/static/images/index/picmonkey_twitter_02.24fd38f81e59.jpg"
}

bio.display = function(){
  var formatedName = HTMLheaderName.replace("%data%", bio.name);
  var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
  
  $('#header').prepend(formatedRole);
  $('#header').prepend(formatedName);

  var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formatedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  
  var contactsAll = formatedMobile + formatedEmail + formatedGithub + formatedTwitter + formatedLocation;

  $('#topContacts').append(contactsAll);
  $('#footerContacts').append(contactsAll);

  var formatedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var formatedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

  $('#header').append(formatedBioPic);
  $('#header').append(formatedWelcomeMsg);


  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills){
      var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
      $("#skills").append(formattedSkill);
    }
  }
}

var education = {
  "schools": [
  {
    "name": "Carl",
    "location": "Chicago,IL",
    "degree": "BA",
    "majors": ["a","b"],
    "dates": "2012/2/2-2014/2/3",
    "url": "http://www.google.com"
  },
  {
    "name": "Carl2",
    "location": "Madison, WI",
    "degree": "MA",
    "majors": ["a1","b1"],
    "dates": "2012/2/2-2014/2/3",
    "url": "http://www.google.com"
  }],

    "onlineCourses" : [
    {
      "title": "Ruby",
      "school": "Udacity",
      "date": "2016",
      "url": "http://www.udacity.com"
    },
    {
      "title": "JavaScript",
      "school": "Udacity",
      "date": "2015",
      "url": "http://www.udacity.com"
    }
    ]
}

education.display = function(){

  $("#education").append(HTMLschoolStart);
  for (edu1 in education.schools){
    var formattedName = HTMLschoolName.replace("%data%",education.schools[edu1].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[edu1].degree);
    var formattedDates = HTMLschoolDates.replace("%data%",education.schools[edu1].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[edu1].location);

    $(".education-entry:last").append(formattedName);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);

    for (major in education.schools[edu1].majors){
      var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[edu1].majors[major]);
      $(".education-entry:last").append(formattedMajor);
    }
  }

  
  $(".education-entry:last").append(HTMLonlineClasses);

  for (edu2 in education.onlineCourses){
    var formattedOTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[edu2].title);
    var formattedOSchool = HTMLonlineSchool .replace("%data%",education.onlineCourses[edu2].school);
    var formattedODate = HTMLonlineDates.replace("%data%",education.onlineCourses[edu2].date);
    var formattedOURL = HTMLonlineURL.replace("%data%",education.onlineCourses[edu2].url);

    $(".education-entry:last").append(formattedOTitle);
    $(".education-entry:last").append(formattedOSchool);
    $(".education-entry:last").append(formattedODate);
    $(".education-entry:last").append(formattedOURL);
  }
}

var work = {
  "jobs": [
    {
      "employer": "Company A",
      "title": "Title A",
      "location": "Minneapolis,MN",
      "dates": "2012-2016",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit sem, luctus a mi a, consectetur vulputate nisl. Duis at orci est. Mauris bibendum iaculis feugiat. Nam eu elit porttitor, vulputate nisi quis, elementum elit. Fusce scelerisque pretium vehicula. Aliquam nisl dolor, aliquet a hendrerit non, accumsan vel libero. Praesent rhoncus eleifend tortor quis tempus."
    },
    {
      "employer": "Company B",
      "title": "Title B",
      "location": "New York,NY",
      "dates": "2012-2016",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit sem, luctus a mi a, consectetur vulputate nisl. Duis at orci est. Mauris bibendum iaculis feugiat. Nam eu elit porttitor, vulputate nisi quis, elementum elit. Fusce scelerisque pretium vehicula. Aliquam nisl dolor, aliquet a hendrerit non, accumsan vel libero. Praesent rhoncus eleifend tortor quis tempus."
    }
    ]
}

work.display = function(){
  for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedworkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedworkTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
}

var projects = {
  "projects": [
    {
      "title": "Sample A",
      "dates": "2014",
      "description": "Integer malesuada justo ipsum, sed blandit purus dignissim eget. Duis scelerisque ex ut dolor suscipit posuere. Duis faucibus venenatis mauris, a porta turpis efficitur ut. Nulla vel gravida eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum risus quis sapien pretium, id cursus libero aliquam. Vestibulum quam felis, scelerisque sed rutrum ornare, hendrerit ac mi. Integer tincidunt augue eget lacus sagittis, id fermentum diam vehicula. Nunc aliquet tortor nec ante mattis cursus eu non ex. Donec luctus leo semper enim placerat viverra. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "images": [
        "http://placehold.it/100x100",
        "http://placehold.it/100x100"
      ]
    },
    {
      "title": "Sample B",
      "dates": "2014",
      "description": "Sed eu justo dapibus, rutrum lectus ut, aliquet urna. Sed dictum magna sem, nec euismod turpis malesuada ut.",
      "images": [
        "http://placehold.it/150x150",
        "http://placehold.it/150x150"
      ]
    }
    ]
}

projects.display = function(){
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
 
    $(".project-entry:last").append(formattedTitle);
    $(".project-entry:last").append(formattedDescription);
    $(".project-entry:last").append(formattedDates);

    for (image in projects.projects[project].images){
      var formattedImages = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImages);
    }
  }
}

var inName = function(name){
  var names = name.split(" ");
  var firstName = names[0];
  var secondName = names[1];
  firstName = firstName.substr(0,1).toUpperCase()+firstName.substr(1);
  secondName = secondName.toUpperCase();
  return firstName+" "+secondName;
}

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);