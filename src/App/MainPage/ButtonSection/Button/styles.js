import styled from 'styled-components';
import clear from '../../../../../public/icons/clear.png';
import key from '../../../../../public/icons/key.png';
import hint from '../../../../../public/icons/hint.png';
import info from '../../../../../public/icons/info.png';
import close from '../../../../../public/icons/close.png';
import sources from '../../../../../public/icons/sources.png';

export const Button = styled.div`
    background: url(${(props) => eval(props.name)});
    background-color: black;
    background-size: 80% 80%;
    background-position: center;
    background-repeat: no-repeat;
    border: 2px dashed white;
    border-radius: 7.5px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    height: 40px;
    width: 40px;

    &:hover {
        cursor: ${(props) => props.$shadowed ? 'default' : 'pointer'};
        background-color: purple;
    }

    &:active {
        border: ${(props) => props.$shadowed ? '2px dashed white' : '2px solid white'};
    }
`;