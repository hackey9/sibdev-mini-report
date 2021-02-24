import React, {FC, PropsWithChildren} from "react"
import css from "./Button.module.css"


export type ButtonProps = PropsWithChildren<{
  onClick?: () => void
}>

const Button: FC<ButtonProps> = ({children, onClick}) => {

  return (
    <button className={css.button} onClick={onClick}>
      Пожаловаться
    </button>
  )
}
export default Button
