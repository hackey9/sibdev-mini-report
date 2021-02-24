import BackLink from "components/BackLink"
import Button from "components/Button"
import Headline from "components/Headline"
import Layout from "components/Layout"
import Textarea from "components/Textarea"
import phrases from "data/phrases"
import useCycle from "hooks/useCycle"
import React, {FC, useCallback, useMemo, useState} from "react"
import {shuffleArray} from "utils/rand"


const App: FC = () => {

  const shuffledPhrases = useMemo(() => shuffleArray(phrases), [])
  const [phrase, nextPhrase] = useCycle(shuffledPhrases)

  const [isPageResult, setIsPageResult] = useState(false)

  const [text, setText] = useState("")

  const handleSend = useCallback(() => {
    nextPhrase()
    setIsPageResult(true)
  }, [nextPhrase])

  const handleBack = useCallback(() => {
    setText("")
    setIsPageResult(false)
  }, [])

  return (
    <Layout>
      {!isPageResult ? <>
        <Headline name={"Зайка,"} children={"изложи свою проблему"}/>
        <Textarea value={text} onChange={setText} autofocus/>
        <Button onClick={handleSend} />
      </> : <>
        <Headline children={phrase}/>
        <BackLink onClick={handleBack}/>
      </>}
    </Layout>
  )
}
export default App
