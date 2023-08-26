import styled from 'styled-components';

export const Button = styled.div`
    background: url(${(props) => props.path});
    background-color: black;
    background-size: 80% 80%;
    background-position: center;
    background-repeat: no-repeat;
    border: 2px dashed white;
    border-radius: 7.5px;
    height: 40px;
    width: 40px;

    &:hover {
        cursor: ${(props) => props.$shadowed ? 'default' : 'pointer'};
        background-color: purple;
        //border: ${(props) => props.$shadowed ? '2px dashed white' : '2px solid white'};
    }

    &:active {
        border: ${(props) => props.$shadowed ? '2px dashed white' : '2px solid white'};
    }
`;