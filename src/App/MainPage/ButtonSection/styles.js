import styled from 'styled-components';

export const ButtonSection = styled.div`
    height: 80px;
    width: 200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    bottom: 10px; 
    right: 10px; 
    z-index: 5;
    filter: blur(${(props) => props.$shadowed ? '1px' : '0px'});
`;