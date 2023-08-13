import React, { useState, UseContext, useEffect } from 'react';
import * as S from './styles.js'

export const getIconPath = (name) => {
    return `/public/icons/${name}.png`;
};

export const Button = ({name, stateChanger, $shadowed}) => {

    const path = getIconPath(name);

    const onClickEventHandler = () => {
        stateChanger(x => name);
    }

    return (        
        <S.Button path={path} onClick={onClickEventHandler} $shadowed={$shadowed}/>
    )
}