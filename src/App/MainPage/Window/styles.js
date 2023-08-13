import styled from 'styled-components';

export const Window = styled.div`
    border-radius: 15px;
    border: 3px dashed #FBFAF5;
    background-color: #0A0A0A;
    color: white;
    height: 50vh;
    width: 50vw;
    font-family: 'Changa', sans-serif;
    padding: 2.5vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);      
    text-align: center;
    font-size: 2.5vh;
    line-height: 150%;
    z-index: 10;

    h2 {
        font-size: 4vh;
        height: 6vh;
    }

    p {
        display: inline;
    }
`;