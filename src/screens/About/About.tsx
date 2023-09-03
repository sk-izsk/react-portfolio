import styled from "styled-components"
import { IZSK } from "../../components"
import styles from "./About.module.css"

const About: IZSK.FC = () => (
  <StyledDiv>
    <h3 className={styles.about}>
      👋 Hello, I'm Shaikh Zeeshan Murshed 🚀 I'm not your ordinary developer;
      I'm a creator, an innovator, and a problem-solver in the world of web
      development. With a passion for crafting digital experiences that
      captivate and a vision for pushing the boundaries of what's possible, I've
      spent [X years] honing my skills in frontend development, transforming
      lines of code into visual wonders. 🎨 Design Whisperer: I don't just code;
      I craft. Collaborating closely with design teams, I turn creative visions
      into pixel-perfect reality. The user interface is my canvas, and I wield
      technologies like React, TypeScript, Styled Components, and more to
      breathe life into designs. 🛠️ Tech Alchemist: My toolkit is vast and
      ever-evolving. I've mastered the art of frontend technologies, from React
      to Redux, from Ant Design to React Query. Complex problems are my
      playground, and I thrive on creating elegant solutions. 🤝 Team Player:
      Collaboration is key, and I've been the conductor of symphonies that blend
      the skills of designers, backend developers, and fellow frontend
      enthusiasts. Together, we've orchestrated seamless, intuitive, and
      scalable applications. 🌟 Mentorship: I believe in nurturing talent.
      Guiding junior developers is not just a responsibility; it's a privilege.
      I've mentored, shared knowledge, and helped others grow in their careers.
      🌐 Global Thinker: Code knows no borders. I've worked with international
      teams, bringing diverse perspectives to the table. My code speaks a
      universal language, connecting people and ideas. 📚 Lifelong Learner: The
      tech world never stands still, and neither do I. I'm a constant learner,
      always seeking the latest trends and innovations to keep my projects at
      the cutting edge. 📦 NPM Wizard: Managing private NPM libraries is my
      secret sauce for efficient development. I've maintained reusable
      components, turning code into valuable assets. 🌌 Creating the Future: I'm
      not just coding for today; I'm architecting for tomorrow. I'm excited
      about the endless possibilities of technology and its role in shaping our
      world. 🚀 Let's Build Together: Ready to embark on a digital journey?
      Let's collaborate and create something extraordinary. Connect with me, and
      let's turn ideas into reality.
    </h3>
  </StyledDiv>
)

const StyledDiv = styled.div`
  max-width: 200px;
  /* width: 100%; */
`

export default About
