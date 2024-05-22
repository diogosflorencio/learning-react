import { findProduct } from "./data";

function App() {

  console.log("passou no app")
  // forma errada
  let productId = 1;
  
  let prod = findProduct(productId)
  
  function handleClick(){
    console.log("passou no app")
    productId = 2;
    prod = findProduct(productId)
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
