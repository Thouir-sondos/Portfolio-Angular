import { EducationSection } from "../interfaces/education.interface";
import { ExternalSite } from "../interfaces/external-site.interface"
import { ProjectSection } from "../interfaces/project.interface";
import { SkillSection } from "../interfaces/skill-section.interface";
import { ExperienceSection } from "../interfaces/work-experience.interface";
import { AssetPaths } from "./asset-paths.enum";

// Social media links to show
const SocialMediaLinks: ExternalSite[] = [
    {
        name: "Github",
        link: "https://github.com/Thouir-sondos",
        simpleIconName: "github",
        backgroundColor: "#181717",
    },
    {
        name: "LinkedIn",
        link: "www.linkedin.com/in/sondos-thouir",
        simpleIconName: "linkedin", 
        backgroundColor: "#0066c8", 
    },
    /*{
        1name: "LeetCode",
        link: "",
        simpleIconName: "leetcode",
        backgroundColor: "#FFA116",
    },*/
    {
        name: "Gmail",
        link: "thouirsondos@gmail.com",
        simpleIconName: "gmail",
        backgroundColor: "#EA4335",
    },
 
]

// Fullstack skills
const FullstackSkills: ExternalSite[] = [
    {
        name: "Angular",
        link: "https://angular.dev/",
        simpleIconName: "angular",
        backgroundColor: "#ea2848",
    },
    {
        name: "SpringBoot",
        link: "https://spring.io/projects/spring-boot",
        simpleIconName: "springboot",
        backgroundColor: "#6DB33F",
    },
    {
        name: "HTML5",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        simpleIconName: "html5",
        backgroundColor: "#E34F26",
    },
    {
        name: "CSS3",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        simpleIconName: "css3",
        backgroundColor: "#1572B6",
    },
    
    {
        name: "NodeJS",
        link: "https://nodejs.org/",
        simpleIconName: "nodedotjs",
        backgroundColor: "#5FA04E",
    },
   /* {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        simpleIconName: "javascript",
        backgroundColor: "#F7DF1E",
    },*/
  
    
    {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        simpleIconName: "bootstrap",
        backgroundColor: "#7952B3",
    },
 
    {
        name: "MySQL",
        link: "https://www.mysql.com/fr/",
        simpleIconName: "mysql",
        backgroundColor: "#4479A1",
    },
    {
        name: "FireBase",
        link: "https://firebase.google.com/?gad_source=1&gclid=Cj0KCQiA_Yq-BhC9ARIsAA6fbAhpyHfMbH59T0zdha_j91tvu4HZmdfIpo7B3VyMkbH2oRC5hG6wwDcaAvJEEALw_wcB&gclsrc=aw.ds",
        simpleIconName: "firebase",
        backgroundColor: "#DD2C00",
    },
];

const FullstackSection: SkillSection = {
    sectionTitle: "Fullstack Development",
    imagePath: AssetPaths.FULL_STACK_DEVELOPMENT_SVG,
    skillLinks: FullstackSkills,
    skillsList: [
        "Building responsive web applications using Angular & Spring Boot",
        "Creating and managing secure APIs with Spring Boot & JWT",
        "Developing dynamic and interactive websites with PHP & HTML",
        "Handling databases with MySQL & firebase",
    ]
}

// Android skills
const androidSkills: ExternalSite[] = [
    {
        name: "Android studion",
        link: "https://developer.android.com/studio?gad_source=1&gclid=Cj0KCQiA_Yq-BhC9ARIsAA6fbAiTvlIsV8fL-amUCU_7gO0rD9YwtSVUmPH_oFClD5A1jC1tzOFIgfsaAjtkEALw_wcB&gclsrc=aw.ds&hl=fr",
        simpleIconName: "androidstudio",
        backgroundColor: "#3DDC84",
    },
    {
        name: "FireBase",
        link: "https://firebase.google.com/?gad_source=1&gclid=Cj0KCQiA_Yq-BhC9ARIsAA6fbAhpyHfMbH59T0zdha_j91tvu4HZmdfIpo7B3VyMkbH2oRC5hG6wwDcaAvJEEALw_wcB&gclsrc=aw.ds",
        simpleIconName: "firebase",
        backgroundColor: "#DD2C00",
    },
    
];

// Android section
const androidSection: SkillSection = {
    sectionTitle: "Mobile development",
    imagePath: AssetPaths.mobile_SVG,
    skillLinks: androidSkills,
    skillsList: [
        "Developing Android applications with Android Studio",
        "Integrating Firebase Authentication & Database for mobile apps",
    ]
}

// network  skills
const networkSkills: ExternalSite[] = [
    {
        name: "cisco",
        link: "https://www.cisco.com/",
        simpleIconName: "cisco",
        backgroundColor: "#1BA0D7",
    },
    {
        name: "huawei",
        link: "https://e.huawei.com/en/talent/portal/#/",
        simpleIconName: "huawei",
        backgroundColor: "#FF0000",
    },
    {
        name: "pfsense",
        link: "https://www.pfsense.org/",
        simpleIconName: "pfsense",
        backgroundColor: "#212121",
    },
    {
        name: "VPN",
        link: "https://www.postgresql.org/",
        simpleIconName: "openvpn",
        backgroundColor: "#EA7E20",
    },
   
];

// network section
const networkSection: SkillSection = {
    sectionTitle: "Network & Security",
    imagePath: AssetPaths.network_SVG,
    skillLinks: networkSkills,
    skillsList: [
        "Configuring VLANs, VPNs, and firewalls (pfSense, FortiGate)",
        "Setting up Active Directory, DNS, and GPO policies",
        " Monitoring network and server performance & enhancing security with IPS/IDS",
        " Configuring Huawei & Cisco routers for optimized network performance"
    ]
}









// Dev projects
const DevelopmentProjects: ProjectSection = {
    sectionTitle: "Development Projects",
    sectionSubtitle: "🚀 Showcasing innovative solutions and real-world applications built with cutting-edge technologies.",
    entities: [
        {
            title: "Study Management Application",
            coverImagePath: AssetPaths.PROJECT_STUDY_MANAGEMENT,
            description: "A web-based study management platform built with Angular and Spring Boot, featuring secure authentication, role-based access, and real-time filtering.",
            techStack: ["Angular", "SpringBoot", "MySQL"],
            year: 2024
        },
        {
            title: "Fire Management Android App",
            coverImagePath: AssetPaths.PROJECT_FIRE_FIGHT,
            description: "An Android app for fire incident reporting and management with real-time alerts",
            techStack: ["Android Studio", "FireBase"],
            year: 2024
        },  {
            title: "Captive Portal Management System",
            coverImagePath: AssetPaths.PROJECT_PORTAL,
            description: " Developed a web-based platform for managing network access through a captive portal, integrating user authentication, access control, and session monitoring.",
            techStack: ["PHP", "Html","JS","MySQL"],
            year: 2024
        },
     
        {
            title: "Emotion, Gender and Age Detection System –",
            coverImagePath: AssetPaths.PROJECT_AI,
            description: "A CNN-based system for real-time emotion, gender, and age detection.",
            techStack: ["Python", "OpenCV", "TensorFlow", "CNN","Deep Learning"],
            year: 2024
        },
        {
            title: "Intranet Web Application",
            coverImagePath: AssetPaths.PROJECT_INTRANET,
            description: "A secure intranet web application designed for internal communication and resource management within an organization.",
            techStack: ["Angular", "SpringBoot", "MySQL",],
            year: 2023
        },
        {
            title: "Donation Management Android Application",
            coverImagePath: AssetPaths.PROJECT_DONATION,
            description: "A mobile app for managing and tracking donations, connecting donors with recipients efficiently",
            techStack: ["Android Studio", "FireBase"],
            year: 2023
        },
        {
            title: "E-commerce Website",
            coverImagePath: AssetPaths.PROJECT_ECOMMERCE,
            description: "An e-commerce platform for browsing and managing products with a user-friendly interface.",
            techStack: ["PHP", "Html","JS","MySQL"],
            year: 2022
        },
        {
            title: "FightCovid Web Application",
            coverImagePath: AssetPaths.PROJECT_COVID_WEB,
            description: "A pandemic management platform for data tracking and monitoring.",
            techStack: ["PHP", "Html","JS","MySQL"],
            year: 2021
        },
        {
            title: "FightCovid Mobile App",
            coverImagePath: AssetPaths.PROJECT_COVID_ANDROID,
            description: "A real-time GPS tracking and data management mobile application.",
            techStack: ["Android Studio", "FireBase"],
            year: 2021
        },



      
    ]
}

// Networking projects
const NetworkingProjects: ProjectSection = {
    sectionTitle: "Networking & Security Projects ",
    sectionSubtitle: "🚀 Design and implementation of secure and efficient IT infrastructures",
    entities: [
        {
            title: "IT Infrastructure Deployment for a Growing Business",
            coverImagePath: AssetPaths.PROJECT_INFRASTRUCTURE,
            description: " Designed and implemented a scalable IT infrastructure, including ADDS, DNS, VLANs, VPNs, and a pfSense firewall.",
            techStack: ["PfSense", "VPN", "VLAN", "DNS","ADDS"],
            year: 2024
        },
     
        
        {
            title: "MPLS Network Deployment",
            coverImagePath: AssetPaths.PROJECT_MPLS,
            description: "Configured MPLS with BGP, OSPF, and VPNs for secure multi-site connectivity.",
            techStack: ["enSP Huawei", "VLAN", "BGP","MPLS","VPN"],
            year: 2023
        },
    ]
}


// Internships Experience
const InternshipExperience: ExperienceSection = {
    experienceSectionTitle: "Internships",
    experiences: [
        {
            orgName: "Co-Energy",
            positions: [
                {
                    positionName: "Infrastructure Engineer (Final Year Internship)",
                    duration: "02/2024 - 06/2024",
                    location: "Ariana, Tunisia",
                    workPoints: [
                        "Implemented VLANs for network segmentation, VPNs for secure remote access, and deployed pfSense firewall with Snort IDS/IPS for intrusion detection and prevention. Integrated Zabbix monitoring to ensure system performance and reliability.",
                        "Configured Active Directory Domain Services (ADDS), DNS, and established a secondary domain to enhance network organization and access control.",
                        "Developed a client portal with MySQL for data management and an admin portal with LDAP authentication to streamline user access and security."
                    ]
                },
                
            ]
        },
        {
         
            orgName: "Protech-IT",
            positions: [
                {
                    positionName: "Full Stack Developer (Internship)",
                    duration: "06/2023 - 08/2023",
                    location: "Gabes , Tunisia",
                    workPoints: [
                          "Developed an intranet web application using Angular for the front end, Spring Boot for the back end, and MySQL for data storage.",
                          "Integrated REST APIs to ensure smooth and efficient communication between system components.",
                          "Designed and modeled the system using UML.",
                    ]
                }
            ]
        },
        {
         
            orgName: "Co-Energy",
            positions: [
                {
                    positionName: "Full Stack Web & Mobile Developer (Final Year Internship)",
                    duration: "03/2021 - 07/2021",
                    location: "Ariana, Tunisia",
                    workPoints: [
                          "Developed the FightCovid web application for pandemic management using HTML, PHP, and MySQL.",
                          "Created a mobile version with Android Studio, integrating real-time GPS tracking and Firebase for data management.",
                          "Enhanced public health monitoring by providing real-time location-based insights.",
                    ]
                }
            ]
        },
    ]
}
// Degrees
const BachelorsDegree: EducationSection = {
    degreeName: "Bachelor of Applied Science in Information and Telecommunication Technology",
    majorName: "Network Security",
    duration: "J09/2018 - 06/2021",
    universityName: "Higher Institute of Technological Studies of Gabes",
   
}

const MastersDegree: EducationSection = {
    degreeName: "Master in Communications and Networking Engineering Degree",
    duration: "09/2021 - 07/2024",
    universityName: "National Engineering School of Gabes ",
}


// Certifications
const Certifications: ProjectSection = {
    sectionTitle: "",
    entities: [
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_CCNA,
            techStack: ["CCNA1"],
            title: "CCNA1",
            description: "Introduction to Networks",
            liveLink: "https://www.credly.com/badges/19b51f70-d8d1-4300-b2c8-1d98a8eba8e7",
        },
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_CCNA,
            techStack: ["CCNA2"],
            title: "CCNA2",
            description: "Switching, Routing, and Wireless Essentials",
            
        },
    ]
}






export const AppConfig = {
    loaderSplashAnimation: true,      
    logoName: "Sondos Thouir",         
    name: "Sondos Thouir",            
    emailId: "thouirsondos@gmail.com",  

    // Google Form Contact Link
    googleFormContactLink: "thouirsondos@gmail.com",

    // Home page
    professionalTitle: "Software Developer|Network Engineer",
    professionalSummary: "Software and Network Engineer with expertise in web development and network infrastructure, specializing in secure and efficient solutions. Passionate about problem-solving and optimization.",
    githubProfile: "https://github.com/Thouir-sondos",             
    portfolioRepository: "https://github.com/Thouir-sondos/Portfolio-Angular",      
    socialMedia: SocialMediaLinks,    
    aboutMe: [                         
        FullstackSection,
        androidSection,
        networkSection,
     
    ],

    // Projects page
    projectsPageTitle: "Projects",    
    projectsPageDescription: "My projects leverage a diverse range of cutting-edge technology tools.",
    projectSections: [   
        DevelopmentProjects,
       NetworkingProjects,
    ],

    // Experience page
    experiencePageTitle: "My experiences",
    experiencePageDescription: "",
    experienceSections: [               
        InternshipExperience,
    ],

    // Education page
    educationPageTitle: "Degrees",
    educationPageDescription: "🎓 A Journey of Continuous Learning: Building Skills, Solving Problems, and Shaping the Future 🌟",
    educationSections: [
        MastersDegree,
        BachelorsDegree,
    ],


    // Achievements Page
    achievementsPageTitle: "Certifications",
    achievementsPageDescription: "",
    achievementsSections: [
        Certifications,
    ],
}
