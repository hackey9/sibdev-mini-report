import React, {FC} from "react"
import css from "./Header.module.css"



const Header: FC = () => {

  return (
    <div className={css.block}>
      {"Создано "}
      <Link url={"https://vk.com/ungs_music"}>Ungs</Link>
      {" с любовью и заботой"}
    </div>
  )
}
export default Header


const Link: FC<{ url: string }> = ({children, url}) => <a href={url} target="_blank" rel="noreferrer" className={css.link}>{children}</a>
