import { useState } from "react"

export function TwitterFollowCard ({userName = 'unknown', name = 'unknown', initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    //useState
    // const [valor, formaDeActualizarlo] = useState(valorInicial)


    const text = isFollowing ? 'Seguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    console.log(isFollowing)

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/x/${userName}`}
                    alt="El avatar de Luchito" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-info-userName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-textFollowing">{text}</span>
                <span className="tw-followCard-stopFollowing">Dejar de seguir</span>
                    
                </button>
            </aside>
        </article>
    )
}