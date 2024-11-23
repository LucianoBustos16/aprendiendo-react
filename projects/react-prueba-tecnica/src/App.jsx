import { useEffect, useState } from "react"
import './App.css'
import { getRamdomsFacts } from "./services/facts"

    const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

export function App() {

    const [fact, setFact] = useState()
    const [imageUrl, setImageURL] = useState()


    useEffect(() => {
        getRamdomsFacts().then(newFact => setFact(newFact))
    }, [])

    useEffect(() => {
        if (!fact) return
        const firstWord = fact.split(' ', 3).join(' ')
                console.log(firstWord)

                fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=64&fontColor=white`)
                .then( response => {
                    const { url } = response
                    setImageURL(url)}
                )
    }, [fact])

    const handleClick = async () => {
       const newFact = await getRamdomsFacts()
       setFact(newFact)
    }

    return (
        <main>
            <h1>App de gatitos</h1>

            <button onClick={handleClick}>Get new fact</button>

            <section>
            {fact && <p>{fact}</p>}
            {imageUrl &&
                <img src={`${imageUrl}`} alt={`La imagen con el fact ${fact}`} /> }
            </section>

        </main>
    )
}