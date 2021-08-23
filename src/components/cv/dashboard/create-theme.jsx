import React, { useState, useEffect, useContext } from 'react';
import styled, { ThemeContext } from "styled-components";
import _ from 'lodash';
import { useTheme } from '../../../theme/useTheme';
import { v4 as uuidv4 } from 'uuid';
import { Dropdown } from 'react-bootstrap';
import { Form, FloatingLabel } from 'react-bootstrap';

const ThemeCreatorMenu = styled(Dropdown.Menu)`
    background-color: rgba(30, 67, 86, 89%);
    width: 16em;
    color: #f9f9f9;
`;

const CreatorLegend = styled.legend`
    border-bottom: 2px solid #68A4C4;
    display: block;
    width: 100%;
`;

const CreatorTextInput = styled(Form.Control)`
    color: #f9f9f9;
    background-color: transparent;
    border: 2px solid #68A4C4;
    &:focus {
        background-color: transparent;
        color:#f9f9f9;
        border: 2px solid #68A4C4;
        box-shadow: 0 0 3px 1px #ffffff4d;
    }
    &:active {
        background-color: transparent;
        border: 2px solid #68A4C4;
    } 
`;

const CreatorSelect = styled(Form.Select)`
    background-color: transparent;
    border: 2px solid #68A4C4;
    color: #f9f9f9;
    padding: 20px;
    &:focus {
        background-color: transparent;
        color:#f9f9f9;
        border: 2px solid #68A4C4;
        box-shadow: 0 0 3px 1px #ffffff4d;
    }
    &:active {
        background-color: transparent;
        border: 2px solid #68A4C4;
    } 
`;

const CreatorOption = styled.option`
    background-color: rgba(30, 67, 86);
`;

function CreateTheme(props) {
    const themeContext = useContext(ThemeContext);

    return(
        <Dropdown autoClose="outside">
            <Dropdown.Toggle id="dropdown-basic" varient="outline-primary">
                Theme Creator
            </Dropdown.Toggle>

            <ThemeCreatorMenu varient="dark">
                <Form>
                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-10 offset-1">
                                <FloatingLabel
                                    controlId="theme-name"
                                    label="Theme Name">
                                <CreatorTextInput
                                    type="text"
                                    placeholder="Theme Name"
                                />
                                </FloatingLabel>
                            </div>
                        </div>
                        <fieldset>
                            <div className="row">
                                <div className="col-6 offset-1">
                                    <CreatorLegend>Main</CreatorLegend>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-5 offset-1">
                                    <Form.Label>Background</Form.Label>
                            
                                    <Form.Control
                                        type="color"
                                        id="main-background-color"
                                        title="Main Background Color"
                                        value={themeContext.bg}
                                    />
                                </div>
                                <div className="col-5">
                                    <Form.Label>Foreground</Form.Label>
                            
                                    <Form.Control
                                        type="color"
                                        id="main-foreground-color"
                                        title="Main Foreground Color"
                                        value={themeContext.fg}
                                    />
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="row">
                                <div className="col-6 offset-1">
                                    <CreatorLegend>Accent</CreatorLegend>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-5 offset-1">
                                    <Form.Label>Background</Form.Label>
                            
                                    <Form.Control
                                        type="color"
                                        id="accent-background-color"
                                        title="Accent Background Color"
                                        value={themeContext.accentBg}
                                    />
                                </div>
                                <div className="col-5">
                                    <Form.Label>Foreground</Form.Label>
                            
                                    <Form.Control
                                        type="color"
                                        id="accent-foreground-color"
                                        title="Accent Foreground Color"
                                        value={themeContext.accentFg}
                                    />
                                </div>
                            </div>
                        </fieldset>
                        <div className="row mb-3">
                            <div className="col-10 offset-1">
                                <FloatingLabel
                                    controlId="header-font"
                                    label="Header Font">
                                    <CreatorSelect>
                                        <CreatorOption value="dog">Dog</CreatorOption>
                                        <CreatorOption value="cat">Cat</CreatorOption>
                                    </CreatorSelect>
                                </FloatingLabel>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-10 offset-1">
                                <FloatingLabel
                                    controlId="content-font"
                                    label="Content Font">
                                    <CreatorSelect>
                                        <CreatorOption value="dog">Dog</CreatorOption>
                                        <CreatorOption value="cat">Cat</CreatorOption>
                                    </CreatorSelect>
                                </FloatingLabel>
                            </div>
                        </div>
                    </div>
                </Form>
            </ThemeCreatorMenu>
        </Dropdown>
    );
}

export default CreateTheme;