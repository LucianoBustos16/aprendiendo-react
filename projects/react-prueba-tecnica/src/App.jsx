import { useEffect, useState } from "react"
import './App.css'

    const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

export function App() {

    const [fact, setFact] = useState()
    const [imageUrl, setImageURL] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)                
            })
    }, [])

    useEffect(() => {
        if (!fact) return
        const firstWord = fact.split(' ', 3).join(' ')
                console.log(firstWord)

                fetch(`https://cataas.com/cat/says/${firstWord}`)
                .then( response => {
                    const { url } = response
                    setImageURL(url)}
                )
    }, [fact])

    return (
        <main>
            <h1>App de gatitos</h1>
            <section>
            {fact && <p>{fact}</p>}
            {imageUrl &&
                <img src={`${imageUrl}`} alt={`La imagen con el fact ${fact}`} /> }
            </section>

        </main>
    )
}