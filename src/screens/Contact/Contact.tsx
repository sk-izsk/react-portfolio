import { useTitle } from "ahooks"
import { useState } from "react"
import styled from "styled-components"
import styles from "./Contact.module.css"
import { ContactList } from "./ContactList"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  useTitle("Contact")

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: "POST",
      body: JSON.stringify({ name, email, subject, message }),
    })
    if (res.ok) {
      alert("Your response has been received!")
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } else {
      alert("There was an error. Please try again in a while.")
    }
  }

  return (
    <div className={styles.container}>
      <StyledDiv>
        <StyledHeading className={styles.heading}>
          Reach Out Via Socials
        </StyledHeading>
        <ContactList />
      </StyledDiv>
      <StyledForm>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <StyledEmail>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </StyledEmail>
          </div>
          <div>
            <label htmlFor="name">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </StyledForm>
    </div>
  )
}

const StyledHeading = styled.h3`
  color: var(--text-color);
`

const StyledDiv = styled.div`
  padding-left: 1.5rem;
`

const StyledForm = styled.div`
  padding-right: 3rem;
`

const StyledEmail = styled.div`
  padding-left: 1.5rem;
`

export default Contact
