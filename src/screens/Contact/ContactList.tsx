import styled from "styled-components"
import styles from "./ContactList.module.css"

export const contactItems = [
  {
    social: "website",
    link: "izsk.netlify.app",
    href: "https://izsk.netlify.app",
  },
  {
    social: "email",
    link: "sk.zeeshan1992@gmail.com",
    href: "mailto:sk.zeeshan1992@gmail.com",
  },
  {
    social: "github",
    link: "sk-izsk",
    href: "https://github.com/sk-izsk",
  },
  {
    social: "linkedin",
    link: "skizsk",
    href: "https://www.linkedin.com/in/skizsk/",
  },
  {
    social: "twitter",
    link: "@Sk_iZsk",
    href: "https://www.twitter.com/sk_izsk",
  },
  {
    social: "instagram",
    link: "sk_izsk",
    href: "https://www.instagram.com/sk_izsk/",
  },
  {
    social: "telegram",
    link: "sk_izsk",
    href: "https://t.me/sk_izsk",
  },
]

export const ContactList = () => {
  return (
    <div className={styles.code}>
      <span className={styles.className}>.socials </span>
      <StyledSpan>&#123;</StyledSpan>
      {contactItems.slice(0, 8).map((item, index) => (
        <StyledLine className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
          ;
        </StyledLine>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <StyledLine className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
          ;
        </StyledLine>
      ))}
      <StyledLine className={styles.line}>&#125;</StyledLine>
    </div>
  )
}

const StyledLine = styled.div`
  color: var(--text-color);
`
const StyledSpan = styled.span`
  color: var(--text-color);
  margin-left: 0.5rem;
`
