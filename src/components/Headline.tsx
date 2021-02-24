import React, {FC, PropsWithChildren} from "react"
import css from "./Headline.module.css"


export type HeadlineProps = PropsWithChildren<{
  name?: string
  children?: string
}>

const Headline: FC<HeadlineProps> = ({children, name}) => {

  const hasName = name && name.length > 0

  return (
    <div className={css.headline}>
      {hasName && <div className={css.name}>{name}</div>}
      <div className={css.text}>{children}</div>
    </div>
  )
}
export default Headline
