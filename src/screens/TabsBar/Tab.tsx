import { Link, useLocation } from "react-router-dom"
import { IZSK } from "../../components"
import styles from "./TabsBar.module.css"

interface Props {
  icon: JSX.Element
  filename: string
  path: string
}

export const Tab: IZSK.FC<Props> = ({ icon, filename, path }) => {
  const location = useLocation()

  return (
    <Link to={path}>
      <div
        className={`${styles.tab} ${
          location.pathname === path && styles.active
        }`}
      >
        {icon}
        <p>{filename}</p>
      </div>
    </Link>
  )
}
