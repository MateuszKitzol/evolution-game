import React, { UseContext, useRef } from 'react';
import * as S from './styles';
import Draggable from 'react-draggable';



const getImagePath = (name) => {
    return `/public/itemsImages/${name}.jpg`;
};

export const Item = ({ name, stateChanger, sidebar, x, y }) => {
    const path = getImagePath(name);
    const ref = useRef(null);

    /*
    const onMouseDownEventHandler = (event) => {
        stateChanger((list) => {
            const indexToChange = list.findIndex(x => x.name == name);
            console.log(indexToChange);
            return list.map((obj, index) => {
                if(index === parseInt(indexToChange)){
                    console.log('in')
                    return {...obj, amount: obj.amount+1};
                }
                return obj;
            })
        });
    }; 
    */

    const onMouseUpEventHandler = (event) => {
        let rect;
        if (ref.current)
            rect = ref.current.getClientRects();

        stateChanger((list) => {
            const indexToChange = list.findIndex(x => x.name == name);
            console.log(indexToChange);
            return list.map((obj, index) => {
                if(index === parseInt(indexToChange)){
                    console.log(rect.top);
                    console.log(rect.left);
                    return {...obj, amount: obj.amount+1, positions: [...obj.positions, {x: rect.x, y: rect.y}]};
                }
                return obj;
            })
        });
        

    }
       
    return(
        <Draggable onStart={onMouseUpEventHandler}>
            <S.Item path={path} name={name} ref={ref} sidebar={sidebar} x={x} y={y}/>
        </Draggable>
    );
}