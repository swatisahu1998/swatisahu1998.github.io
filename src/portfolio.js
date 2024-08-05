/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Swati's Portfolio",
  description:
    "Experienced DevOps engineer with expertise in cloud computing, automation, and containerization. Proven track record of bridging development and operations teams to deliver high-quality software products, with a customer-centric approach and strong problem-solving skills.",
  og: {
    title: "Swati Sahu Portfolio",
    type: "website",
    url: "https://swatisahu1998.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Swati Sahu",
  logo_name: "swati",
  nickname: "",
  subTitle:
    "Experienced DevOps engineer with expertise in cloud computing, automation, and containerization. Proven track record of bridging development and operations teams to deliver high-quality software products, with a customer-centric approach and strong problem-solving skills.",
  resumeLink:
    "https://drive.google.com/file/d/1QRA1ce_sHOETwVwojx7xyViL5zUzZF36/view?usp=sharing",
  portfolio_repository: "https://drive.google.com/file/d/1QRA1ce_sHOETwVwojx7xyViL5zUzZF36/view?usp=sharing",
  githubProfile: "https://github.com/swatisahu1998",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/swati1998",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/swati-sahu15/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:swati.sahu.sbg@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/#",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_.sswwaattiiii._",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "DevOPS & Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      imagePath:"girl-devops.svg",
      skills: [
        "⚡ Automation: Spearheaded the adoption of 15+ cutting-edge automation tools, including Docker, Kubernetes, AWS, Azure, and others, revolutionizing infrastructure management with unprecedented efficiency and scalability.",
        "⚡ CI/CD Pipeline: Designed and implemented a fully automated, enterprise-grade CI/CD pipeline using Jenkins and AWS, achieving a remarkable 30% reduction in deployment time, and significantly improving software release cycles' reliability, speed, and quality.",
        "⚡ Deployment Optimization: Streamlined infrastructure management processes, resulting in a significant reduction in deployment time, increased team productivity, and improved collaboration across teams.",
        "⚡ Scalability and Reliability: Successfully leveraged automation and CI/CD expertise to ensure seamless scalability, high availability, and reliability, enabling the organization to handle increased workloads, drive business growth, and deliver high-quality software products.",
        "⚡ DevOps Excellence: Fostered a culture of continuous improvement, driving DevOps adoption, and implementing best practices that resulted in improved collaboration, increased efficiency, and enhanced software quality.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Tech Support and Networking",
      fileName: "DesignImg",
      imagePath:  "girl-support.svg",
      skills: [
        "❄️ Efficient Troubleshooting: Handled 1000+ trouble tickets daily with a 91% customer satisfaction rating, demonstrating exceptional problem-solving skills and dedication to customer support.",
        "❄️ Quality Assurance Excellence: Resolved 95% of defects reported in JIRA within the designated resolution timeframe, ensuring high-quality deliverables and contributing significantly to the quality assurance team's success.",
        "❄️ Network Optimization: Led a cross-functional team to develop system architecture using Wireshark, optimizing network bandwidth and reducing user downtime and lag by up to 92%.",
        "❄️ Enhanced User Experience: Successfully implemented system architecture enhancements, resulting in a significant improvement in overall user experience and system performance.",
        "❄️ Leadership and Collaboration: Collaborated closely with the Help Desk team and led a cross-functional team to achieve technical support and system architecture goals, demonstrating strong leadership and teamwork skills.",
      ],
      softwareSkills: [
        {
          skillName: "Support",
          fontAwesomeClassname: "flat-color-icons:online-support",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "devicon:jira-wordmark",
          style: {
          },
        },
        {
          skillName: "WireShark",
          fontAwesomeClassname: "simple-icons:wireshark",
          style: {
            color:"blue"
          },
        },
        {
          skillName: "3G/4G",
          fontAwesomeClassname: "ooui:network",
          style: {
            color:"teal"
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
          },
        },
      ],
    },
    
    {
      title: "Server Management & Log Analysis",
      fileName: "FullStackImg",
      imagePath:"girl-design.svg",
      skills: [
        "🏆 Real-time Insights: Implemented and maintained monitoring dashboards using Grafana, Splunk, and Kibana, providing real-time log analysis and application performance monitoring across engineering teams.",
        "🏆 Data-Driven Decision Making: Enabled data-driven decision making by facilitating the analysis of logs and application performance, allowing teams to quickly identify and address issues.",
        "🏆 Secure Remote Management: Operated Linux servers using tools like PuTTY, PuTTYgen, and other terminal emulators, enhancing secure remote management capabilities and operational efficiency.",
        "🏆Treamlined Server Operations: Demonstrated expertise in Linux server management, ensuring high availability, reliability, and performance of servers, and contributing to overall operational efficiency.",
      ],
      softwareSkills: [
        {
          skillName: "Grafana",
          fontAwesomeClassname: "devicon:grafana-wordmark",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Spunk",
          fontAwesomeClassname: "simple-icons:splunk",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Kibana",
          fontAwesomeClassname: "devicon:kibana-wordmark",
          style: {
          },
        },
        {
          skillName: "Putty/Puttygen",
          fontAwesomeClassname: "devicon:putty",
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "devicon:linux",
        },
        {
          skillName: "Server-management",
          fontAwesomeClassname: "lets-icons:server",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Log Analysis",
          fontAwesomeClassname: "icon-park-solid:log",
          style: {
            color:"green"
          },
        },
      ],
    },
    {
      title: "ServiceNow & Data Analysis",
      fileName: "DataScienceImg",
      imagePath:"girl3.svg",
      skills: [
        "⚓ Comprehensive Service Management: Worked on ServiceNow management, defect resolution, and technical support, ensuring seamless IT service delivery and issue resolution.",
        "⚓ PowerBI Dashboard Development: Collaborated with DevOps engineers to develop a PowerBI dashboard, providing critical online sales data insights and enabling data-driven decision making.",
        "⚓ MDM Platform Optimization: Directed MDM platform optimization, resulting in improved service quality and operational effectiveness.",
        "⚓ Service Desk Deployment and Process Automation: Successfully deployed service desk solutions and automated processes, further enhancing service quality and operational efficiency.",
      ],
      softwareSkills: [
        {
          skillName: "MDM",
          fontAwesomeClassname: "arcticons:mdm-admin",
          style: {
            backgroundColor: "transparent",
            color:"pink"
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
          },
        },
        {
          skillName: "MS Office",
          fontAwesomeClassname: "arcticons:office",
          style: {
            backgroundColor: "transparent",
            color:"red"
          },
        },
        {
          skillName: "MS 365",
          fontAwesomeClassname: "hugeicons:office-365",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "bash",
          fontAwesomeClassname: "logos:bash-icon",
          style: {
            // backgroundColor: "transparent",
            // color: "#3776AB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "devicon:python-wordmark",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/u/swati/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/swati",
    // },
    // {
    //   siteName: "Credly",
    //   iconifyClassname: "simple-icons:credly",
    //   style: {
    //     // color: "#2EC866",
    //   },
    //   profileLink: "https://www.credly.com/users/swati/",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "RGPV Bhopal, MP",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "RGPVLOGO.jpeg",
      alt_name: "RGPV",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Java, C and Full Stack Development.",
        "⚡ I have also completed various projects based on Web Development.",
      ],
      website_link: "https://www.rgpv.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Azure Fundamentals",
      subtitle: "- Miscrosoft",
      logo_path: "Azure-f.png",
      certificate_link:
        "",
      alt_name: "Azure",
      color_code: "white",
    },
    {
      title: "PowerBi Data Analyst",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "",
      alt_name: "Powerbi Data Analyst",
      color_code: "Purple",
    },
    {
      title: "Ansible Automation Specialist",
      subtitle: "- RedHat",
      logo_path: "redhat.png",
      certificate_link:
        "",
      alt_name: "RedHat",
      color_code: "#000000",
    },
    {
      title: "Automation Ninja",
      subtitle: "- Tech Mahindra",
      logo_path: "techmahindra.png",
      certificate_link:
        "",
      alt_name: "Automation Ninja",
      color_code: "#D83B0199",
    },
    {
      title: "SQL",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "",
      alt_name: "SQL",
      color_code: "purple",
    },
    {
      title: "AWS Practitioner",
      subtitle: "- AWS",
      logo_path: "aws.png",
      certificate_link:
        "",
      alt_name: "AWS",
      color_code: "#1F70C199",
    },
    {
      title: "Openstack",
      subtitle: "- Tech Mahindra Training",
      logo_path: "Openstack.png",
      certificate_link:
        "",
      alt_name: "openstack",
      color_code: "red",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "As a highly efficient and customer-focused professional, I currently automate infrastructure processes to reduce manual workload and improve system scalability. I accelerate deployment times through a robust CI/CD pipeline, enabling rapid response to evolving business needs. I develop and maintain interactive sales data dashboards using Power BI, providing actionable insights that inform data-driven decision-making. With a strong focus on operational reliability, I ensure high system performance and uptime through effective monitoring and log analysis tools. I continuously optimize network architecture to reduce user downtime and lag, enhancing the overall user experience. With a customer-centric approach, I consistently deliver exceptional customer satisfaction, maintaining a 95% satisfaction rating despite high technical support ticket volumes.",
  header_image_path: "experiences.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Tech Mahindra Pvt. Ltd.",
          company_url: "https://www.techmahindra.com/",
          logo_path: "techmahindra.png",
          duration: "Oct 2021 - Oct Present",
          location: "Indore, Madhya Pradesh, India",
          description:"Implemented Docker, Kubernetes, and other automation tools for infrastructure management. Designed and implemented a CI/CD pipeline with Jenkins, reducing deployment time by 50%. Provided L2 technical support with a 92% customer satisfaction rating. Won the Bravo Award three times for exceptional performance.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer Intern",
          company: "Infotech Solutions",
          company_url: "#/",
          logo_path: "infotech.png",
          duration: "June 2020 - Sep 2020",
          location: "Indore, Madhya Pradesh, India",
          description:
            "Assisted in building and maintaining websites for clients using HTML, CSS, and JavaScript. Gained hands-on experience with front-end development and collaborated with a team to deliver projects efficiently. Implemented responsive design principles and optimized website performance. Developed problem-solving skills and learned version control using Git. Enhanced coding skills and understanding of web development frameworks.",
          color: "#000000",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Remote",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. ",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "girlproject.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "girlproject.svg",
};

const publications = {
  data: [
    {
      id: "",
      name: "Developing Accurate and Reliable Machine Learning Classifiers to Identify and Predict Key Protein-Protein Interaction Sites",
      createdAt: "NA",
      description: "Published in Computational Drug Discovery and Design, Springer Methods in Molecular Biology series",
      url: "#",
    },
    {
      id: "Ordinal Regression-based Age Estimation with Neural Networks: A Ranked Approach",
      name: "Ordinal Regression-based Age Estimation with Neural Networks: A Ranked Approach",
      createdAt: "NA",
      description: "Published in IEEE",
      url: "",
    },
    {
      id: "Heart Disease Detection Using Big Data Approach",
      name: "Heart Disease Detection Using Big Data Approach",
      createdAt: "NA",
      description: "Published in IEEE",
      url: "",
    },
    {
      id: "Classification of Arrhythmia using ECG Data",
      name: "Classification of Arrhythmia using ECG Data",
      createdAt: "NA",
      description: "Published in IEEE",
      url: "",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "girl-contact.svg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with DevOps, Cloud, and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "#",
    avatar_image_path: "girl-blog.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Mhow, Madhya Pradesh, India - 453441",
    locality: "Mhow Gaon",
    country: "India",
    region: "Madhya Pradesh",
    postalCode: "453441",
    streetAddress: "Shanti Nagar, Mhow Gaon",
    avatar_image_path: "girl-address.svg",
    location_map_link: "https://maps.app.goo.gl/tcksbjuMXhCTgn8S9",
  },
  phoneSection: {
    title: "Contact Number",
    subtitle: "+91 0000000000",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
