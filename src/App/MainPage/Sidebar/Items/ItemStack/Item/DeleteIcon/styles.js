import styled from 'styled-components';
import deleteIcon from '../../../../../../../../public/icons/close.png';

export const DeleteIcon = styled.div`
    background: url(${deleteIcon});
    background-color: white;
    background-size: contain;
    border: 2px solid purple;
    border-radius: 50%;

    position: absolute;
    top: 0px;
    left: 0px;
    height: 20px;
    width: 20px;
    transform: translate(-40%, -40%);

    visibility: hidden;
`;