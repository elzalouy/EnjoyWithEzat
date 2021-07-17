const initialState={
    projects:[
        {
          id:"1",
          projectName: "Devmix NGO web site",
          Description:
            "Devmix is an NGO that aims to shae knowledge and experience, This web site gathers everything they achieved until now and illustrates their purpose",
          github: "https://github.com/elzalouy/Devmix-App",
          website: "https://devmix.herokuapp.com",
          category:['Web Development' ,"Software Engineering"]
        },
        {
          id:"2",
          projectName: "Devmix NGO web site",
          Description:
            "Devmix is an NGO that aims to shae knowledge and experience, This web site gathers everything they achieved until now and illustrates their purpose",
          github: "https://github.com/elzalouy/Devmix-App",
          website: "https://devmix.herokuapp.com",
          category:["Software Engineering","Eduacation",'Guides']
        },
      ],
      selectedProjects:[
        {
          id:"1",
          projectName: "Devmix NGO web site",
          Description:
            "Devmix is an NGO that aims to shae knowledge and experience, This web site gathers everything they achieved until now and illustrates their purpose",
          github: "https://github.com/elzalouy/Devmix-App",
          website: "https://devmix.herokuapp.com",
          category:['Web Development',"Software Engineering"]
        },
        {
          id:"2",
          projectName: "Devmix NGO web site",
          Description:
            "Devmix is an NGO that aims to shae knowledge and experience, This web site gathers everything they achieved until now and illustrates their purpose",
          github: "https://github.com/elzalouy/Devmix-App",
          website: "https://devmix.herokuapp.com",
          category:["Software Engineering","Software Engineering","Eduacation",'Guides']
        }
      ],
      selectedCategory:'all',
      categories:['Web Development',"Software Engineering","Eduacation",'Guides']
}
export default initialState;