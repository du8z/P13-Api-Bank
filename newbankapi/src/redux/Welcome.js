import { useSelector } from "react-redux"
import { selectCurrentToken, selectCurrentUser } from "./authSlice"
import { Link } from "react-router-dom"
import MainLayout from "../layout/MainLayout"

const Welcome = () => {
    const user = useSelector(selectCurrentUser)
    const token = useSelector(selectCurrentToken)
    console.log(token);
    const Welcome = user ? `Welcome ${user} !` : 'Welcome'
    const tokenAbbr = `${token.slice(0,9)}...`

    const content = (
        <MainLayout>
        <section className="welcome">
            <h1>{Welcome} </h1>
            <p>Token : {tokenAbbr} </p>
        </section>
        </MainLayout>
    )
    return content
}
export default Welcome