export const navItem = ["Portfolio", "Experience", "Skills", "Contact"];

export const experienceItem = [
  {
    id: 1,
    title: "IT officer",
    company: "Strive Student Health Initiative Inc",
    timeRanges: "Oct 2022 - Present",
    location: "Melbourne, Australia",
    website: "https://strivehealth.org.au/",
    description: [
      "Improved website design, consistency, and user experience, and increased its visibility and reach through SEO efforts",
      "Maintained an organized online database to ensure easy access to key information",
    ],
  },
  {
    id: 2,
    title: "Engineering Intern",
    company: "Data Standards Body",
    timeRanges: "Jul 2022 - Oct 2022",
    location: "Melbourne, Australia",
    website:
      "https://www.directory.gov.au/portfolios/treasury/data-standards-body",
    description: [
      "Conducted research on tools in the market to automate the generation of behavior-driven test documentation",
      "Collaborated in discussions and decision-making for the system architecture of the testdoc editor web application",
      "Contributed to the frontend development of the testdoc editor web application using React",
    ],
  },
];

export const portfolioItem = [
  {
    id: 1,
    title: "Unimelb Talent Pool",
    imageUrl: require("../static/images/melfoodie.png"),
    techStacks: ["React", "Redux", "Express", "MongoDB", "Node"],
    description:
      "The premier destination for employers looking to hire top talent from the University of Melbourne. Our website features a diverse pool of talented students and recent graduates across a range of fields and industries.",
    website: "https://github.com/ethangeau/unimelb-talent-pool",
    sourceCode: "https://github.com/ethangeau/unimelb-talent-pool",
  },
  {
    id: 2,
    title: "Melbourne Foodie",
    imageUrl: require("../static/images/melfoodie.png"),
    techStacks: ["React", "Google Map API", "OpenWeather API"],
    description:
      "Discover Melbourne's top restaurants, cafes, and bars with Melbourne Foodie. Our website offers ratings and reviews to help you find the perfect spot. Plus, the hourly weather forecast is displayed for you due to the changeable weather of Melbourne!",
    website: "https://github.com/ethangeau/melfoodie",
    sourceCode: "https://github.com/ethangeau/melfoodie",
  },
];
