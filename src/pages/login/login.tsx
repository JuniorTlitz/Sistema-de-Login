import {useState} from "react";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, usePassword] = useState('');

    const handleLogin = () => {}

    return (
        <div>
            <h2>Página fechada</h2>
            <input type="email" value={email} placeholder="Digite seu e-mail" />
            <input type="password" value={password} placeholder="Digite sua senha" />
            <button onClick={handleLogin}>Logar</button>
        </div>
    )
}