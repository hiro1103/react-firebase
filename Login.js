import { auth } from "./firebase";
import { Link, useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';
const Login = () => {
    const history = useHistory();
    const [error, setError] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await signInWithEmailAndPassword(auth, email.value, password.value);
            history.push('/');
        } catch (error) {
            console.log(error);
            setError(error.message);
        }
    };
    return (
        <div>

            <h1 align="center" style={{ color: "red" }}><b>ユーザー登録画面</b></h1><br /><br />
            <form onSubmit={handleSubmit}>
                <table align="center">
                    <tr align="center"><th>メールアドレス：</th>
                        <td>
                            <input type="email" name="email" placeholder="email" />
                        </td>
                    </tr>

                    <tr align="center"><th>パスワード入力：</th>
                        <td><input type="password" name="password" /></td></tr>
                    <tr align="center"><td><button>登録送信ボタン</button></td>
                        <div align="center">
                            ユーザ登録は<Link to={'/signup'}>こちら</Link>から
                        </div>
                    </tr>
                </table>
            </form>
        </div >
    )
}

export default Login;