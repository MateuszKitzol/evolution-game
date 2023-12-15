import styled from 'styled-components';
import { Button } from '../../ButtonSection/Button/styles.js';

export const WindowSolutionButton = styled(Button)`
    left: 50%;
    transform: translateX(-50%);
    position: relative;

    &:hover {      
        animation-name: widthAnimation;
        animation-duration: 1000ms;
        animation-delay: -500ms;
        animation-fill-mode: forwards;

        background: none;
        background-color: purple;
        cursor: default; 
    }

    &:hover::before {
        animation-name: opacityAnimation;
        animation-duration: 2000ms;
        animation-fill-mode: forwards;

        content: '${(props) => props.item}';
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @keyframes widthAnimation{
        0% { width: 40px; }
        100% { width: 50%; }
    }

    @keyframes opacityAnimation{
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
`;