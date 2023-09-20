import styled from 'styled-components';
import adenineImage from '../../../../public/items/adenine.jpg';
import carbonImage from '../../../../public/items/carbon.jpg';
import cytosineImage from '../../../../public/items/cytosine.jpg';
import dnaImage from '../../../../public/items/dna.jpg';
import electronImage from '../../../../public/items/electron.jpg';
import guanineImage from '../../../../public/items/guanine.jpg';
import hydrogenImage from '../../../../public/items/hydrogen.jpg';
import neutronImage from '../../../../public/items/neutron.jpg';
import nitrogenImage from '../../../../public/items/nitrogen.jpg';
import oxygenImage from '../../../../public/items/oxygen.jpg';
import protonImage from '../../../../public/items/proton.jpg';
import thymineImage from '../../../../public/items/thymine.jpg';
import undiscoveredImage from '../../../../public/items/undiscovered.jpg';



const importedImages = {
    adenine: adenineImage, 
    carbon: carbonImage,
    cytosine: cytosineImage,
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



export const NewDiscoveryAlert = styled.div`
    background: url(${(props) => importedImages[props.name]});
    background-size: contain; 
    border: 3px solid purple;
    border-radius: 20px;
    //display: ${(props) => props.visible ? 'block' : 'none'};
    min-width: 300px;
    max-width: 300px;
    min-height: 300px;
    max-height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;

    @keyframes myAnimation{
        0%{
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
        100%{
            display: none;
            opacity: 0;
        }
    }

    animation-name: myAnimation;
    animation-duration: 4000ms;
    animation-fill-mode: forwards;
`;