import styled from 'styled-components';

export const Sidebar = styled.div`
    border-right: 3px dashed #FBFAF5;
    background-color: #0A0A0A;
    color: white;
    height: 100vh;
    font-family: 'Changa', sans-serif;
    font-size: 4vh;
    padding: 2.5vh;      
    text-align: center;
    grid-template-columns: repeat(4, 1fr);
    filter: blur(${(props) => props.$shadowed ? '1px' : '0px'});
`;