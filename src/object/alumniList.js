const alumniList = [
  {
    name: "Ankit Sharma",
    imageUrl:
      "https://images.unsplash.com/photo-1649433658557-54cf58577c68?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    batch: "2015-2019",
    branch: "Computer Science",
    successStory:
      "Ankit developed a deep passion for programming and led several hackathons during college. He secured a position at a top tech company and now leads a team of software engineers.",
    achievements: [
      "Winner of National Hackathon 2018",
      "Published a research paper on AI and Machine Learning",
      "Secured 1st place in Code Rush Coding Competition",
    ],
    feedback:
      "The college provided an excellent platform for honing technical skills and fostering innovation. The supportive faculty and hands-on learning approach made all the difference.",
  },
  {
    name: "Neha Singh",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    batch: "2016-2020",
    branch: "Electrical Engineering",
    successStory:
      "Neha's curiosity for sustainable energy solutions led her to design an award-winning renewable energy model during her final year. She is now a researcher in the field of green energy.",
    achievements: [
      "Secured 2nd place in the State Renewable Energy Project Competition",
      "Interned with a leading energy solutions company",
      "Published 2 research articles on renewable energy systems",
    ],
    feedback:
      "The hands-on lab sessions and real-world projects during college helped me connect my learning with real-world applications. I am grateful for the practical exposure.",
  },
  {
    name: "Rahul Mehta",
    imageUrl:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    batch: "2017-2021",
    branch: "Mechanical Engineering",
    successStory:
      "Rahul excelled in robotics and mechanics. He was instrumental in creating a functional robotic arm prototype and is now working as a robotics engineer at a global firm.",
    achievements: [
      "Winner of National Robotics Challenge 2020",
      "Best Design Award for Robotic Arm Prototype",
      "Lead Coordinator of the Annual Tech Fest",
    ],
    feedback:
      "The workshops and technical events organized by the college were transformative. They ignited my interest in robotics and provided the tools I needed to succeed.",
  },
  {
    name: "Priya Gupta",
    imageUrl:
      "https://images.unsplash.com/photo-1439778615639-28529f7628bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
    batch: "2014-2018",
    branch: "Civil Engineering",
    successStory:
      "Priya pursued her passion for sustainable construction and was part of a team that developed eco-friendly building materials. She is now a project manager in an infrastructure company.",
    achievements: [
      "Developed an award-winning eco-friendly concrete mix",
      "Published a thesis on sustainable urban development",
      "Top scorer in Civil Engineering Batch 2018",
    ],
    feedback:
      "The college emphasized practical learning and real-world problem-solving, which helped me establish a strong foundation in civil engineering.",
  },
  {
    name: "Amit Patel",
    imageUrl:
      "https://images.unsplash.com/photo-1624140716840-5d89f311f500?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    batch: "2013-2017",
    branch: "Information Technology",
    successStory:
      "Amit excelled in software development and was the creator of a widely-used college management app. He now runs a successful startup in the SaaS space.",
    achievements: [
      "Created and deployed a student management app used by the college",
      "Won Startup Pitch Competition 2017",
      "Interned at a top IT company",
    ],
    feedback:
      "The support for entrepreneurship and the exposure to industry experts during college helped me kickstart my journey as a tech entrepreneur.",
  },
  {
    name: "Sonal Kaur",
    imageUrl:
      "https://images.unsplash.com/photo-1533779671378-06561cdaacb5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxmZW1hbGV8ZW58MHx8MHx8fDA%3DD",
    batch: "2012-2016",
    branch: "ET&T",
    successStory:
      "Sonal discovered her love for telecommunications during college and successfully built a prototype for a low-cost communication network in remote areas.",
    achievements: [
      "Winner of State Communication Design Challenge",
      "Published a research paper in an international journal",
      "Gold medalist in Electronics & Telecommunication Batch",
    ],
    feedback:
      "The rigorous academic curriculum paired with research opportunities at the college played a pivotal role in shaping my career in telecommunications.",
  },
  {
    name: "Karan Verma",
    imageUrl:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    batch: "2018-2022",
    branch: "Computer Science",
    successStory:
      "Karan was known for his innovative projects, including a real-time chatbot for customer support. He is now a senior developer at a leading tech company.",
    achievements: [
      "Created a chatbot for e-commerce platforms",
      "Winner of AI Innovations Challenge 2021",
      "Active contributor to open-source communities",
    ],
    feedback:
      "The faculty's guidance and access to modern labs enabled me to experiment and create innovative solutions during my college years.",
  },
  {
    name: "Rohit Sharma",
    imageUrl:
      "https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    batch: "2019-2023",
    branch: "Electrical Engineering",
    successStory:
      "Rohit spearheaded multiple projects on smart grids and renewable energy integration. His dedication helped him secure a position in a leading energy company where he now works on future-oriented power solutions.",
    achievements: [
      "Winner of Smart Energy Innovation Challenge 2022",
      "Developed a prototype for a cost-efficient microgrid",
      "Interned at a premier renewable energy firm",
    ],
    feedback:
      "The practical learning environment and exposure to the latest technologies in electrical engineering made my college years enriching. I am thankful for the collaborative spirit among peers and faculty.",
  },
  {
    name: "Megha Jain",
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    batch: "2011-2015",
    branch: "ET&T",
    successStory:
      "Megha's focus on wireless communication systems during her college days laid the groundwork for her success in designing advanced communication networks. She now works as a lead engineer in a global telecom company.",
    achievements: [
      "Published research on 5G network optimization",
      "Secured 1st place in the National Telecommunication Design Contest",
      "Active member of the college robotics and tech clubs",
    ],
    feedback:
      "The faculty's encouragement to pursue research and hands-on lab sessions in telecommunications helped me build a strong foundation for my career. It was a transformative experience.",
  },
  {
    name: "Aditya Kumar",
    imageUrl:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    batch: "2015-2019",
    branch: "Mechanical Engineering",
    successStory:
      "Aditya's passion for innovation in automotive technology led him to design a low-cost, energy-efficient vehicle model during his final year. He is now working in a prominent automotive R&D division.",
    achievements: [
      "Best Vehicle Design Award at TechFest 2018",
      "Interned at a leading automobile company",
      "Co-authored a paper on advancements in hybrid vehicles",
    ],
    feedback:
      "The hands-on projects and collaboration with industry mentors made my college journey unforgettable. The guidance I received has been instrumental in my career.",
  },
  {
    name: "Ritika Sinha",
    imageUrl:
      "https://media.istockphoto.com/id/1448525674/photo/portrait-of-a-smiling-businessman-at-workplace.webp?a=1&s=612x612&w=0&k=20&c=AUI7ezZHMuRIR-s0-FtwYh9thRLEn6QkSjJnCXPRxiE=",
    batch: "2016-2020",
    branch: "Civil Engineering",
    successStory:
      "Ritika's commitment to urban infrastructure projects saw her leading the design of a sustainable drainage system during her studies. She now works as an urban planner driving sustainable city designs.",
    achievements: [
      "Winner of Green Infrastructure Design Challenge 2020",
      "Developed a sustainable urban drainage model",
      "Interned with the state urban development department",
    ],
    feedback:
      "The real-world projects and mentoring from experienced faculty made my college journey impactful. I am proud to have been part of such an encouraging ecosystem.",
  },
  {
    name: "Vivek Joshi",
    imageUrl:
      "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    batch: "2017-2021",
    branch: "Electronics Engineering",
    successStory:
      "Vivek's interest in embedded systems helped him design a low-cost IoT device for smart home automation. Today, he is a senior developer in the IoT division of a global electronics giant.",
    achievements: [
      "Designed an award-winning IoT prototype for smart homes",
      "Won Best Paper Presentation at an international conference",
      "Lead organizer of the annual college tech symposium",
    ],
    feedback:
      "The interdisciplinary learning opportunities and state-of-the-art labs during college fueled my passion for electronics and IoT. The exposure to cutting-edge tech was invaluable.",
  },
];

export default alumniList;
