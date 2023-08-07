import styled from 'styled-components';

export const Item = styled.div`
    background: url(${(props) => props.path});
    background-size: contain; 
    border: 3px solid purple;
    border-radius: 5px;
    min-width: 60px;
    max-width: 60px;
    min-height: 60px;
    max-height: 60px;
    //margin: 0.75vh;
    //position: ${(props) => {return props.sidebar ? 'static' : 'absolute'}};
    //top: ${(props) => {return props.sidebar ? 0 : `${props.y}px`}};
    //left: ${(props) => {return props.sidebar ? 0 : `${props.x}px`}};
    position: absolute;
    z-index: 2;

    &:hover {
        cursor: pointer;
    }

    &:hover:after {
        border: 2px solid purple;
        border-radius: 5px;
        color: black;
        background-color: white;
        content: '${(props) => props.name}';
        cursor: pointer;
        font-size: 15px;
        position: relative;
        margin: 20px;
        z-index: 3;
    }
`;