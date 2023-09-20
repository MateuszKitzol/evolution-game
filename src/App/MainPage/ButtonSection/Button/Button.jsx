import React, { useState, UseContext, useEffect } from 'react';
import * as S from './styles.js'



export const Button = ({name, stateChanger, itemsAmountsStateChanger, $shadowed}) => {

    const onClickEventHandler = () => {
        if(name != 'clear')
            stateChanger(x => name);
        else
            itemsAmountsStateChanger(items => items.map(x => { return {name: x.name, amount: 0}}));
    }

    return (        
        <S.Button name={name} onClick={onClickEventHandler} $shadowed={$shadowed}/>
    )
}