export const navItem = ["Portfolio", "Experience", "Skills", "Contact"];

export const experienceItem = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Job Search Ninja",
    timeRanges: "Apr 2023 - Present",
    location: "Melbourne, Australia",
    website: "https://www.linkedin.com/company/job-search-ninja/",
    description: [
      "Developed core serverless features with Python and Firebase functions, improving system efficiency by 30%",
      "Utilized OpenAI APIs for personalized resumes and cover letters, saving job seeks an estimated 5+ hours per week",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Engineer",
    company: "Your ai (Closed)",
    timeRanges: "Feb 2023 - Mar 2023",
    location: "Melbourne, Australia",
    website: "https://www.linkedin.com/company/your-ai/",
    description: [
      "Implemented 4 distinctive pages in a short period of time for the startup using React.js",
      "Developed the entire backend features from scratch using Express.js, Node.js and OpenAI APIs",
    ],
  },
  {
    id: 3,
    title: "IT officer",
    company: "Strive Student Health Initiative Inc",
    timeRanges: "Oct 2022 - Present",
    location: "Melbourne, Australia",
    website: "https://strivehealth.org.au/",
    description: [
      "Managed and updated the organization's official website using WordPress, ensuring visibility through SEO efforts",
    ],
  },
  {
    id: 4,
    title: "Technology Intern",
    company: "Data Standards Body",
    timeRanges: "Jul 2022 - Oct 2022",
    location: "Melbourne, Australia",
    website: "https://www.linkedin.com/company/data-standards-body/",
    description: [
      "Collaborated in UI/UX design for an internal web tool, leading to enhanced workflow efficiency and user interaction",
      "Contributed to frontend development with React and Material UI, enhancing interface usability and responsiveness",
    ],
  },
];

export const portfolioItem = [
  {
    id: 1,
    title: "Unimelb Talent Pool",
    imageUrl: require("../static/images/unimelbtalentpool.png"),
    techStacks: ["React", "Redux", "Express", "MongoDB", "Node"],
    description:
      "The premier destination for employers looking to hire top talent from the University of Melbourne. Our website features a diverse pool of talented students and recent graduates across a range of fields and industries.",
    website: "http://unimelbtalentpool.australiaeast.cloudapp.azure.com",
    sourceCode: "https://github.com/ethangeau/unimelb-talent-pool",
  },
  {
    id: 2,
    title: "Melbourne Foodie",
    imageUrl: require("../static/images/melfoodie.png"),
    techStacks: ["React", "Google Map API", "OpenWeather API"],
    description:
      "Discover Melbourne's top restaurants, cafes, and bars with Melbourne Foodie. Our website offers ratings and reviews to help you find the perfect spot. Plus, the hourly weather forecast is displayed for you due to the changeable weather of Melbourne!",
    website: "http://ec2-3-25-201-182.ap-southeast-2.compute.amazonaws.com",
    sourceCode: "https://github.com/ethangeau/melfoodie",
  },
  {
    id: 3,
    title: "Cloud Computing Project",
    imageUrl: require("../static/images/cloud.png"),
    techStacks: ["Melbourne Research Cloud", "Ansible", "Docker", "CI/CD"],
    description:
      "This repo showcases a comprehensive full-stack web application that leverages both Twitter and AURIN data to decipher Melbourne's livability index. I have orchestrated the complete deployment and DevOps lifecycle of the project.",
    website: "",
    sourceCode:
      "https://github.com/ethangeau/Cluster_and_Cloud_Computing_Project",
  },
  {
    id: 4,
    title: "Hackathon Project",
    imageUrl: require("../static/images/hackathon.png"),
    techStacks: ["Python", "Pandas"],
    description:
      "Boost your language exam preparation with our IELTS Frequency Words Study Engine. Designed for IELTS aspirants, this PC-based tool optimizes your vocabulary learning. Study for just 15 minutes at a time, focusing on unmastered words for efficient memorization. ",
    website: "",
    sourceCode: "https://github.com/ethangeau/summerhack",
  },
  {
    id: 5,
    title: "Java Project",
    imageUrl: require("../static/images/java.png"),
    techStacks: ["Java", "OOP"],
    description:
      "This repo houses two distinctive Java projects: an adapted revival of the 80's RPG 'Rogue', and the 'Ethical Engine', a decision-making simulator based on the Trolley Dilemma, confronting users with moral choices.",
    website: "",
    sourceCode: "https://github.com/ethangeau/java-projects",
  },
];
