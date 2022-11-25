import { MainStyle } from "./style"

export const Main = ({ children }) => {
    return (
        <MainStyle className="container">
            {children}
        </MainStyle>
    )
}