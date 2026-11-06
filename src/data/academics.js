export const academicPath = "Class X, 2022  →  Class XII, 2024  →  B.Tech CSE, Expected 2028";

export const atAGlance = {
  currentDegree: "B.Tech in Computer Science & Engineering",
  university: "Koneru Lakshmaiah Education Foundation (KLU)",
  expectedGraduation: "2028",
  city: "Hyderabad, India",
};

export const academics = [
  {
    id: "btech",
    level: "Undergraduate",
    title: "B.Tech in Computer Science & Engineering",
    institution: "Koneru Lakshmaiah Education Foundation (KLU), Hyderabad",
    city: "Hyderabad",
    startYear: 2024,
    endYear: 2028,
    status: "pursuing", // "pursuing" renders badge "Pursuing" + "Expected graduation: 2028"
    statusBadge: "Pursuing",
    specialization: null, // [FILL or hidden]
    cgpa: null,           // [FILL or hidden]
    coursework: null,     // [FILL or hidden]
    details: [
      { label: "Expected graduation", value: "2028" }
    ],
  },
  {
    id: "class12",
    level: "Higher Secondary",
    title: "Higher Secondary Certificate (Class XII)",
    institution: "ODM Global School",
    city: "India",
    year: "2024",
    status: "completed",
    statusBadge: "Completed",
    board: null,          // [FILL or hidden]
    stream: null,         // [FILL or hidden]
    grade: null,          // [FILL or hidden]
    details: [
      { label: "Year of passing", value: "2024" }
    ],
  },
  {
    id: "class10",
    level: "Secondary School",
    title: "Secondary School Certificate (Class X)",
    institution: "St. James Convent School",
    city: "India",
    year: "2022",
    status: "completed",
    statusBadge: "Completed",
    board: null,          // [FILL or hidden]
    grade: null,          // [FILL or hidden]
    details: [
      { label: "Year of passing", value: "2022" }
    ],
  },
];

export const achievements = [
  {
    id: "hackathon-runner-up",
    title: "Runner-Up, National Level Hackathon",
    description: "Delivered a pitch-ready technical prototype under strict time constraints.",
    details: null, // [FILL: name, year, team]
  },
  {
    id: "hackathon-finalist",
    title: "Finalist in Multiple Hackathons",
    description: "Demonstrated problem-solving, teamwork, and rapid prototyping under competitive deadlines.",
    details: null,
  },
  {
    id: "competitive-programming",
    title: "Competitive Programming",
    description: "Active on LeetCode and HackerRank, consistently solving algorithmic challenges.",
    stats: null, // [FILL: real stats]
  },
];

