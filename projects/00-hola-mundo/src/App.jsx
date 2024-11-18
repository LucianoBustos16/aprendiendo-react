import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const user = [
    {
        name: "Luchito",
        userName: "lucianobustos16",
        isFollowing: true
    },
    {
        name: "LBDTw",
        userName: "_lbdtw_",
        isFollowing: false
    }

]

export function App() {
    return (
        <div className='App'>
            <h2 className='tw-subtitle'>A quién seguir</h2>
            {
                user.map(user => {
                    const { name, userName, isFollowing } = user

                    return (
                        <TwitterFollowCard key={userName} name={name} userName={userName} initialIsFollowing={isFollowing} />
                    )
                })
            }
        </div>
    )
}