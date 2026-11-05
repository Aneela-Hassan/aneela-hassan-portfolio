// EDIT the text below: name, projects, skills, email, links.
const profile = {
  name: 'Aneela Hassan',
  role: 'Computer Applications Student',
  tagline:
    'I like understanding how things work from first principles: compilers, operating systems, databases and AI.',
  
  github_repo: 'https://aneela-hassan-portfolio.vercel.app',
  linkedin: 'https://www.linkedin.com/in/aneela-hassan-4499202a4/',
}

const projects = [
  {
    title: 'Personal Health Record System',
    text: 'A patient-owned health record app where users control their own medical data.',
    tech: 'Flask, MongoDB',
  },
  {
    title: 'Industry Analytics',
    text: 'A group project that analyses industry data and presents the findings clearly.',
    tech: 'Python, Data Analysis',
  },
  {
    title: 'Job Analytics',
    text: 'Explores job market data to find which skills are in demand.',
    tech: 'Python, Pandas',
  },
]

const skills = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Compiler Construction',
  'Databases',
  'Python',
  'React',
  'Git & GitHub',
]

export default function App() {
  return (
    <>
      <header className="header">
        <span className="logo">{profile.name}</span>
        <nav aria-label="Main navigation">
          <ul className="nav">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about" className="hero">
          <img src="/avatar.svg" alt={`Avatar with initials of ${profile.name}`} className="avatar" />
          <h1>Hi, I'm {profile.name}</h1>
          <h2>{profile.role}</h2>
          <p>{profile.tagline}</p>
          <a href="#contact" className="btn">Get in touch</a>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <article key={p.title} className="card">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <span className="tag">{p.tech}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section alt">
          <h2>Skills</h2>
          <ul className="skills">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>Want to work together or just say hi?</p>
          <p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <p>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            {' · '}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React and deployed on Vercel.</p>
      </footer>
    </>
  )
}
