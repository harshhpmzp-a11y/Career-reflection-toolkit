const STUDENTS = [
  {
    id: "s01", name: "Aarav Sharma", course: "Computer Science", year: 2, avatar: "AS",
    dailyCheckins: [
      { date: "2026-03-10", mood: "Motivated", intention: "Complete my data structures assignment", note: "Finished the binary tree task. Felt productive." },
      { date: "2026-03-11", mood: "Focused", intention: "Revise for networks exam", note: "Good session, covered 3 chapters." },
      { date: "2026-03-12", mood: "Energised", intention: "Work on group project frontend", note: "Made great progress, team was in sync." }
    ],
    weeklyReviews: [
      { date: "2026-03-08", rating: 4, progress: "Completed 2 assignments and started the project.", energised: "Coding sessions in the morning.", friction: "Time management after lunch.", shift: "Start afternoons with a quick walk." }
    ],
    goals: [
      { id: "g1", title: "Get an internship by June", deadline: "2026-06-01", status: "in-progress" },
      { id: "g2", title: "Complete Python certification", deadline: "2026-04-30", status: "in-progress" },
      { id: "g3", title: "Build a portfolio website", deadline: "2026-03-31", status: "done" }
    ],
    careerPlan: { targetRole: "Software Engineer", skills: ["React", "Node.js", "System Design"], timeline: "Graduate → Internship → Full-time by 2028" }
  },
  {
    id: "s02", name: "Priya Nair", course: "Business Administration", year: 3, avatar: "PN",
    dailyCheckins: [
      { date: "2026-03-10", mood: "Anxious", intention: "Prepare for marketing presentation", note: "Presentation went well despite nerves." },
      { date: "2026-03-11", mood: "Energised", intention: "Research case study on brand strategy", note: "Found great sources, feeling confident." }
    ],
    weeklyReviews: [
      { date: "2026-03-08", rating: 3, progress: "Submitted marketing report. Scored 78%.", energised: "Group discussions and brainstorming.", friction: "Procrastinating on solo assignments.", shift: "Set a timer — 25 min work, 5 min break." }
    ],
    goals: [
      { id: "g1", title: "Lead the marketing club event", deadline: "2026-04-15", status: "in-progress" },
      { id: "g2", title: "Complete Excel advanced course", deadline: "2026-03-25", status: "done" }
    ],
    careerPlan: { targetRole: "Brand Manager", skills: ["Marketing Analytics", "Communication", "Excel"], timeline: "Graduate → Management trainee → Brand Manager by 2029" }
  },
  {
    id: "s03", name: "Rohan Mehta", course: "Mechanical Engineering", year: 1, avatar: "RM",
    dailyCheckins: [
      { date: "2026-03-11", mood: "Distracted", intention: "Understand thermodynamics chapter 3", note: "Struggled to focus. Need a quieter space." },
      { date: "2026-03-13", mood: "Focused", intention: "Finish lab report", note: "Got it done. Writing is improving." }
    ],
    weeklyReviews: [
      { date: "2026-03-08", rating: 2, progress: "Barely kept up with lecture notes.", energised: "Lab experiments — hands-on learning.", friction: "Theory lectures feel abstract.", shift: "Watch YouTube explainers before class." }
    ],
    goals: [
      { id: "g1", title: "Pass all first-year exams", deadline: "2026-05-20", status: "in-progress" },
      { id: "g2", title: "Join the robotics club", deadline: "2026-04-01", status: "done" }
    ],
    careerPlan: { targetRole: "Mechanical Design Engineer", skills: ["CAD", "Thermodynamics", "FEA"], timeline: "Graduate → Core engineering job → Specialise in automotive" }
  },
  {
    id: "s04", name: "Sneha Kulkarni", course: "Psychology", year: 4, avatar: "SK",
    dailyCheckins: [
      { date: "2026-03-10", mood: "Energised", intention: "Work on dissertation chapter 4", note: "Wrote 1200 words. On track!" },
      { date: "2026-03-12", mood: "Drained", intention: "Rest and do light reading", note: "Needed the break. Back tomorrow." },
      { date: "2026-03-14", mood: "Motivated", intention: "Finish literature review edits", note: "Submitted edits to supervisor." }
    ],
    weeklyReviews: [
      { date: "2026-03-08", rating: 5, progress: "3 dissertation chapters complete.", energised: "Writing and research flow.", friction: "Worrying about post-grad plans.", shift: "Schedule one career-planning session per week." }
    ],
    goals: [
      { id: "g1", title: "Submit dissertation draft", deadline: "2026-04-10", status: "in-progress" },
      { id: "g2", title: "Apply to 5 counselling internships", deadline: "2026-03-31", status: "in-progress" },
      { id: "g3", title: "Attend career fair", deadline: "2026-03-20", status: "done" }
    ],
    careerPlan: { targetRole: "Clinical Psychologist", skills: ["Counselling", "Research Methods", "CBT"], timeline: "Graduate → Masters → Clinical placement → Licensure by 2030" }
  },
  {
    id: "s05", name: "Arjun Verma", course: "Data Science", year: 2, avatar: "AV",
    dailyCheckins: [
      { date: "2026-03-11", mood: "Focused", intention: "Build ML model for course project", note: "Model accuracy reached 87%. Happy with that." },
      { date: "2026-03-13", mood: "Motivated", intention: "Learn about neural networks", note: "Completed 2 hours of online course." }
    ],
    weeklyReviews: [
      { date: "2026-03-08", rating: 4, progress: "Submitted project phase 1 with good feedback.", energised: "Problem-solving with data.", friction: "Math-heavy theory sections.", shift: "Find a study partner for stats topics." }
    ],
    goals: [
      { id: "g1", title: "Complete Kaggle competition", deadline: "2026-04-20", status: "in-progress" },
      { id: "g2", title: "Learn PyTorch basics", deadline: "2026-04-01", status: "in-progress" },
      { id: "g3", title: "Publish a data blog post", deadline: "2026-05-01", status: "in-progress" }
    ],
    careerPlan: { targetRole: "ML Engineer", skills: ["Python", "PyTorch", "Statistics", "SQL"], timeline: "Graduate → Data Analyst → ML Engineer by 2028" }
  },
  {
    id: "s06", name: "Meera Iyer", course: "Architecture", year: 3, avatar: "MI",
    dailyCheckins: [
      { date: "2026-03-10", mood: "Energised", intention: "Complete studio model for review", note: "Model received positive critique!" },
      { date: "2026-03-12", mood: "Anxious", intention: "Prepare concept board", note: "Did okay. Need to improve visual communication." }
    ],
    weeklyReviews: [
      { date: "2026-03-08", rating: 3, progress: "Submitted studio project phase 2.", energised: "Sketching and ideation.", friction: "AutoCAD technical drawing takes too long.", shift: "Watch 2 AutoCAD tutorials this week." }
    ],
    goals: [
      { id: "g1", title: "Win studio project award", deadline: "2026-05-01", status: "in-progress" },
      { id: "g2", title: "Improve AutoCAD speed", deadline: "2026-04-15", status: "in-progress" }
    ],
    careerPlan: { targetRole: "Urban Designer", skills: ["AutoCAD", "Revit", "Sustainable Design"], timeline: "Graduate → Architecture firm → Urban planning specialisation" }
  },
  {
    id: "s07", name: "Karan Bose", course: "Finance", year: 2, avatar: "KB",
    dailyCheckins: [
      { date: "2026-03-11", mood: "Focused", intention: "Revise financial modelling formulas", note: "Covered DCF and LBO. Feeling more confident." },
      { date: "2026-03-14", mood: "Motivated", intention: "Apply for summer analyst role", note: "Submitted 3 applications. Fingers crossed." }
    ],
    weeklyReviews: [
      { date: "2026-03-08", rating: 4, progress: "Passed mock interview for finance internship.", energised: "Case study preparation.", friction: "Networking feels awkward.", shift: "Reach out to 1 alumni per week on LinkedIn." }
    ],
    goals: [
      { id: "g1", title: "Land summer analyst internship", deadline: "2026-04-30", status: "in-progress" },
      { id: "g2", title: "Complete CFA Level 1 prep", deadline: "2026-06-01", status: "in-progress" },
      { id: "g3", title: "Build a financial model in Excel", deadline: "2026-03-28", status: "done" }
    ],
    careerPlan: { targetRole: "Investment Analyst", skills: ["Financial Modelling", "Excel", "Valuation"], timeline: "Graduate → Investment bank analyst → Associate by 2029" }
  },
  {
    id: "s08", name: "Divya Pillai", course: "Biotechnology", year: 3, avatar: "DP",
    dailyCheckins: [
      { date: "2026-03-10", mood: "Energised", intention: "Run PCR experiment", note: "Results were clean. Great lab day!" },
      { date: "2026-03-13", mood: "Focused", intention: "Write up experiment results", note: "Draft submitted to lab supervisor." }
    ],
    weeklyReviews: [
      { date: "2026-03-08", rating: 4, progress: "Completed 2 successful lab experiments.", energised: "Lab work and hands-on research.", friction: "Report writing takes twice as long as expected.", shift: "Outline reports before starting — saves time." }
    ],
    goals: [
      { id: "g1", title: "Publish a research paper", deadline: "2026-08-01", status: "in-progress" },
      { id: "g2", title: "Apply for research fellowship", deadline: "2026-04-15", status: "in-progress" },
      { id: "g3", title: "Complete bioinformatics course", deadline: "2026-04-01", status: "done" }
    ],
    careerPlan: { targetRole: "Research Scientist", skills: ["PCR", "Bioinformatics", "Cell Culture"], timeline: "Graduate → PhD → Post-doc → Research Scientist by 2032" }
  },
  {
    id: "s09", name: "Vikram Desai", course: "Law", year: 1, avatar: "VD",
    dailyCheckins: [
      { date: "2026-03-11", mood: "Anxious", intention: "Read 3 case studies for constitutional law", note: "Managed 2. Need to pick up pace." },
      { date: "2026-03-13", mood: "Focused", intention: "Write moot court argument outline", note: "Solid first draft. Mentor gave good feedback." }
    ],
    weeklyReviews: [
      { date: "2026-03-08", rating: 3, progress: "Completed all assigned readings for the week.", energised: "Moot court preparation.", friction: "Volume of reading is overwhelming.", shift: "Use the IRAC method for faster case analysis." }
    ],
    goals: [
      { id: "g1", title: "Win a moot court round", deadline: "2026-05-10", status: "in-progress" },
      { id: "g2", title: "Read 10 landmark judgements", deadline: "2026-04-30", status: "in-progress" }
    ],
    careerPlan: { targetRole: "Corporate Lawyer", skills: ["Contract Law", "Negotiation", "Legal Research"], timeline: "Graduate → Pupillage → Junior counsel → Partner by 2035" }
  },
  {
    id: "s10", name: "Ananya Singh", course: "Design & Communication", year: 4, avatar: "AN",
    dailyCheckins: [
      { date: "2026-03-10", mood: "Motivated", intention: "Finalise brand identity for thesis project", note: "Client loved the new direction. Very happy!" },
      { date: "2026-03-12", mood: "Energised", intention: "Create motion reel for portfolio", note: "Reel is looking great. Almost done." },
      { date: "2026-03-14", mood: "Focused", intention: "Write thesis reflection chapter", note: "2 pages done. Submitted draft." }
    ],
    weeklyReviews: [
      { date: "2026-03-08", rating: 5, progress: "Thesis project approved by committee.", energised: "Creating and designing. In the zone.", friction: "Writing academic text feels unnatural.", shift: "Record voice notes of ideas first, then write." }
    ],
    goals: [
      { id: "g1", title: "Graduate with distinction", deadline: "2026-06-15", status: "in-progress" },
      { id: "g2", title: "Get hired at a design studio", deadline: "2026-07-01", status: "in-progress" },
      { id: "g3", title: "Launch personal portfolio site", deadline: "2026-03-31", status: "done" },
      { id: "g4", title: "Complete motion design certification", deadline: "2026-04-10", status: "done" }
    ],
    careerPlan: { targetRole: "Creative Director", skills: ["Branding", "Motion Design", "Figma", "Storytelling"], timeline: "Graduate → Junior designer → Senior → Creative Director by 2031" }
  }
];
