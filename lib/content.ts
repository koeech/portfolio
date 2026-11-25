import { Shield, Search, Code2, Network, Cpu, Brain, FileText, Users, GitBranch, Terminal, Box, Radar, Bug, HardDrive, FileCode2, TerminalSquare, NotebookPen, PenTool, LayoutDashboard, FolderLock, Activity, FileCheck2, KeyRound, Newspaper } from "lucide-react";
export const nav = [
  { id: "home", label: "Home" }, { id: "about", label: "About" }, { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" }, { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" }, { id: "insights", label: "Insights" }, { id: "contact", label: "Contact" },
];
export const me = {
  name: "ANTHONY KIPKOECH", title: "Computer Security & Forensics Student",
  email: "anthonykoec332@gmail.com", github: "https://github.com/koeech", linkedin: "https://www.linkedin.com/in/anthony-kipkoech-42970b39b/", phone: "+254 791387787",
};
export const highlights = [
  ["01", "Security mindset", "I look at every system the way an attacker would, then build the way a defender must."],
  ["02", "Forensics focus", "Evidence is only as strong as its handling. I document every step."],
  ["03", "Problem solver", "Calm, methodical, and curious when things break."],
  ["04", "Practical builder", "I turn what I study into tools people can actually use."],
];
export const metrics = [["12+", "Projects built"], ["25+", "Skills learned"], ["40+", "Security topics explored"], ["30+", "Tools used"]];
export const skills = [
  { i: Shield, t: "Cybersecurity fundamentals", d: "Threat models, CIA triad, access control, and basic web security concepts.", c: ["Secure coding basics", "Web security", "Risk thinking"] },
  { i: Search, t: "Digital forensics", d: "Acquiring, preserving and analysing evidence with a clear chain of custody.", c: ["Evidence handling", "Disk analysis", "Log analysis"] },
  { i: Code2, t: "Programming", d: "Readable code that automates boring work and tests ideas quickly.", c: ["Python", "JavaScript", "HTML/CSS"] },
  { i: Network, t: "Networking", d: "How traffic moves, what normal looks like, and where it goes wrong.", c: ["TCP/IP", "DNS & HTTP", "Packet capture"] },
  { i: Cpu, t: "Systems and OS", d: "Comfortable on Linux and Windows, and in virtual labs I can safely break.", c: ["Linux", "Windows admin", "Virtualization"] },
  { i: Brain, t: "Problem solving", d: "Incident response fundamentals: triage, contain, investigate, learn.", c: ["Triage", "Root cause", "Hypothesis testing"] },
  { i: FileText, t: "Research and documentation", d: "Clear technical writing that someone else can reproduce.", c: ["Technical writing", "Git & GitHub", "Lab notes"] },
  { i: Users, t: "Communication and teamwork", d: "Explaining risk plainly to people who are not technical.", c: ["Presenting", "Peer review", "Awareness training"] },
];
export const tools = [
  { i: Code2, n: "VS Code", u: "Daily editor" }, { i: GitBranch, n: "GitHub", u: "Version control" },
  { i: Terminal, n: "Kali Linux", u: "Lab testing" }, { i: Box, n: "VirtualBox", u: "Isolated labs" },
  { i: Radar, n: "Wireshark", u: "Traffic analysis" }, { i: Bug, n: "Burp Suite", u: "Web testing" },
  { i: HardDrive, n: "Autopsy", u: "Disk forensics" }, { i: FileCode2, n: "Python", u: "Automation" },
  { i: TerminalSquare, n: "PowerShell", u: "Windows admin" }, { i: NotebookPen, n: "Obsidian", u: "Study notes" },
  { i: PenTool, n: "Figma", u: "Interface design" }, { i: Shield, n: "Nmap", u: "Network discovery" },
];
export const projects = [
  { i: LayoutDashboard, t: "Security Awareness Dashboard", y: "Web app", d: "Turns phishing and password-hygiene quiz data into clear trends for a student community.", s: ["Next.js", "TypeScript", "Charts"], o: "Makes it easy to see which topics people struggle with." },
  { i: FolderLock, t: "Digital Forensics Case Tracker", y: "Case management", d: "Logs evidence items, hashes and handlers with a tamper-evident chain of custody.", s: ["Python", "SQLite", "SHA-256"], o: "Every transfer of evidence is recorded and verifiable." },
  { i: Activity, t: "Network Monitoring Dashboard", y: "Lab tool", d: "Visualises captured traffic and flags unusual ports and DNS patterns in a home lab.", s: ["Python", "Wireshark", "Linux"], o: "Cut manual packet review time during lab exercises." },
  { i: FileCheck2, t: "Incident Report Generator", y: "Automation", d: "Guides responders through a structured form and exports a clean timeline report.", s: ["TypeScript", "PDF export"], o: "Consistent reports, written in minutes." },
  { i: KeyRound, t: "Password Strength Coach", y: "Education tool", d: "Explains why a password is weak in plain language, entirely in the browser.", s: ["JavaScript", "Web Crypto"], o: "Nothing is stored or sent anywhere." },
  { i: Newspaper, t: "Threat Intelligence Notes", y: "Knowledge base", d: "A tagged notebook linking indicators, tactics and sources from my reading.", s: ["Obsidian", "Markdown"], o: "A searchable second brain for threat research." },
];
export const journey = [
  ["Learning foundational programming", "Started with Python and web basics, and learned to read other people's code."],
  ["Exploring cybersecurity concepts", "Studied how attacks work so I could understand how to stop them."],
  ["Practising Linux and networking", "Built home labs, captured traffic and learned what normal looks like."],
  ["Studying digital forensics", "Learned acquisition, hashing, timelines and disciplined evidence handling."],
  ["Building real projects", "Shipped tools that solve real student and small-team problems."],
  ["Preparing for professional work", "Working toward internships, certifications and a career in security."],
];
export const certs = [
  { t: "Certifications", s: "In progress", items: ["CompTIA Security+ (target)", "Add your next certification here"] },
  { t: "Courses completed", s: "Ongoing", items: ["Introduction to Cybersecurity", "Networking fundamentals"] },
  { t: "Workshops", s: "Open", items: ["Security awareness sessions", "Add a workshop you attended"] },
  { t: "Labs and competitions", s: "Active", items: ["Capture-the-flag practice", "Home lab exercises"] },
  { t: "Academic achievements", s: "Open", items: ["Coursework highlights", "Add awards or dean's list"] },
  { t: "Portfolio milestones", s: "Growing", items: ["First public repository", "Portfolio launched"] },
];
export const process = [
  ["Observe", "I watch how a system behaves before touching it, so I know what normal looks like."],
  ["Research", "I read documentation, advisories and write-ups to learn what is already known."],
  ["Analyse", "I form hypotheses and test them against logs, traffic and evidence."],
  ["Build", "I write the smallest secure solution that solves the problem."],
  ["Test", "I try to break my own work before anyone else does."],
  ["Improve", "I document what I learned and make the next version better."],
];
export const quotes = [
  ["Anthony asks the questions that make a whole class think harder. His lab write-ups are unusually clear.", "Lecturer"],
  ["Calm under pressure and very organised. He kept our evidence log tidy when deadlines got tight.", "Project teammate"],
  ["He learns fast and, more importantly, explains what he learned. A rare habit in a student.", "Mentor"],
  ["Always willing to walk you through a tool until it clicks. Great person to study with.", "Peer"],
];
export const posts = [
  ["Cybersecurity lessons", "What breaking my own lab taught me about defaults", "6 min read"],
  ["Forensics insights", "Why chain of custody matters more than the tool", "5 min read"],
  ["Tools I am exploring", "A beginner's workflow for Wireshark captures", "8 min read"],
  ["Security awareness", "Five habits that stop most phishing attempts", "4 min read"],
];
