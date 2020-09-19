import React from 'react'

export default function RocketList({ rocket }) {
    return (
        <div>
            {rocket.map( p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}
