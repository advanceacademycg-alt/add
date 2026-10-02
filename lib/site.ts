// ===== EDIT ALL CONTENT HERE =====
export const site = {
  name: "Advance Academy", city: "Ambikapur", cityHi: "अंबिकापुर", region: "Chhattisgarh",
  tagline: "Right Coaching Makes The Difference",
  phone: "6261051722", whatsapp: "916261051722", // country code + number, no "+"
  waMessage: "Hello Advance Academy, I want to enquire about admission.",
  address: ["In Front of JAYEKA RESTRA", "Gandhinagar", "Ambikapur (C.G.)"],
  url: "https://advanceacademy.example", // change after deploy
  logo: "/images/logo.png",
  offer: "", // e.g. "Admissions open — limited seats" (shown in footer strip if not empty)
  nav: [["Home","#home"],["Courses","#courses"],["Results","#results"],["Faculty","#faculty"],["About","#about"],["Contact","#contact"]] as [string,string][],
  hero: ["EVERY DOCTOR\nSTARTS AS A STUDENT.","YOUR JOURNEY\nSTARTS HERE.","FROM ASPIRATION\nTO ACHIEVEMENT."],
  heroSub: "Right guidance. Consistent practice. A clear path to your dream.",
  // scroll maps across these in order; last one is the doctor
  frames: ["student-01","student-02","student-03","student-04","doctor"].map(f=>`/images/transformation/${f}.webp`),
};
// Replace "—" with real verified numbers. Only "10+" was provided.
export const stats = [
  {value:"10+",label:"Years of excellence"},{value:"—",label:"Students guided"},
  {value:"—",label:"Selections"},{value:"—",label:"Top rankers"},
];
export const courses = [
  {title:"NEET",tagline:"From First Concept to Medical College"},
  {title:"IIT / JEE",tagline:"Build the Foundation for Engineering"},
  {title:"Foundation",tagline:"Start Strong. Grow Stronger."},
  {title:"Pre B.Sc Nursing",tagline:"Build Your Path in Healthcare"},
  {title:"PAT / Agriculture",tagline:"Focused Agriculture Entrance Preparation"},
];
export const results = [ // photo: file in /public/images/results/ or ""
  {name:"Praveen Gupta",exam:"NEET 2026",score:"616/720",rank:"",year:"2026",photo:""},
  {name:"Rohit Kumar",exam:"NEET 2026",score:"546/720",rank:"",year:"2026",photo:""},
];
export const milestones = [ // fill with real history
  {year:"[Year]",title:"[Academy begins]"},{year:"[Year]",title:"[Milestone]"},
  {year:"[Year]",title:"[Milestone]"},{year:"2026",title:"NEET 2026 results"},
];
export const why = [
  ["Experienced Faculty","Teachers who know the exam and the student."],["Regular Test Series","Practice under real exam conditions."],
  ["Personal Mentorship","Someone who knows your progress by name."],["Doubt Support","Questions answered before they pile up."],
  ["Performance Analysis","Every test shows what to fix next."],["Structured Preparation","A clear plan from day one to exam day."],
  ["Competitive Environment","Ambitious peers who push each other."],["Result-Oriented Guidance","Every decision aimed at selection."],
];
export const faculty = [
  {name:"[Faculty name]",subject:"[Subject]",experience:"[X years]",bio:"[Short description]",photo:""},
  {name:"[Faculty name]",subject:"[Subject]",experience:"[X years]",bio:"[Short description]",photo:""},
  {name:"[Faculty name]",subject:"[Subject]",experience:"[X years]",bio:"[Short description]",photo:""},
];
export const testimonials = [
  {quote:"[Add a real student quote here]",name:"[Student name]",course:"[Course]",year:"[Year]",photo:""},
  {quote:"[Add a real student quote here]",name:"[Student name]",course:"[Course]",year:"[Year]",photo:""},
];
export const campus = ["Classrooms","Students studying","Teachers teaching","Test sessions","Doubt solving","Discussion","Mentorship"]
  .map(l=>({label:l,photo:`/images/campus/${l.toLowerCase().replace(/ /g,"-")}.webp`}));
export const waLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.waMessage)}`;
