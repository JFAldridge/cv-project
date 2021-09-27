import React, { useContext, useRef, useEffect } from 'react';
import styled, { ThemeContext } from "styled-components";
import { useTheme } from '../../../theme/useTheme';
import { Dropdown } from 'react-bootstrap';
import { Form, FloatingLabel } from 'react-bootstrap';
import WebFont from 'webfontloader';

const ThemeCreatorMenu = styled(Dropdown.Menu)`
    background-color: rgba(30, 67, 86, 89%);
    width: 16em;
    color: #f9f9f9;
    transform: translate3d(-20px, 65px, 0px)!important;
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

const SaveButton = styled.button`
    &&.btn.create-theme {
        background: #68A4C4;
        margin: 0;
        width: auto;

        &:hover {
            background: #a2cce3;
        }
    }
`;

function CreateTheme({themeChangeHandle, createdThemeSave}) {
    const themeContext = useContext(ThemeContext);
    const {getFonts} = useTheme();
    const allFonts = getFonts();
    // Font value refs for fontloader
    let hFontVal = useRef(themeContext.headerFont);
    let cFontVal = useRef(themeContext.contentFont);

    useEffect(() => {
        WebFont.load({
            google: {
              families: [hFontVal.current, cFontVal.current]
            }
        });
    }, []);

    const handleFontChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        name === 'headerFont' ? hFontVal.current = value : cFontVal.current = value;

        WebFont.load({
            google: {
              families: [hFontVal.current, cFontVal.current]
            }
        });

        themeChangeHandle(event);
    }

    const saveCreatedTheme = (event) => {
        event.preventDefault();
        createdThemeSave();
    }

    return(
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" varient="outline-primary">
                Create Theme
            </Dropdown.Toggle>

            <ThemeCreatorMenu varient="dark">
                <Form onSubmit={(event) => saveCreatedTheme(event)}>
                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-10 offset-1">
                                <FloatingLabel
                                    controlId="theme-name"
                                    label="Theme Name">
                                <CreatorTextInput
                                    type="text"
                                    placeholder="Theme Name"
                                    value={themeContext.name}
                                    name="name"
                                    onChange={(event) => themeChangeHandle(event)}
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
                                        name="bg"
                                        onChange={(event) => themeChangeHandle(event)}
                                    />
                                </div>
                                <div className="col-5">
                                    <Form.Label>Foreground</Form.Label>
                            
                                    <Form.Control
                                        type="color"
                                        id="main-foreground-color"
                                        title="Main Foreground Color"
                                        value={themeContext.fg}
                                        name="fg"
                                        onChange={(event) => themeChangeHandle(event)}
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
                                        name="accentBg"
                                        onChange={(event) => themeChangeHandle(event)}
                                    />
                                </div>
                                <div className="col-5">
                                    <Form.Label>Foreground</Form.Label>
                            
                                    <Form.Control
                                        type="color"
                                        id="accent-foreground-color"
                                        title="Accent Foreground Color"
                                        value={themeContext.accentFg}
                                        name="accentFg"
                                        onChange={(event) => themeChangeHandle(event)}
                                    />
                                </div>
                            </div>
                        </fieldset>
                        <div className="row mb-3">
                            <div className="col-10 offset-1">
                                <FloatingLabel
                                    controlId="header-font"
                                    label="Header Font">
                                    <CreatorSelect 
                                        name="headerFont"
                                        value={themeContext.headerFont}
                                        onChange={(event) => handleFontChange(event)}>
                                        {
                                            allFonts.map((font, i) => {
                                                return (
                                                <CreatorOption 
                                                    value={font}
                                                    key={i}>
                                                    {font}
                                                </CreatorOption>
                                                );
                                            })
                                        }
                                    </CreatorSelect>
                                </FloatingLabel>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-10 offset-1">
                                <FloatingLabel
                                    controlId="content-font"
                                    label="Content Font">
                                    <CreatorSelect 
                                        name="contentFont"
                                        value={themeContext.contentFont}
                                        onChange={(event) => handleFontChange(event)}>
                                        {
                                            allFonts.map((font, i) => {
                                                return (
                                                <CreatorOption 
                                                    value={font}
                                                    key={i}>
                                                    {font}
                                                </CreatorOption>
                                                );
                                            })
                                        }
                                    </CreatorSelect>
                                </FloatingLabel>
                            </div>
                            <div className="row mb-3">
                                <div className="col-10 offset-1">
                                    <Dropdown.Item as={SaveButton} className="mt-4 btn create-theme">
                                        Add Theme
                                    </Dropdown.Item>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </ThemeCreatorMenu>
        </Dropdown>
    );
}

export default CreateTheme;