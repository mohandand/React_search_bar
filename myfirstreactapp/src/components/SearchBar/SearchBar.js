import React, {useState} from 'react'
import "./SearchBar.css"



const SearchBar = (props) => {

    const [searchValue, SetSeacrchvalue] = useState("")

const handleInput = (event) => {

    SetSeacrchvalue(event.target.value)

}
const handleButton = () => {

    SetSeacrchvalue("")
}

const shouldDisplayButton = searchValue.length >0

const filteredProducts = props.searchItem.filter((products) => {
        return products.includes(searchValue)
})
return(

    <div>
        <input type="text"  value= {searchValue} onChange = {handleInput}></input>{searchValue}
        <ul>
            {filteredProducts.map((products) => {
                return <li key={products}>{products}</li>
            })}
        </ul>
    </div>
)
}


export default SearchBar