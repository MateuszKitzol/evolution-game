import styled from 'styled-components';

export const NewDiscoveryAlert = styled.div`
    background: url(${(props) => props.path});
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