import React, { UseContext } from 'react';
import * as S from './styles';
import Draggable from 'react-draggable';



const getImagePath = (name) => {
    return `/public/itemsImages/${name}.jpg`;
};



export const Item = ({ name, stateChanger}) => {
    const path = getImagePath(name);

    const onMouseUpEventHandler = (event) => {
        stateChanger((list) => {
            const indexToChange = list.findIndex(x => x.name == name);
            console.log(indexToChange);
            return list.map((obj, index) => {
                if(index === parseInt(indexToChange))
                    return {...obj, amount: obj.amount+1};
                return obj;
            })
        });
    }
       
    return(
        <Draggable onStart={onMouseUpEventHandler}>
            <S.Item path={path} name={name}/>
        </Draggable>
    );
}