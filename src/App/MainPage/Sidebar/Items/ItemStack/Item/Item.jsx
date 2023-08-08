import React, { UseContext, useState } from 'react';
import * as S from './styles';
import Draggable from 'react-draggable';



const getImagePath = (name) => {
    return `/public/itemsImages/${name}.jpg`;
};



export const Item = ({ name, stateChanger}) => {
    const[triggered, setTriggered] = useState(false);

    const path = getImagePath(name);

    const onMouseUpEventHandler = (event) => {
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
            <Draggable onStart={onMouseUpEventHandler}>
                <S.Item path={path} name={name}/>
            </Draggable>
        );
    } else {
        return <S.Item path={path} name={name}/>
    }
}