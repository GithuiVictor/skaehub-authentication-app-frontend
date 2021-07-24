import { TextField } from "@material-ui/core";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.div`
    position: ${({position}) => (
        position === "absolute" ? "absolute" : ""
    )};
    background: ${({background}) => (
        background === "#f4f5f7" ? "#f4f5f7" : "transparent"
    )};
    width: ${({width}) => (
        width === "100%" ? "100% !important" : ""
    )};
    height: ${({height}) => (
        height === "100%" ? "100% !important" : ""
    )};
    display: ${({display}) => (
        display === "flex" ? "flex" : "block"
    )};
    justify-content: ${({justifyContent}) => (
        justifyContent === "start" ? "flex-start" : "center" &&
        justifyContent === "end" ? "flex-end" : "center"
    )};
    align-Items: ${({alignItems}) => (
        alignItems === "center" ? "center" : ""
    )};
`;

export const Container = styled.div`
    background: ${({background}) => (
        background === "white" ? "white" : "transparent"
    )};
    display: ${({display}) => (
        display === "flex" ? "flex" : "block"
    )};
    justify-content: ${({justifyContent}) => (
        justifyContent === "start" ? "flex-start" : "center" &&
        justifyContent === "end" ? "flex-end" : "center"
    )};
    height: ${({height}) => (
        height === "525" ? "525px" : ""
    )};
    margin: ${({margin}) => (
        margin === "1.5-0-0-0" ? "1.5rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem" 
    )};
    padding: ${({padding}) => (
        padding === "0-2-0-2" ? "0rem 2rem 0rem 2rem" : "0rem 0rem" &&
        padding === "2-3-0-3" ? "2rem 3rem 0rem 3rem" : "0rem 0rem"
    )};
    border-radius: ${({borderRadius}) => (
        borderRadius === "30-30-0-0" ? "30px 30px 0px 0px" : "none"
    )}
`;


export const Card = styled.div`
    background: ${({background}) => (
        background === "primary" ? "linear-gradient(116.8deg, #F43C58 5.64%, #F4593C 75.69%)" : "transparent"
    )};
    width: ${({width}) => (
        width === "385" ? "385px" : "100%"
    )};
    height: ${({height}) => (
        height === "712" ? "712px" : "100%"
    )};
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

export const Image = styled.img`
    width: ${({width}) => (
        width === "100" ? "100px" : "100%" &&
        width === "110" ? "110px" : "100%"
    )};
    height: ${({height}) => (
        height === "100" ? "100px" : "100%"
    )};
    object-fit: cover;
    margin: ${({margin}) => (
        margin === "1-0-0-0" ? "1rem 0rem 0rem 0rem" : "0rem 0rem 0rem orem" &&
        margin === "2-0-0-0" ? "2rem 0rem 0rem 0rem" : "0rem 0rem 0rem orem"
    )};
    border-radius: ${({borderRadius}) => (
        borderRadius === "50" ? "50px" : "none"
    )};
`;

export const Title1 = styled.h1``;

export const Title2 = styled.h2``;

export const Title3 = styled.h3``;

export const Title4 = styled.h4``;

export const Placeholder = styled.p``;

export const TargetLink = styled(Link)``;

export const Form = styled.form`
    padding: 0rem 2.5rem;
`;

export const Buttons = styled(Button)`
    width: 100%;
    margin: ${({margin}) => (
        margin === "1-0-0-0" ? "1rem 0rem 0rem 0rem" : "0rem 0rem 0rem 0rem"
    )};
`;

export const InputField = styled(TextField)``;

export const Rows = styled(Row)``;

export const Column = styled(Col)``;