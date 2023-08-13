import styled from 'styled-components';

export const Sandbox = styled.div`
    height: 100%;
    background: url('public/universe.jpg');
    background-size: cover;
    background-blend-mode: lighten; 
    filter: blur(${(props) => props.$shadowed ? '1px' : '0px'});
    position: relative;
    z-index: -1;
`;