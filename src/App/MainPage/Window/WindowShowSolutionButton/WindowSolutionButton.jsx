import React, { useState, UseContext, useEffect } from 'react';
import * as S from './styles.js'
import { getIconPath } from '../../ButtonSection/Button/Button.jsx';

export const WindowSolutionButton = ({item, stateChanger}) => {  

    const path = getIconPath('key');

    const onClickEventHandler = () => {
        stateChanger(x => false);
    }

    return (        
        <S.WindowSolutionButton onClick={onClickEventHandler} path={path} item={item}>
        </S.WindowSolutionButton>
    )
}