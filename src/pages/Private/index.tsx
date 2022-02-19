import {useContext} from "react";
import {AuthContext} from "../../contexts/Auth/AuthContext";

export const Privada = () => {
    const auth = useContext(AuthContext);
    return (
        <div>
            <h2>Pagina privada</h2>
            Olá, {auth.user?.name}, tudo bem?
        </div>
    )
}
