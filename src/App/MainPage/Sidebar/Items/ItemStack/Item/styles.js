import styled from 'styled-components';
import { DeleteIcon } from './DeleteIcon/styles';   
import adenineImage from '../../../../../../../public/items/adenine.jpg';
import carbonImage from '../../../../../../../public/items/carbon.jpg';
import cytosineImage from '../../../../../../../public/items/cytosine.jpg';
import dnaImage from '../../../../../../../public/items/dna.jpg';
import electronImage from '../../../../../../../public/items/electron.jpg';
import guanineImage from '../../../../../../../public/items/guanine.jpg';
import hydrogenImage from '../../../../../../../public/items/hydrogen.jpg';
import neutronImage from '../../../../../../../public/items/neutron.jpg';
import nitrogenImage from '../../../../../../../public/items/nitrogen.jpg';
import oxygenImage from '../../../../../../../public/items/oxygen.jpg';
import protonImage from '../../../../../../../public/items/proton.jpg';
import thymineImage from '../../../../../../../public/items/thymine.jpg';
import undiscoveredImage from '../../../../../../../public/items/undiscovered.jpg';
import cursorImage from '../../../../../../../public/items/cursor.png';



const importedImages = {
    adenine: adenineImage, 
    carbon: carbonImage,
    cytosine: cytosineImage,
    cursor: cursorImage,
    dna: dnaImage,
    electron: electronImage,
    guanine: guanineImage,
    hydrogen: hydrogenImage,
    neutron: neutronImage,
    nitrogen: nitrogenImage,
    oxygen: oxygenImage,
    proton: protonImage,
    thymine: thymineImage,
    undiscovered: undiscoveredImage
};



export const Item = styled.div`
    background: url(${(props) => importedImages[props.name]});
    background-size: contain; 
    border: 3px solid purple;
    border-radius: 5px;
    min-width: 60px;
    max-width: 60px;
    min-height: 60px;
    max-height: 60px;
    position: absolute;
    z-index: 90;

    &:hover {
        cursor: ${(props) => (props.name === 'undiscovered' || props.$shadowed) ? 'default' : 'pointer'};
        z-index: 100;
    } 
    

    &:hover:after {
        border: 2px solid purple;
        border-radius: 5px;
        color: black;
        background-color: white;
        content: '${(props) => props.name}';
        cursor: ${(props) => (props.name === 'undiscovered' || props.$shadowed) ? 'default' : 'pointer'};
        font-size: 15px;
        position: relative;
        margin: 20px;
        z-index: 100;
        visibility: ${(props) => props.$shadowed ? 'hidden' : 'visible'};
    }

    &:before {
        background-image: url(${(props) => importedImages.cursor});
        background-size: 60px 60px;
        background-repeat: no-repeat;
        content: "";
        display: block;
        height: 100px;
        width: 100px;
        cursor: ${(props) => (props.name === 'undiscovered' || props.$shadowed) ? 'default' : 'pointer'};
        font-size: 15px;
        position: absolute;
        margin: 15px;
        z-index: 100;
        visibility: ${(props) => props.name == "proton" && props.x == 0 && props.y == 0 && props.discovered_number == 3 ? 'visible' : 'hidden'};
        ${(props) => props.name === 'proton' && props.x == 0 && props.y == 0 && props.discovered_number == 3 && `
            opacity: 1;
            transition: all 2s ease 2s;
            left: 0;
            animation: disappear 2s forwards 2s;
        `}
    }

    @keyframes disappear {
        from {
            left: 0;
            visibility: visible;
        }

        to {
            left: 400px;
            visibility: hidden;
        }
    }

    &:hover ${DeleteIcon} {
        cursor: ${(props) => props.name === 'undiscovered' ? 'default' : 'pointer'};
        visibility: ${(props) => (props.x == 0 && props.y == 0) ? 'hidden' : 'visible'};
    }
`;