import React, {ChangeEventHandler, FC, PropsWithChildren, useCallback, useEffect, useRef} from "react"
import TextareaAutosize from "react-textarea-autosize"
import css from "./Textarea.module.css"


export type TextareaProps = PropsWithChildren<{
  value: string
  onChange: (value: string) => void
  autofocus?: boolean
}>

const Textarea: FC<TextareaProps> = ({value, onChange, autofocus}) => {

  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const node = ref.current
    if (node && autofocus) {
      node.setAttribute("autofocus", "autofocus")
      node.focus()
      node.click()
    }
  }, [autofocus])

  useEffect(() => {
    function focus() {
      const node = ref.current

      if (node && autofocus) {
        node.focus()
        node.click()
      }
    }

    document.addEventListener("click", focus)

    return () => document.removeEventListener("click", focus)
  }, [])

  const handleChange: ChangeEventHandler<HTMLTextAreaElement>
    = useCallback(e => void onChange(e.target.value), [onChange])

  return (
    <div className={css.textarea}>
      <TextareaAutosize
        width={"100%"}
        className={css.input}
        // @ts-ignore
        ref={ref}
        value={value}
        onChange={handleChange}
        autoFocus
      />
    </div>
  )
}
export default Textarea
