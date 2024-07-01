
const resume = {
  "personal_info": {
    "name": "Vishnu Priya",
    "address": "5E, Pudhumandhai 3rd street, Vasudevanallur, Tenkasi district",
    "phone": "9940995669",
    "email": "vishnupriyatk1996@gmail.com",
    "linkedin": "linkedin.com/in/vishnupriya-hari-haran",
    "github": "https://github.com/Vishnupriya1996TH"
  },
  "summary": "Aspiring Embedded Engineer with a Masters degree in Embedded System Technology, involved in developing avionics components and several academic projects.",
  "experience": [
    {
      "job_title": "Embedded Linux Engineer",
      "company": "AERQ",
      "location": "Hamburg, Germany",
      "start_date": "March 2022",
      "end_date": "December 2022",
      "responsibilities": [
        "Embedded Systems Development for Avionics: Participated actively in the development and testing phase of avionic components, ensuring they met stringent industry standards and requirements.",
        "Yocto Project Expertise: Played a pivotal role in the development of Qualification Software for avionic components leveraging the Yocto Project. Gained hands-on experience in setting up and customizing Yocto builds to match specific component needs.",
        "Automated Testing: Authored and executed test cases using Robotframework, ensuring comprehensive coverage and validation of software components’ functionality and performance.",
        "Continuous Integration & Delivery (CI/CD): Seamlessly integrated the component test framework into the CI/CD pipeline, facilitating automatic testing during software updates and reducing integration issues.",
        "Collaboration: Worked closely with a team of developers, testers, and integration specialists, sharing insights and suggestions to streamline processes and enhance the quality of avionic software components."
      ]
    }
  ],
  "education": [
    {
      "degree": "Master of Technology in Embedded System Technology",
      "institution": "SRM Institute of Science and Technology",
      "location": "Chennai",
      "graduation_date": "May 2020"
    },
    {
      "degree": "Bachelor of Engineering in Electronics and Communication Engineering",
      "institution": "Kamaraj College of Engineering and Technology",
      "location": "Virudhunagar",
      "graduation_date": "May 2017"
    }
  ],
  "skills": [
    "Embedded C",
    "Python",
    "BASH",
    "Linux",
    "Yocto Project",
    "Robot Framework",
    "Git",
    "Agile Methodologies",
    "Docker",
    "Continuous Integration/Continuous Deployment (CI/CD)"
  ],
  "projects": [
    {
      "name": "NODE TO NODE SECURE DATA TRANSMISSION FOR IOT DEVICE",
      "technologies": ["Arduino", "Node MCU", "Zigbee"]
    },
    {
      "name": "IOT-BASED SOUND PRESSURE LEVEL SYSTEM FOR FIREWORK INDUSTRY",
      "technologies": ["Arduino", "Sound sensor", "Bluetooth"]
    },
    {
      "name": "RFID BASED ATTENDANCE SYSTEM",
      "technologies": ["Arduino", "RFID Module"]
    }
  ],
  "languages": [
    {
      "language": "Tamil",
      "proficiency": "Native"
    },
    {
      "language": "English",
      "proficiency": "Professional working proficiency"
    }
  ],
  "interests": [
    "Open source contribution",
    "Traveling",
    "Cycling"
  ]
};

  // for loop
  console.log("Skills: ");
  for(let i = 0; i < resume.skills.length; i++){
    console.log(resume.skills[i]);
  }

  // for in
  console.log("Personal info: ");
  for(let i in resume.personal_info){
    console.log(i, resume.personal_info[i]);
  }

  // for of
  console.log("Projects: ");
  for(let project of resume.projects){
    console.log(project);
  }

  // forEach
  console.log("Expereince: ");
  resume.experience.forEach(experience => {
    console.log(experience);
  });