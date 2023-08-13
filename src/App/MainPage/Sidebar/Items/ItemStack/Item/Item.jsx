import React, { UseContext, useEffect, useState } from 'react';
import * as S from './styles';
import Draggable from 'react-draggable';
import { DeleteIcon } from './DeleteIcon/DeleteIcon.jsx';


export const getImagePath = (name) => {
    return `/public/itemsImages/${name}.jpg`;
};

const initialPosition = { x: 0, y: 0 };



export const Item = ({ name, stateChanger, index, $shadowed}) => {
    const[triggered, setTriggered] = useState(false);
    const [position, setPosition] = useState(initialPosition);

    const path = getImagePath(name);

    const resetPosition = () => {
        setTriggered(x => false);
        setPosition(x => initialPosition);

        stateChanger((list) => {
            const indexToChange = list.findIndex(x => x.name == name);
            return list.map((obj, index) => {
                if(index === parseInt(indexToChange))
                    return {...obj, amount: obj.amount-1};
                return obj;
            })
        });
    };

    const onStopEventHandler = (event, data) => {
        setPosition(x => {return { x: data.x, y: data.y }});

        if(!triggered && name != 'undiscovered'){
            setTriggered(x => true);

            stateChanger((list) => {
                const indexToChange = list.findIndex(x => x.name == name);
                return list.map((obj, index) => {
                    if(index === parseInt(indexToChange))
                        return {...obj, amount: obj.amount+1};
                    return obj;
                })
            });
        }
    }

    if(name != 'undiscovered'){
        return( 
            <Draggable onStop={onStopEventHandler} position={position} defaultPosition={initialPosition}>
                <S.Item path={path} name={name} x={position.x} y={position.y} $shadowed={$shadowed}> 
                    <DeleteIcon index={index} key={index} stateChanger={resetPosition}/>
                </S.Item>
            </Draggable>);
    } else {
        return <S.Item path={path} name={name} $shadowed={$shadowed}/>
    }
}