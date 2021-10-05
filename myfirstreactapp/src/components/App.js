import React from 'react'
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"

const products = ["tooth paste", "tooth brush", "mouth wash","dental floos", "mouth guard"]
const products1 = ["linkedin ", "facebook", "Amzon","Instagram", "whatsapp"]
const App = () => {

    return(
     <div>
       <SearchBar searchItem= {products}/>
       <SearchBar searchItem= {products1}/>
    </div> 
    )
  }
  export default App