import { useState } from "react"

export default function App() {
  const [count, setCount] = useState(0)

  function handClick(){
    setCount(count+1)
  }
  return (
    <div>
      <h1>Contagem = {count}</h1>
      <button onClick={handClick}>incrementar</button>
    </div>
  )
}
