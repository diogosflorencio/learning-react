import { useEffect, useState } from "react";
import { findProduct } from "./data";

function App() {

  console.log("passou no app")

  const [productId, setProductId] = useState(1)
  const [prod, setProd] = useState<any>();

  useEffect(() => {
    console.log("passou no app useef")
    setProd(findProduct(productId))
  }, [productId])
  
  function handleClick(){
    console.log("passou no app hand")
    setProductId(2)
    // setProd(findProduct(productId))
  }
  return (
    <>
      <h2>{prod?.name}</h2>
      <p>{prod?.price}</p>
      <br />
      <button onClick={handleClick}>Mudar para produto 2</button>
    </>
  )
}

export default App
