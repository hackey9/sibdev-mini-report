import React, {FC, PropsWithChildren} from "react"
import css from "./BackLink.module.css"


export type BackLinkProps = PropsWithChildren<{
  onClick: () => void
}>

const BackLink: FC<BackLinkProps> = ({onClick}) => {

  return (
    <div className={css.back} onClick={onClick}>
      <div className={css.icon}/>
      <div className={css.text}>Ещё пожаловаться</div>
    </div>
  )
}
export default BackLink
