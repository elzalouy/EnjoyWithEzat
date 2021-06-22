const initialState = {
  name: "EZAT ELZALOUY",
  country: "Egypt",
  city: "Mansoura",
  yearsExperience: 2,
  completedProjects: 11,
  birthday: new Date("nov 7 1996").getFullYear(),
  jobTitle: "MERN stack developer as a freelancer",
  social: [
    {
      name: "facebook",
      link: "https://www.facebook.com/Eng.ezat.elzalouy/",
      icon: "bi-facebook",
    },
    {
      name: "twitter",
      link: "https://twitter.com/Ezat_Elzalouy/",
      icon: "bi-twitter",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/ezat-elzalouy-844bb0133/",
      icon: "bi-linkedin",
    },
    { name: "github", link: "https://github.com/elzalouy", icon: "bi-github" },
  ],
  knowledges: [
    "Node.js, Express.js, Next.js",
    "NoSqlDB, SqlDB, firebase",
    "React.js, Hooks, Redux",
    "Sass, Less, Bootstrap",
    "UML, SCRUM, Agile",
  ],
  languages: [
    { key: "Arabic", value: 99 },
    { key: "English", value: 85 },
    { key: "Francais", value: 20 },
  ],
};
export default initialState;
