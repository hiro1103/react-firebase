  
import React from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRef } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const SignUp = () => {
    const history = useHistory();
    const [error, setError] = useState('');
    const emailRef = useRef(null);
    const emailPassword = useRef(null);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await createUserWithEmailAndPassword(auth, email.value, password.value);
            history.push('/');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h1 align="center" style={{ color: "red" }}><b>ユーザー登録画面</b></h1><br /><br />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <table align="center">
                    <tr align="center"><th>メールアドレス：</th>
                        <td>
                            <input type="email" name="email" placeholder="email" ref={emailRef} />
                        </td>
                    </tr>

                    <tr align="center"><th>パスワード入力：</th>
                        <td><input type="password" name="password" ref={emailPassword} /></td></tr>
                    <tr align="center"><td><button>登録送信ボタン</button></td>

                    </tr>
                </table>
                <div>
                    ユーザ登録済の場合は<Link to={'/login'}>こちら</Link>から
                </div>
            </form>
        </div >

    )
}

export default SignUp;
