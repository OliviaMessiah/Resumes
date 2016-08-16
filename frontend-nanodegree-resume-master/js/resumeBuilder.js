//Bio
var bio = {
    "name": "Olivia King",
    "role": "Front End Developer",
    "contacts": {
        "mobile": "+6308039761",
        "email": "Oliviaking.0.16@gmail.com",
        "github": "OliviaMessiah",
        //no twitter
        "location": "Bolingbrook, IL"
    },
    "welcomeMessage": "Thank you for visiting my resume!!",
    "skills": ["HTML", "CSS", "JavaScript", "SQL", "Python"],
    "biopic": "n/a",
    //display function for bio
    "display": function() {
        var formattedContact = [
            HTMLmobile.replace("%data%", bio.contacts.mobile),
            HTMLemail.replace("%data%", bio.contacts.email),
            HTMLlocation.replace("%data%", bio.contacts.location)
        ];
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
        //Contact info
        for (var i = 0; i < formattedContact.length; i++) {
        $("#topContacts, #footerContacts").append(formattedContact[i]);
}
        //Profile Picture
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        //Welcome Message
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        //Skills
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var skill = 0; skill < bio.skills.length; skill++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
            }
        }
    }
};

//education
var education = {
    "schools": [{
        "name": "Year Up Chicago",
        "location": "Chicago, IL",
        "degree": "IT Training",
        "majors": ["Web Development"],
        "dates": "Spring 2016 - Current",
        "url": "http://www.yearup.org/about-us/our-locations/chicago/"
    }],
    "onlineCourses": [{
        "title": "Intro to Programming Certification",
        "school": "Udacity",
        "date": "Spring 2016 - Current",
        "url": "http://www.udacity.com"
    },
    {
        "title" : "Certificate of Completion: HTML Fundamentals",
        "school" : "Sololearn",
        "date" : "June 2016",
        "url" : "http:///C:/Users/oking/Downloads/cert-1014-1162732%20(1).pdf"
    },
    {
        "title" : "Certificate of Completion: SQL Fundamentals",
        "school" : "Sololearn",
        "date" : "June 2016",
        "url" : "http://www.sololearn.com/Profile/1162732/"
    },
    {
        "title" : "Certificate of Completion: CSS Fundamentals",
        "school" : "Sololearn",
        "date" : "July 2016",
        "url" : "http://www.sololearn.com"
    },
   ],
    //display function for education
    "display": function() {
        for (var school = 0; school < education.schools.length; school++) {
            var fname = HTMLschoolName.replace("%data%", education.schools[school].name);
            fname = fname.replace("#", education.schools[school].url);
            var fcity = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var fdegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var fmajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            var fgyear = HTMLschoolDates.replace("%data%", education.schools[school].dates);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(fname + fdegree);
            $(".education-entry:last").append(fgyear);
            $(".education-entry:last").append(fcity);
            $(".education-entry:last").append(fmajors);
        }
        //for online course
        for (var course = 0; course < education.onlineCourses.length; course++) {
            var ftitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var fschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var fdate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
            var furl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(HTMLonlineClasses);
            $(".education-entry:last").append(ftitle + fschool);
            $(".education-entry:last").append(fdate);
            $(".education-entry:last").append(furl);
        }
    }
};
// work Experience
var work = {
    "jobs": [{
        "employer": "Nordstrom",
        "title": "Personal Stylist",
        "location": "Miami, FL",
        "dates": "April 2013 - May 2015",
        "description": "Was an image consultant for over 30+ clients over a two week period".},{
        "employer": "ZS associates",
        "title": "Administrative asst. Intern",
        "location": "Chicago, IL",
        "dates": "August 2013 - Current",
        "description": "Resolve administrative problems by coordinating preparation of reports, analyzing data, and identifying solutions".}],
    //display function for work experience
    "display": function() {
        for (var job = 0; job < work.jobs.length; job++) {
            $("#workExperience").append(HTMLworkStart); //workExperience is an "id"
            var emp_tit = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) +
                HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var date_city = HTMLworkDates.replace("%data%", work.jobs[job].dates) +
                HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var descrip = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(emp_tit); //work-entry is a "class"
            $(".work-entry:last").append(date_city);
            $(".work-entry:last").append(descrip);
        }
    }
};

//for displaying projects
var projects = {
    "projects": [{

        "title": "Stage 2 make your own fill in the blanks Quiz",
        "dates": "August 2016",
        "description": "In intro to programming, created fill in the blanks quiz using python programming ",
        "images": ["images/quiz.jpg", "images/quiz.jpg"]

    }],
    //display function for projects
    "display": function() {
        for (var project = 0; project < projects.projects.length; project++) {
            $("#projects").append(HTMLprojectStart);
            var ftitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var fdate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var fdesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            var fpics = [];
            console.log("index project: ", project);
            for (var img = 0; img < projects.projects[project].images.length; img++) {
                fpics[img] = HTMLprojectImage.replace("%data%", projects.projects[project].images[img]);
                fpics[img] = fpics[img].replace("%title%", projects.projects[project].title);
            }
            $(".project-entry:last").append(ftitle);
            $(".project-entry:last").append(fdate);
            $(".project-entry:last").append(fdesc);
            for (var pic = 0; pic < fpics.length; pic++) {
                $(".project-entry:last").append(fpics[pic]);
            }
        }
    }
};

// To Click locations
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
//Displaying Sections
bio.display();
education.display();
work.display();
projects.display();
//Interactive Map
$("#mapDiv").append(googleMap);
