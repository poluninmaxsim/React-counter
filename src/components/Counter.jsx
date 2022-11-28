import React from 'react'

function Counter() {
    const [count, setCount] = React.useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div className="counter__card">
            <h2>Counter:</h2>
            <h1>{count}</h1>
            <button onClick={decrement} className="minus">
                - Minus
            </button>
            <button onClick={increment} className="plus">
                Plus +
            </button>
            <a href="/">
                <button className="reset">Reset</button>
            </a>
        </div>
    )
}

export default Counter
