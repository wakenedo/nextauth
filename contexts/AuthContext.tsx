import { createContext } from "react";

type SignInCredentials = {
    email: string
    password: string
}

type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<void>;
    isAuthenticated: boolean;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }) {
    const isAuthenticated = false

    function signIn({email, password} : SignInCredentials) {
        console.log({})
    }
    return (
        <AuthContext.Provider value={ }>
            {children}
        </AuthContext.Provider>
    )
}