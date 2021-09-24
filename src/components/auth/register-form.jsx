import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

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

    a {
        color: #32627b;
        text-decoration: none;
        margin-left: 4px;
        &:hover {
            color: #68A4C4;
        }
    }
`;

function RegisterForm(props) {
    const [inputFields, setInputFields] = useState({
        email: '',
        password: ''
    });
    const [errorMessages, setErrorMessages] = useState(null);
    const [registered, setRegistered] = useState(false);

    const handleInputChange = (event) => {
		const name = event.target.name;	
		const value = event.target.value;

		const newInputObject = {[name]: value};

		setInputFields((prevState) => {
			return {...prevState, ...newInputObject};
		});
	}

    const prettifyAndSetErrorMessages = (messagesObj) => {
        let messages = [];

        Object.values(messagesObj).forEach((message, i) => {
            messages.push(<li key={i} className="text-danger">{message}</li>);
        })

        setErrorMessages(messages);
    }

    const checkEmailValidity = (emailInput) => {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailInput)) {
            return true;
        }
    } 

    const handleSubmit = (event) => {
        event.preventDefault();
        const trimmedEmail = inputFields.email.trim;
        const trimmedPassword = inputFields.password.trim;

        if (!checkEmailValidity(trimmedEmail)) {
            return prettifyAndSetErrorMessages({ email: 'Invalid email format!'});
        }

        axios({
            method: 'POST',
            url: 'http://localhost:5000/auth/register',
            data: {
                email: trimmedEmail,
                password: trimmedPassword
            }
        }).then( response => {
            setRegistered(true);
        }).catch( error => {
            prettifyAndSetErrorMessages(error.response.data.errMessages);
        })
    }

    if (registered) {
        return (
            <Redirect 
                to={{
                    pathname: '/login',
                }}
            />
        );
    } else {
        return (
            <AuthContainer>
                <FormContainer>
                    <AuthForm onSubmit={handleSubmit}>
                        <h2>Register</h2>
                        <p className="mb-3">Already registered? 
                            <Link to='/login'>Login!</Link>
                        </p>
                        {errorMessages &&
                            <ul>{errorMessages}</ul>}
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

export default RegisterForm;