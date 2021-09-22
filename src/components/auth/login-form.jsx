import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { Redirect } from 'react-router';
import { setToLS } from '../../utils/storage';

import CVInput from '../cv/user-info-forms/cv-input';

const AuthContainer = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FormContainer = styled.div`
    background-color: #fefefee5;
    padding: 30px;
    border: 1px solid #888;
    width: 500px;
    box-shadow: 0 0 30px rgba(214, 215, 216, 0.2);
    z-index: 5;
    margin-top: 100px;
`;

const AuthForm = styled(Form)`
    input, .text-area {
        border-radius: 2px;
    }
  
    button {
        background: #68A4C4;
        border: 0;
        padding: 10px 24px;
        color: #fff;
        transition: 0.4s;

        &:hover {
            background: #a2cce3;
        }
    }
`;

function LoginForm({loggedIn, loginToggle}) {
    const [inputFields, setInputFields] = useState({
        email: '',
        password: ''
    });
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
		const name = event.target.name;	
		const value = event.target.value;

		const newInputObject = {[name]: value};

		setInputFields((prevState) => {
			return {...prevState, ...newInputObject};
		});
	}

    const handleSubmit = (event) => {
        event.preventDefault();
      
        axios({
            method: 'POST',
            url: 'http://localhost:5000/auth/login',
            data: {
                email: inputFields.email,
                password: inputFields.password
            }
        }).then( user => {
            setToLS('token', user.data.token);
            loginToggle();
            setUserInfo(user.data.userInfo);
        }).catch( error => {
            setError(error);
        })
    }

    if (userInfo) {
        return (
            <Redirect 
                to={{
                    pathname: '/',
                    state: {
                        userInfo: userInfo
                    }
                }}
            />
        );
    } else {
        return (
            <AuthContainer>
                <FormContainer>
                    <AuthForm onSubmit={handleSubmit}>
                        <h2>Log In</h2>
                        <p className="mb-3">Not registered? Register Now!</p>
                        {error &&
                        <p className="text-danger">That email/password combination doesn't exist</p>}
                        <CVInput  
                            inputName="email"
                            currentValue= {inputFields.email}
                            inputType="text"
                            labelContent="Email"
                            inputChangeHandle={handleInputChange}
                        />
                        <CVInput  
                            inputName="password"
                            currentValue= {inputFields.password}
                            inputType="password"
                            labelContent="Password"
                            inputChangeHandle={handleInputChange}
                        />
                        <button className="btn">Log In</button>
                    </AuthForm>
                </FormContainer>
            </AuthContainer>
        );
    } 
}

export default LoginForm;