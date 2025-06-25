/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Loc Tan Dinh",
  title: "Hi all, I'm Loc",
  subTitle: emoji(
    "✨ A Product Owner with expertise in innovation and experience in technology, skilled in data analysis, building Web & Mobile applications 📱, and integrating new technologies 🚀."
  ),
  resumeLink:
    "https://drive.google.com/file/d/13aUBN7c8ECt9nBepmLUs7X4R6eHk6TQ_/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dinhtanloc",
  linkedin:
    "https://www.linkedin.com/in/%C4%91inh-t%E1%BA%A5n-l%E1%BB%99c-104606277/",
  gmail: "dinhloc1004@gmail.com",
  gitlab: "https://gitlab.com/dinhloc1004",
  facebook: "https://www.facebook.com/loc.inh.656836/",
  medium: "https://medium.com/@dinhloc1004",
  stackoverflow: "https://stackoverflow.com/users/24993246/loc",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "An Innovative Product Owner who wants to make a difference in the world.",
  skills: [
    emoji(
      "⚡ APPLY AI AUTHENTICATION INTO STUDENT MANAGEMENT SYSTEM IN UNIVERSITY"
    ),
    emoji("⚡ BUILD AND DEVELOP AUTO ROBO FINANCE ADVISOR USING LLMS WITH AGENT GRAPH"),
    emoji(
      "⚡ RESEARCH AND DEVELOP NEW AI APPLICATIONS INTO REAL LIFE"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

//   softwareSkills: [
//     {
//       skillName: "html-5",
//       fontAwesomeClassname: "fab fa-html5"
//     },
//     {
//       skillName: "css3",
//       fontAwesomeClassname: "fab fa-css3-alt"
//     },
//     {
//       skillName: "sass",
//       fontAwesomeClassname: "fab fa-sass"
//     },
//     {
//       skillName: "JavaScript",
//       fontAwesomeClassname: "fab fa-js"
//     },
//     {
//       skillName: "reactjs",
//       fontAwesomeClassname: "fab fa-react"
//     },
//     {
//       skillName: "nodejs",
//       fontAwesomeClassname: "fab fa-node"
//     },
//     {
//       skillName: "swift",
//       fontAwesomeClassname: "fab fa-swift"
//     },
//     {
//       skillName: "npm",
//       fontAwesomeClassname: "fab fa-npm"
//     },
//     {
//       skillName: "sql-database",
//       fontAwesomeClassname: "fas fa-database"
//     },
//     {
//       skillName: "aws",
//       fontAwesomeClassname: "fab fa-aws"
//     },
//     {
//       skillName: "firebase",
//       fontAwesomeClassname: "fas fa-fire"
//     },
//     {
//       skillName: "python",
//       fontAwesomeClassname: "fab fa-python"
//     },
//     {
//       skillName: "docker",
//       fontAwesomeClassname: "fab fa-docker"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };
softwareSkills: [
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "tableau",
    fontAwesomeClassname: "fas fa-chart-line"
  },
  {
    skillName: "powerBI",
    fontAwesomeClassname: "fas fa-chart-pie"
  },
  {
    skillName: "JavaFX",
    fontAwesomeClassname: "fas fa-code"
  },
  {
    skillName: "Flutter",
    fontAwesomeClassname: "fab fa-google"
  },
  {
    skillName: "Next.js",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "firebase",
    fontAwesomeClassname: "fas fa-fire"
  },
  {
    skillName: "azure",
    fontAwesomeClassname: "fab fa-microsoft"
  },
  {
    skillName: "jira",
    fontAwesomeClassname: "fab fa-jira"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UEH University",
      logo: require("./assets/images/uehLogo.jpg"),
      subHeader: "Bachelor of Information Technology",
      duration: "September 2022 - Present",
      desc: "Lead technology projects in university and working with the IT Department to develop new applications.",
      descBullets: [
        "Learn Innovation and Project management, use tools like BMC, VPC to ideate, launch the product and Agile in project management",
        "Learn technology skills like Data Science, Machine Learning, Deep Learning, App development, ...",
        "Join in many technology projects in university and work with IT Department to develop new applications"
      ]
    },
    {
      schoolName: "AIOVN Program",
      logo: require("./assets/images/aioLogo.png"),
      subHeader: "Diploma of Data Science and AI Engineer",
      duration: "August 2024 - Present",
      desc: "Studied about Data Science, Machine Learning, Deep Learning, ... Working as Research Assistant to help a doctor in university.",
      descBullets: [
        "Learn Python Fundamental and other package for DS",
        "Understand about Machine Learning, how to apply Computer vision, NLP for real life application thourgh training or use service model",
        "Learn how to research and publish paper in AI field"
      ]
    },
    {
      schoolName: "HCMUS University",
      logo: require("./assets/images/hcmusLogo.png"),
      subHeader: "Diploma of Data Analyst",
      duration: "September 2023 - April 2024",
      desc: "Learn about DA technology skills",
      descBullets: [
        "Learn how to execute SQL syntax and use DBMS in company",
        "Learn how to use Tableau, PowerBI to visualize data and make report",
        "Make a story telling based on data",
        "Learn how to use Python and SQL to create prediction models"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Product Development", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Analyst", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Database Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "English",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Applied AI Intern",
      company: "Kyanon Digital",
      companylogo: require("./assets/images/kyanonlogo.png"),
      date: "April 2025 – Present",
      desc: "Kyannon Digital is an international company specializing in delivering products and services developed through Agile processes",
      descBullets: [
        "Research, survey, and report on a series of the latest papers about RAG and LLM",
        "Develop ideas and plan product implementation following the SCRUM and AGILE processes",
        "Use Python, FastAPI, and React.js with the Langchain Framework to build the MVP of the product",
      ]
    },
    {
      role: "Fresher Product Owner",
      company: "IT Department - UEH University",
      companylogo: require("./assets/images/Logo_UEH_xanh.png"),
      date: "Jan 2025 – Present",
      desc: "Receiving high recognition from my lecturer, I had the opportunity to intern as a Product Owner and participate in a project to develop a mobile application for the university.",
      descBullets: [
        "Build user flow and wireframe for the application",
        "Design the database and API for the application",
        "Research and apply AI technology into the application",
        "Test the application and make a report for the project"
      ]
    },
    {
      role: "Product Assistant Intern" ,
      company: "Project X Vietnam",
      companylogo: require("./assets/images/projectXLogo.png"),
      date: "Dec 2024 – Present",
      desc: "Working as a member of the Product | Tech team at Project X, my responsibility was to gather and analyze customer issues based on the available data.",
      descBullets: [
        "Interview and collect data from customers",
        "Analyze data and make a report for the project",
        "Make ideas to improve the product",
        "Test the products based on the data"
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Saigon.A.I",
      companylogo: require("./assets/images/saigonAILogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Working as a Data Analyst Intern at Saigon.A.I, I had the opportunity to work on a project to analyze customer data and make a report for the project.",
      descBullets: [
        "Research and analyze customer data",
        "Make a report for the project",
        "Visualize the data and make a story telling",
        "Make a prediction model for the project"]
    },
    {
      role: "Research Assistant",
      company: "SGU University",
      companylogo: require("./assets/images/sguLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Working as a Research Assistant at SGU University, I had the opportunity to work on a project to help a doctor in the university.",
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECTS THAT I HAVE WORKED ON APPLY AI INTO REAL LIFE",
  projects: [
    {
      image: require("./assets/images/carwebb.png"),
      projectName: "Car Retailer Web Application",
      projectDesc: "Build a web application for a car retailer to help customers find the car they want.",
      footerLink: [
        {
          name: "Watch Demo",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/image.png"),
      projectName: "UEHeroes",
      projectDesc: "Build a Game 2d about UEH University",
      footerLink: [
        {
          name: "Watch Demo",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Saigon.A.I Internship",
      subtitle:
        "This internship was a great opportunity to learn about Data Analyst and AI technology.",
      image: require("./assets/images/saigonAILogo.png"),
      imageAlt: "SaigonAI Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "3rd ICIT Presentation",
      subtitle:
        "My paper will be published at ICIT International Conference Proceedings by Springer will be archived in Springer Digital Library.",
      image: require("./assets/images/icitLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: ""
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "17th FAIR Presentation",
      subtitle:
        "Our paper is presented at FAIR 2024 (Fundamental and Applied Information Research conference) held by PTIT University in Hanoi",
      image: require("./assets/images/ptitLogo.png"),
      imageAlt: "Ptit Logo",
      footerLink: [
        {
          name: "Attendace Certificate",
          url: ""
        }
      ]
    },
    {
      title: "Top 3 in Big Idea Competition",
      subtitle:
        "Our project is in the top 3 of the Big Idea Competition held by the University of Economics Ho Chi Minh City",
      image: require("./assets/images/dynamicLogo.png"),
      imageAlt: "Dynamic Logo",
      footerLink: [
        {
          name: "Big Idea Reward",
          url: "https://drive.google.com/file/d/1A2U9t3KErXBvNazbMakAeODocR5k8EvE/view?usp=sharing"
        }
      ]
    },

    {
      title: "AI for Devalopers Certificate",
      subtitle: "Completed Certifcation from ProtonX",
      image: require("./assets/images/protonXLogo.png"),
      imageAlt: "Proton Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    },
    {
      title: "Google Data Analyst Professional Certificate",
      subtitle: "Completed Certifcation from Google for Data Analyst",
      image: require("./assets/images/googleCousera.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/c2c2c4064e17a32d9d9fadcc55ccbb15"},
        {
          name: "Final Project",
          url: "https://github.com/dinhtanloc/ads_enfit.git"
        }
      ]
    },
    {
      title: "Web and Mobile App Development Professional Certificate",
      subtitle: "Completed Certifcation from Udemy for Web and Mobile App Development",
      image: require("./assets/images/udemyLogo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {name: "Certification", url: "https://www.udemy.com/certificate/UC-933c9181-ed0c-493d-afab-5c9e7ec3d4d1/"},
        {
          name: "Final Project",
          url: "https://github.com/dinhtanloc/student-management-app.git"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
