const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


const profile = {
        personal_info:
            {
                name: 'Shem John Juevesano',
                address: "Sitio Sereas, Lorega, San Miguel, Cebu City",
                contactno: "09651634871",
                email: "sjjuevesano@gmail.com",
                birthdate: "April 20, 2001",
                age: "23",
                gender: "Male"
            },
        
        about_me: 
            [
                 "Hello! I'm Shem, and for now, I am still a 2nd year College of Computer Studies student. I am aiming to enhance my coding skills especially in HTML, CSS, Javascript, and more! That's because I'm dreaming of becoming a full-stack developer."
        ],
        job:
        [
             "Full Stack Developer"
        ],

        skills: 
        [
            
            "HTML/CSS",
             "Javascript", 
             "PHP", 
             "Gaming",
              "Rizzz"
            
        ],

        education:
        [
            {
                level: "Elementary",
                school: "Busogon Integrated School",
                year: "2008-2014",
                schooladdress: "Busogon, San Remigio, Cebu"
            },
            {
                level: "Junior High School",
                school: "Busogon Integrated School",
                year: "2014-2018",
                schooladdress: "Busogon, San Remigio, Cebu"
            },
            {
                level: "Senior High School",
                school: "Busogon Integrated School",
                year: "2018-2020",
                schooladdress: "Busogon, San Remigio, Cebu"
            },
            {
                level: "College (Bachelor of Science in Information Technology)",
                school: "University of Southern Philippines Foundation",
                year: "2022-2024",
                schooladdress: "Salinas Drive, Lahug, Cebu City"
            }
        ],

        experience: 
    [
        {
                jobtitle: "Non-Voice Call Center Agent",
                companyname: "Fiercecom"
        }
    ],
        

        references: 
        [
            {
               namee: "No references yet",
               contactnum: "09123456789",
               work: "Teacher"
            },
            {
                namee: "No references yet",
                contactnum: "09123456789",
                work: "Teacher"
             },
             {
                namee: "No references yet",
                contactnum: "09123456789",
                work: "Teacher"
             }
        ],

        awards:
        [
            'Deans Lister - College BSIT 1ST Year (First Semister)',
            'Deans Lister - College BSIT 1ST Year (Second Semister)',
            'Deans Lister - College BSIT 2nd Year (First Semister)'
        ],

    };

app.use(cors());

    
app.get('/', (req,res) => { 
    res.json(profile);
});
    
app.listen(port, () => {
    console.log(`Server running on port link ${3000}`);
});