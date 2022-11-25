import { useState } from "react";
import { HeaderStyle } from "./style";

export const Header = ({ Button, setSearchCategory }) => {

    const [inputValue, setInputValue] = useState("")

    const searchCategoryForm = (event) => {
        event.preventDefault()
        setSearchCategory(inputValue)
    }

    return (
        <HeaderStyle>
            <nav className="container">
                <h1>Burger <span>Kenzie</span></h1>
                <form onSubmit={(event) => searchCategoryForm(event)}>
                    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text" placeholder="Digitar Pesquisa" />
                    <Button type="submit">Pesquisa</Button>
                </form>
            </nav>
        </HeaderStyle>
    )
}