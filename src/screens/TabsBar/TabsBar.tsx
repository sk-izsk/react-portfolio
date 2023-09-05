import { explorerItems } from "../../components"
import { Tab } from "./Tab"
import styles from "./TabsBar.module.css"

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      {explorerItems.map((item) => (
        <Tab
          key={item.name}
          icon={item.icon}
          filename={item.name}
          path={item.path}
        />
      ))}
    </div>
  )
}

export default Tabsbar
