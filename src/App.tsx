import { useEffect, useState } from "react";
import { BookOpen, Github, Linkedin, Mail, Youtube } from "lucide-react";

type Section = "about" | "education" | "experience" | "skills" | "projects" | "volunteering" | "writing" | "contact";

const menu: { id: Section; label: string; icon: string }[] = [
  { id: "about", label: "ABOUT", icon: "♥" },
  { id: "education", label: "EDUCATION", icon: "⌘" },
  { id: "experience", label: "EXPERIENCE", icon: "⚑" },
  { id: "skills", label: "SKILLS", icon: "✦" },
  { id: "projects", label: "PROJECTS", icon: "▣" },
  { id: "volunteering", label: "VOLUNTEERING", icon: "★" },
  { id: "writing", label: "WRITING", icon: "✎" },
  { id: "contact", label: "CONTACT", icon: "✉" },
];

const skills = [
  "AI Research / ML / DL / RL", "Python & Data", "TensorFlow", "PyTorch", "Scikit-learn", "Git / GitHub", "SQL & PL/SQL", "Linux (I use CachyOS)",
];
const supportingSkills = [
  "React & TypeScript", "FastAPI", "Docker", "Vercel", "Supabase", "Streamlit", "CLI coding agents", "Data visualization", "NLP", "Computer vision", "Agile collaboration",
];
const volunteerPhotos = ["4c.jpeg", "ai night challenge.jpeg", "ai session1.jpeg", "ai session4.jpeg", "ai session6.jpeg", "arsii1.jpeg", "arsii2.jpeg", "atast1.jpeg", "aws eniso.jpeg", "coding moon.jpeg", "copilot summit.jpeg", "graduation.jpeg", "health hack1.jpeg", "health hack2.jpeg", "hr.jpeg", "jipo23.jpeg", "meetup pro1.jpeg", "mic day.jpeg", "mic-day.jpeg", "nateg.jpeg", "prez.jpeg", "session2.jpeg", "tdd1.jpeg", "tdd4.jpeg", "tdd5.jpeg", "tdd6.jpeg", "tdd8.jpeg", "the maze 24.jpeg", "the maze 255.jpeg", "the maze25.jpeg", "uvt hack.jpeg"];

function Window({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return <div className="pixel-overlay" role="dialog" aria-modal="true" aria-label={title} onMouseDown={onClose}>
    <section className="pixel-window" onMouseDown={(event) => event.stopPropagation()}>
      <header className="window-titlebar"><span>◆ {title}.EXE</span><button onClick={onClose} aria-label="Close window">×</button></header>
      <div className="window-content">{children}</div>
      <footer className="window-footer"><span>PRESS ESC TO CLOSE</span><button onClick={onClose}>CLOSE</button></footer>
    </section>
  </div>;
}

function ModalContent({ section }: { section: Section }) {
  if (section === "about") return <>
    <p className="eyebrow">PLAYER PROFILE / LVL 25</p><h2>HEY, I’M SALWA!</h2>
    <p>I’m a software engineer who loves turning curious ideas into thoughtful, useful digital experiences. My favorite quests live at the intersection of AI, data, and people.</p>
    <div className="stat-cards"><div><b>01</b><span>Creative builder</span></div><div><b>02</b><span>AI explorer</span></div><div><b>03</b><span>Problem solver</span></div></div>
    <p className="quote">“Making technology feel a little more human, one level at a time.”</p>
  </>;
  if (section === "skills") return <>
    <p className="eyebrow">INVENTORY / EQUIPPED</p><h2>SKILL TREE</h2>
    <p className="skill-hint">CORE STACK — MY GO-TO TOOLS</p><div className="primary-skills">{skills.map((name, index) => <div key={name}><b>0{index + 1}</b>{name}</div>)}</div>
    <p className="skill-hint">SUPPORTING ABILITIES</p><div className="tag-row">{supportingSkills.map(name => <span key={name}>{name}</span>)}</div>
  </>;
  if (section === "projects") return <>
    <p className="eyebrow">QUEST LOG / ALL MISSIONS</p><h2>PROJECTS & OPEN SOURCE</h2>
    <div className="project-grid">
      <article><span className="project-icon">∞</span><h3>CONNEXTREAM</h3><p>Startup project in progress — building a connected product experience.</p><a href="https://github.com/SalwaMK" target="_blank" rel="noreferrer">EXPLORE ↗</a></article>
      <article><span className="project-icon">↗</span><h3>RISK-AWARE RL PORTFOLIO</h3><p>Risk-aware reinforcement learning for portfolio optimization.</p><a href="https://github.com/SalwaMK/Risk-Aware-RL-Portfolio-Optimization" target="_blank" rel="noreferrer">VIEW REPO ↗</a></article>
      <article><span className="project-icon">⌁</span><h3>MITRE ATLAS</h3><p>Research and tooling aligned with the MITRE ATLAS knowledge base.</p><a href="https://github.com/SalwaMK/MITRE-ATLAS" target="_blank" rel="noreferrer">VIEW REPO ↗</a></article>
      <article><span className="project-icon">◈</span><h3>ORKESTRIX</h3><p>A new project in the SalwaMK open-source archive.</p><a href="https://github.com/SalwaMK/Orkestrix" target="_blank" rel="noreferrer">VIEW REPO ↗</a></article>
      <article><span className="project-icon">◎</span><h3>FOOTBALL PREDICTOR</h3><p>Match outcome predictions with ML and historical data.</p><a href="https://github.com/SalwaMK/FootballPredictionSystem" target="_blank" rel="noreferrer">VIEW REPO ↗</a></article>
      <article><span className="project-icon">♙</span><h3>FOOTBALL RECOMMENDER</h3><p>Personalized player and team recommendations using ML.</p><a href="https://github.com/SalwaMK/FootballRecommendationSystem" target="_blank" rel="noreferrer">VIEW REPO ↗</a></article>
      <article><span className="project-icon">✚</span><h3>LUNG CARE AI</h3><p>CNN-powered medical imaging support for lung disease detection.</p><a href="https://github.com/SalwaMK/LungCareAI" target="_blank" rel="noreferrer">VIEW REPO ↗</a></article>
      <article><span className="project-icon">⌁</span><h3>RESUME RECOMMENDER</h3><p>NLP-driven matching for résumés and roles.</p><a href="https://github.com/SalwaMK/Resume-Rec-System" target="_blank" rel="noreferrer">VIEW REPO ↗</a></article>
      <article><span className="project-icon">☏</span><h3>MULTILINGUAL CHATBOT</h3><p>Interactive conversational AI with NLP and Google APIs.</p><a href="https://github.com/SalwaMK/Chatbot-Multilingual-Interactive" target="_blank" rel="noreferrer">VIEW REPO ↗</a></article>
      <article><span className="project-icon">◒</span><h3>OLIVE CROP MAPPING</h3><p>Satellite imagery and ML for precision agriculture.</p><a href="https://github.com/SalwaMK/Mapping-Olive-Crops" target="_blank" rel="noreferrer">VIEW REPO ↗</a></article>
      <article><span className="project-icon">◉</span><h3>PLASTIC VS JELLYFISH</h3><p>Computer vision for environmental monitoring.</p><a href="https://github.com/SalwaMK/Plastic-vs-Jellyfish-Classficiation" target="_blank" rel="noreferrer">VIEW REPO ↗</a></article>
      <article><span className="project-icon">▰</span><h3>CAR LEASE PLATFORM</h3><p>Full-stack leasing, booking, and fleet management.</p><a href="https://github.com/SalwaMK/Car-Lease" target="_blank" rel="noreferrer">VIEW REPO ↗</a></article>
      <article><span className="project-icon">¤</span><h3>CREDIT RISK AI</h3><p>Creditworthiness classification with financial data.</p><a href="https://github.com/SalwaMK/AI-Night-Challenge" target="_blank" rel="noreferrer">VIEW REPO ↗</a></article>
    </div>
    <div className="collaboration-callout"><b>⌬ OPEN SOURCE COLLABORATIONS</b><p>Want to build something useful together? Explore my public work, open an issue, or start a pull request.</p><p>You can also suggest repositories for us to collaborate on.</p><div className="collab-links"><a href="https://github.com/SalwaMK" target="_blank" rel="noreferrer">MY GITHUB ↗</a><a href="https://github.com/azizamari/euaiact" target="_blank" rel="noreferrer">EUAIACT ↗</a><a href="https://github.com/BabaSanfour/coco-pipe" target="_blank" rel="noreferrer">COCO-PIPE ↗</a></div></div>
  </>;
  if (section === "volunteering") return <>
    <p className="eyebrow">SIDE QUESTS / COMMUNITY XP</p><h2>VOLUNTEERING</h2>
    <div className="timeline"><article><b>2022 — 2025</b><h3>MICROSOFT ISSATSO CLUB</h3><p>President · AI Instructor · Head of HR</p><span>Organized workshops, mentored students, and helped build a welcoming tech community.</span></article><article><b>2024 — NOW</b><h3>TUNISIA DEV DAYS</h3><p>Program Chair</p><span>Planning the first international event around .NET and AI in Tunisia.</span></article><article><b>2023 — 2024</b><h3>MICROSOFT LEARN & MLACT</h3><p>Student Ambassador · Ambassador</p><span>Promoted Microsoft technologies, community learning, and public relations.</span></article></div>
    <div className="photo-gallery">{volunteerPhotos.map((photo) => <img key={photo} src={new URL(`../assets/${photo}`, import.meta.url).href} alt={`Volunteering event: ${photo.replace(/\.[^.]+$/, "")}`} />)}</div>
    <div className="achievement">★ ACHIEVEMENT UNLOCKED: COMMUNITY BUILDER</div>
  </>;
  if (section === "education") return <>
    <p className="eyebrow">PLAYER HISTORY / BADGES</p><h2>EDUCATION</h2>
    <div className="timeline"><article><b>2022 — 2025</b><h3>NATIONAL ENGINEERING DIPLOMA</h3><p>Software Engineering · ISSAT Sousse</p><span>Graduated with Good Honors. Focus: software architecture, AI, and product-focused engineering.</span></article><article><b>2020 — 2022</b><h3>PRE-ENGINEERING PROGRAM</h3><p>Mathematics, Physics & Computer Science</p><span>ISSAT Sousse · Graduated with Good Honors.</span></article></div>
    <div className="tag-row"><span>TensorFlow Developer</span><span>Nvidia DLI</span><span>AWS Academy</span><span>Microsoft Learn</span></div>
  </>;
  if (section === "experience") return <><p className="eyebrow">CAREER LOG / COMPLETED MISSIONS</p><h2>PROFESSIONAL EXPERIENCE</h2><div className="timeline"><article><b>FEB 2026 — NOW</b><h3>CEO & FOUNDER · CONNEXTREAM</h3><p>Startup project</p><span>Leading the vision, strategy, and product development for ConneXtream.</span></article><article><b>MAR — OCT 2025</b><h3>DATA SCIENTIST · IMAXIT</h3><p>Puteaux, France · Remote</p><span>Developed a dashboard, chatbot, prediction, and recommendation systems for football club management.</span></article><article><b>JUL 2024</b><h3>AI INTERN · ASTROLAB GROUP</h3><p>Sousse, Tunisia</p><span>Developed a recommendation system.</span></article><article><b>JUN 2024</b><h3>AI INTERN · BRAIN TRAIN ACADEMY</h3><p>Sousse, Tunisia</p><span>Developed a multilingual, interactive chatbot.</span></article><article><b>JUL — AUG 2023</b><h3>WEB DEVELOPMENT INTERN · LAB-IT</h3><p>Sousse, Tunisia</p><span>Developed a dynamic website using ReactJS, PHP, and MySQL.</span></article></div></>;
  if (section === "writing") return <><p className="eyebrow">KNOWLEDGE DROP / MEDIUM + RESEARCH</p><h2>ARTICLES & PRE-PRINTS</h2><p>Technical notes, practical AI lessons, behind-the-scenes build logs, and pre-publication research.</p><div className="writing-grid"><article><b>✎ MEDIUM ARTICLES</b><span>Insights from AI, data, and software engineering quests.</span><a className="big-link" href="https://medium.com/@salwamk" target="_blank" rel="noreferrer">OPEN MEDIUM ↗</a></article><article><b>≡ PRE-PRINTS</b><span>Published research and experiments.</span><a className="big-link" href="https://www.researchsquare.com/article/rs-9847041/v1" target="_blank" rel="noreferrer">PRE-PRINT 01 ↗</a><a className="big-link" href="https://www.researchsquare.com/article/rs-10250790/v1" target="_blank" rel="noreferrer">PRE-PRINT 02 ↗</a></article></div></>;
  return <>
    <p className="eyebrow">TRANSMISSION CHANNEL / OPEN</p><h2>LET’S CONNECT!</h2><p>Have a video idea or want to discuss tech, AI research, or a project collaboration? Reach out — I’d love to talk. I also post videos about AI, software engineering, and my build journey on YouTube.</p>
    <div className="contact-options"><a href="mailto:salwamekni8@gmail.com"><Mail aria-hidden="true" /> salwamekni8@gmail.com</a><a href="https://linkedin.com/in/salwa-makni" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> /in/salwa-makni</a><a href="https://github.com/SalwaMK" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> @SalwaMK</a><a href="https://medium.com/@salwamk" target="_blank" rel="noreferrer"><BookOpen aria-hidden="true" /> @salwamk</a><a href="https://www.youtube.com/@salwa_mekni" target="_blank" rel="noreferrer"><Youtube aria-hidden="true" /> @salwa_mekni</a></div>
    <p className="location">⌖ BASED IN SOUSSE, TUNISIA</p>
  </>;
}

export default function App() {
  const [open, setOpen] = useState<Section | null>(null);
  useEffect(() => { const close = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null); window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  return <main className="game-shell">
    <div className="pixel-sky" />
    <header className="game-topbar"><span className="brand">SALWA<span>_QUEST</span></span><span className="top-status">PLAYER 01 <i /> ONLINE</span></header>
    <div className="game-scene">
      <div className="hero-copy"><p className="eyebrow">WELCOME TO MY DIGITAL WORLD!</p><h1>CODE.<br /><em>CREATE.</em><br />CONQUER.</h1><p className="intro">Software engineer crafting intelligent experiences with AI, data, and a lot of curiosity.</p><a className="press-start" href={new URL("../assets/Salwa_Makni_CV.pdf", import.meta.url).href} download>↓ DOWNLOAD CV</a></div>
      <div className="player-zone"><div className="pixel-spark spark-one">✦</div><div className="pixel-spark spark-two">+</div><div className="avatar-frame"><img src={new URL("../assets/salwa1.jpg", import.meta.url).href} alt="Salwa Mekni" /><span className="avatar-label">SALWA<br />LVL 25</span></div><div className="ground"><i /><i /><i /><i /><i /></div></div>
    </div>
    <nav className="quest-menu" aria-label="Portfolio sections"><span className="menu-title">QUEST<br />MENU</span>{menu.map((item, index) => <button key={item.id} className={`quest-btn q${index + 1}`} onClick={() => setOpen(item.id)}><b>{item.icon}</b><span>{item.label}</span><i>›</i></button>)}</nav>
    <footer className="game-footer"><span>© 2026 SALWA MEKNI</span><a href={new URL("../assets/Salwa_Makni_CV.pdf", import.meta.url).href} download>↓ DOWNLOAD CV</a><span>INSERT COIN TO CONNECT</span></footer>
    {open && <Window title={menu.find(item => item.id === open)!.label} onClose={() => setOpen(null)}><ModalContent section={open} /></Window>}
  </main>;
}
