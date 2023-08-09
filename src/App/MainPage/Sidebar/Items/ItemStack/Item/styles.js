import styled from 'styled-components';
import { DeleteIcon } from './DeleteIcon/styles';

export const Item = styled.div`
    background: url(${(props) => props.path});
    background-size: contain; 
    border: 3px solid purple;
    border-radius: 5px;
    min-width: 60px;
    max-width: 60px;
    min-height: 60px;
    max-height: 60px;
    position: absolute;
    z-index: 2;

    &:hover {
        cursor: ${(props) => props.name === 'undiscovered' ? 'default' : 'pointer'};
    } 

    &:hover:after {
        border: 2px solid purple;
        border-radius: 5px;
        color: black;
        background-color: white;
        content: '${(props) => props.name}';
        cursor: ${(props) => props.name === 'undiscovered' ? 'default' : 'pointer'} ;
        font-size: 15px;
        position: relative;
        margin: 20px;
        z-index: 3;
    }

    &:hover ${DeleteIcon} {
        cursor: ${(props) => props.name === 'undiscovered' ? 'default' : 'pointer'};
        visibility: ${(props) => (props.x == 0 && props.y == 0) ? 'hidden' : 'visible'}
    }
`;