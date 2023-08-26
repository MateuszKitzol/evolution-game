import React, { useState, UseContext, useEffect } from 'react';
import * as S from './styles.js'

export const getIconPath = (name) => {
    return `/public/icons/${name}.png`;
};

export const Button = ({name, stateChanger, itemsAmountsStateChanger, $shadowed}) => {

    const path = getIconPath(name);

    const onClickEventHandler = () => {
        if(name != 'clear')
            stateChanger(x => name);
        else
            itemsAmountsStateChanger(items => items.map(x => { return {name: x.name, amount: 0}}));
    }

    return (        
        <S.Button path={path} onClick={onClickEventHandler} $shadowed={$shadowed}/>
    )
}