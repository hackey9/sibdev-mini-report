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
  //const [input, setInput] = useState<HTMLTextAreaElement>()


  useEffect(() => {
    autofocus && ref.current?.focus()
  }, [autofocus])

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
