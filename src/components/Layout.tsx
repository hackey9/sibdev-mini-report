import React, {FC} from "react"
import css from "./Layout.module.css"


const Layout: FC = ({children}) => {

  return (
    <div className={css.layout}>
      {children}
    </div>
  )
}
export default Layout
