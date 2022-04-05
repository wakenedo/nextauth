
import { destroyCookie } from "nookies";
import { useContext, useEffect } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { AuthTokenError } from "../errors/AuthTokenError";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        api.get('/me')
            .then(response => console.log(response))
    }, []);

    return (
        <h1>Dashboard: {user?.email}</h1>
    )
}

export const getServerSideProps = withSSRAuth(async (context) => {
    const apiClient = setupAPIClient(context)

    try {
        const response = await apiClient.get('/me')

        console.log(response.data);
    } catch (err) {
        destroyCookie(context, 'nextauth.token')
        destroyCookie(context, 'nextauth.refreshToken')
        return {
            redirect : {
                destination : '/',
                permanent : false
            }
        }
    }
   

    return {
        props: {}
    }
})