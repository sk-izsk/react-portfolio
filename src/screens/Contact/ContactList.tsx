import styled from "styled-components"
import styles from "./ContactList.module.css"

export const contactItems = [
  {
    social: "website",
    link: "nitinranganath.me",
    href: "https://nitinranganath.me",
  },
  {
    social: "email",
    link: "nitinranganath@gmail.com",
    href: "mailto:nitinranganath@gmail.com",
  },
  {
    social: "github",
    link: "itsnitinr",
    href: "https://github.com/itsnitinr",
  },
  {
    social: "linkedin",
    link: "nitinranganath",
    href: "https://www.linkedin.com/in/nitinranganath/",
  },
  {
    social: "twitter",
    link: "iamnitinr",
    href: "https://www.twitter.com/iamnitinr",
  },
  {
    social: "instagram",
    link: "iamnitinr",
    href: "https://www.instagram.com/iamnitinr",
  },
  {
    social: "polywork",
    link: "nitinranganath",
    href: "https://www.polywork.com/nitinranganath",
  },
  {
    social: "telegram",
    link: "iamnitinr",
    href: "https://t.me/iamnitinr",
  },
  {
    social: "codepen",
    link: "nitinranganath",
    href: "https://codepen.io/itsnitinr",
  },
  {
    social: "codesandbox",
    link: "itsnitinr",
    href: "https://codesandbox.io/u/itsnitinr",
  },
]

export const ContactList = () => {
  return (
    <div className={styles.code}>
      <span className={styles.className}>.socials </span> &#123;
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
