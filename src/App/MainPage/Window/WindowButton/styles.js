import styled from 'styled-components';

export const WindowButton = styled.div`
    background-color: #0A0A0A;
    border: 2px dashed white;
    border-radius: 7.5px;
    height: 40px;
    width: 240px;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

    &:hover {
        cursor: pointer;
        border: 2px solid white;
    }

    div {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;