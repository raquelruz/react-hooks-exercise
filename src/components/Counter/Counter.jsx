import { useCounter } from "../../hooks/useCounter"

export const Counter = () => {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div className="counter-container">
            <h2>Contador: {count}</h2>
            <button onClick={increment}>➕ Sumar</button>
            <button onClick={decrement}>➖ Restar</button>
            <button onClick={reset}>🔄 Resetear</button>
        </div>
    )
}