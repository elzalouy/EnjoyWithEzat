import reducer, { ProjectsActions } from "../../../store/Projects";
const initialState = {
  projects: [
    {
      id: "1",
      projectName: "Devmix NGO web site",
      Description:
        "Devmix is an NGO that aims to shae knowledge and experience, This web site gathers everything they achieved until now and illustrates their purpose",
      github: "https://github.com/elzalouy/Devmix-App",

      website: "https://devmix.herokuapp.com",
      category: ["Web Development", "Software Engineering"],
    },
    {
      id: "2",
      projectName: "Devmix NGO web site",
      Description:
        "Devmix is an NGO that aims to shae knowledge and experience, This web site gathers everything they achieved until now and illustrates their purpose",
      github: "https://github.com/elzalouy/Devmix-App",
      website: "https://devmix.herokuapp.com",
      category: ["Software Engineering", "Eduacation", "Guides"],
    },
  ],
  selectedProjects: [
    {
      id: "1",
      projectName: "Devmix NGO web site",
      Description:
        "Devmix is an NGO that aims to shae knowledge and experience, This web site gathers everything they achieved until now and illustrates their purpose",
      github: "https://github.com/elzalouy/Devmix-App",
      website: "https://devmix.herokuapp.com",
      category: ["Web Development", "Software Engineering"],
    },
    {
      id: "2",
      projectName: "Devmix NGO web site",
      Description:
        "Devmix is an NGO that aims to shae knowledge and experience, This web site gathers everything they achieved until now and illustrates their purpose",
      github: "https://github.com/elzalouy/Devmix-App",
      website: "https://devmix.herokuapp.com",
      category: [
        "Software Engineering",
        "Software Engineering",
        "Eduacation",
        "Guides",
      ],
    },
  ],
  selectedCategory: "all",
  categories: [
    "Web Development",
    "Software Engineering",
    "Eduacation",
    "Guides",
  ],
};

test("selectProjectsByType => action payload should be string!", () => {
  expect(
    reducer(initialState, ProjectsActions.selectProjectsByType(5))
  ).toEqual(expect.objectContaining(initialState));
});


test("selectProjectsByType => should return an array of elements which contains the selected gategories!...", () => {
  const expected = /Web Development/;
  const expectedProjects = {
    selectedProjects: [
      {
        id: "1",
        projectName: "Devmix NGO web site",
        Description:
          "Devmix is an NGO that aims to shae knowledge and experience, This web site gathers everything they achieved until now and illustrates their purpose",
        github: "https://github.com/elzalouy/Devmix-App",

        website: "https://devmix.herokuapp.com",
        category: ["Web Development", "Software Engineering"],
      },
    ],
  };
  
  expect(
    reducer(
      initialState,
      ProjectsActions.selectProjectsByType("Web Development")
    )
  ).toEqual(expect.objectContaining(expected));

  expect(
    reducer(
      initialState,
      ProjectsActions.selectProjectsByType("Web Development")
    )
  ).toEqual(expect.objectContaining(expectedProjects));

});

test("selectProjectsByType => should return array of zero elements if category not existed!..", () => {
  expect(
    reducer(initialState, ProjectsActions.selectProjectsByType("Javascript"))
  ).toEqual(expect.objectContaining({ selectedProjects: [] }));
});