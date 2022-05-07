

import React from 'react';


class sinkitoroku extends React.Component {
      constructor(props){
        super(props);
        this.state = {
            info: {
                onamae: '',
                email: '',
                postal: '',
                address: '',
                tel: '',
                pass: '',
                pass2: '',
                age:''
            },
            message:{
                onamae: '',
                email: '',
                postal: '',
                address: '',
                tel: '',
                pass: '',
                pass2: '',
                age:''

            }
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const { info, message } = this.state;
        this.setState({
            info: { ...info, [name]: value }
        });
        this.setState({
            message: {...message,[name]: this.validator(name, value)}
        });
    }

    validator(name, value){
        switch (name) {
            case 'onamae':
                return this.onamaeValidation(value);
            case 'email':
                return this.emailValidation(value);
            case 'postal':
                return this.postalValidation(value);
            case 'address':
                return this.addressValidation(value);
            case 'tel':
                return this.telValidation(value);
            case 'pass':
                return this.passValidation(value);
            case 'pass2':
                return this.pass2Validation(value);
            case 'age':
                return this.ageValidation(value);
             default:
            
        }
    }
    

    onamaeValidation(value){
        if (!value) return '※名前を入力してください';
        if (value.length < 2) return '※名前2文字以上で入力してください';
        return '';
    }

    emailValidation(value){
        if (!value) return '※メールアドレスを入力してください';
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!regex.test(value)) return '※正しい形式でメールアドレスを入力してください';
        return '';
    }

    postalValidation(value){
        if (!value) return '※郵便番号は、数字7桁で入力してください';
        const regex = /^[0-9]{7}$/;
        if (!regex.test(value)) return '※郵便番号は数字7桁で入力してください';
        return '';
    }

    addressValidation(value){
        if (!value) return '※住所を入力してください';
        if (value.length < 6) return '※住所を6文字以上で入力してください';
        return '';
    }

    telValidation(value){
        if (!value) return '※電話番号を入力してください';
        const regex = /^0\d{9,10}$/;
        if (!regex.test(value)) return '※正しい形式で電話番号を入力してください';
        return '';
    }

     passValidation(value){
        if (!value) return '※パスワードを入力してください';
        const regex = /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[!-/:-@[-`{-~])(?!.*?(.)\1{4,})[0-9a-zA-Z!-/:-@[-`{-~]{12,}$/;
        if (!regex.test(value)) return '※12文字以上の文字列,半角の英大文字、英小文字、数字、記号をすべて含む,5 文字以上の連続した文字列を含まないでパスワードを入力してください';
        return '';
    }

     pass2Validation(value){
        if (!value) return '※パスワードを入力してください';
        const regex = /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[!-/:-@[-`{-~])(?!.*?(.)\1{4,})[0-9a-zA-Z!-/:-@[-`{-~]{12,}$/;
        if (!regex.test(value)) return '※12文字以上の文字列,半角の英大文字、英小文字、数字、記号をすべて含む,5 文字以上の連続した文字列を含まないでパスワードを入力してください';
        return '';
    }

    ageValidation(value){
        if (!value) return '※年齢は、数字2桁で入力してください';
        const regex = /^[0-9]{2}$/;
        if (!regex.test(value)) return '年齢は、数字2桁で入力してください';
        return '';
    }
    
    render() {
        
        return (
            <div>
                
                <h1 align="center"><b>新規会員登録画面</b></h1><br /><br />
                <table align="center" border="1">
                    <tr>
                        <th align='left'>お名前</th><br />
                            <td> <p>お名前（必須）</p>
                                 <p>{this.state.message.onamae}</p>
                                <input type="text" name="onamae" value={this.state.info.onamae} onChange={this.handleChange} style={{ width: "200px" }} size="30" /><br /></td>
                    </tr>
                    <tr>
                        <th align='left'>メールアドレス</th><br />
                        <td><p>メールアドレス（必須）</p>
                            <p>{this.state.message.email}</p>
                            <input type="text" name="email" value={this.state.info.email} onChange={this.handleChange} style={{ width: "200px" }} size="50"/><br /></td>
                    </tr>
                    <tr>
                        <th align='left'>郵便番号</th><br />
                        <td><p>郵便番号（必須）</p>
                            <p>{this.state.message.postal}</p>
                            <input type="text" name="postal" value={this.state.info.postal} onChange={this.handleChange} style={{ width: "200px" }} maxlength="7"/>
                        </td>
                    </tr>
                    <tr>
                        <th align='left'>住所</th><br />
                        <td><p>住所（必須）</p>
                            <p>{this.state.message.address}</p>
                            <input type="text" name="address" value={this.state.info.address} onChange={this.handleChange} style={{ width: "200px" }} size="50"/><br /></td>
                    </tr>
                    <tr>
                        <th align='left'>電話番号</th><br />
                        <td><p>電話番号（必須）</p>
                            <p>{this.state.message.tel}</p>
                            <input type="text" name="tel" value={this.state.info.tel} onChange={this.handleChange} style={{ width: "200px" }} /><br /></td>
                    </tr>
                    <tr>
                        <th align='left'>パスワード</th><br />
                        <td><p>パスワード（必須）</p>
                            <p>{this.state.message.pass}</p>
                            <input type="password" name="pass" value={this.state.info.pass} onChange={this.handleChange} style={{ width: "200px" }} /><br /></td>
                    </tr>
                    <tr>
                        <th align='left'>確認パスワード</th><br />
                        <td><p>確認パスワード（必須）</p>
                            <p>{this.state.message.pass2}</p>
                            <input type="password" name="pass2" value={this.state.info.pass2} onChange={this.handleChange} style={{ width: "200px" }} /><br /></td>
                    </tr>
                    <tr>
                        <th align='left'>年齢</th><br />
                        <td><p>年齢（必須）</p>
                            <p>{this.state.message.age}</p>
                            <input type="text" name="age" value={this.state.info.age} onChange={this.handleChange} style={{ width: "200px" }} /><br /></td>
                    </tr>
                </table>
                <br/><br/>
                <table align="center">
                        <td><input type="button" onClick={() => this.props.history.goBack()} value="戻る" /></td>
                        <td></td>
                        <td><input type="submit" value="送信する" onClick={this.props.history.push('./kanin')}
                        disabled={!this.state.info.onamae || !this.state.info.email ||
                            !this.state.info.postal || !this.state.info.address ||
                            !this.state.info.tel || !this.state.info.pass ||
                            !this.state.info.pass2|| !this.state.info.age ||
                            this.state.message.onamae || this.state.message.email ||
                            this.state.message.postal || this.state.message.address ||
                            this.state.message.tel || this.state.message.pass ||
                            this.state.message.pass2 || this.state.message.age} />
            </td>
                    </table>
                    
        </div>
        );
    }
}

export default sinkitoroku; 