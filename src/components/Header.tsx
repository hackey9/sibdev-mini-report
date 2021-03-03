import React, {FC} from "react"
import css from "./Header.module.css"



const Header: FC = () => {

  const url = "https://vk.com/ungs_music"

  return (
    <a className={css.block} href={url} target="_blank" rel="noreferrer" >
      {"Создано "}
      <Link>Ungs</Link>
      {" с любовью и заботой"}
    </a>
  )
}
export default Header


const Link: FC = ({children}) => <span className={css.link}>{children}</span>
