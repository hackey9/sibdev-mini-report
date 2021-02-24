import {useCallback, useState} from "react"


export default function useCycle(items: string[]): [string, () => void] {
  const length = items.length

  const [index, setIndex] = useState(0)

  const next = useCallback(() => void setIndex(i => i + 1), [])

  return [
    items[index % length],
    next,
  ]
}
