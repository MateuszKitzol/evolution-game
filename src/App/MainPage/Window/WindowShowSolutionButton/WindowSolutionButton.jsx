import React, { useState, UseContext, useEffect } from 'react';
import * as S from './styles.js'

export const WindowSolutionButton = ({item, stateChanger}) => {  

    const onClickEventHandler = () => {
        stateChanger(x => false);
    }

    return (        
        <S.WindowSolutionButton onClick={onClickEventHandler} name='key' item={item}>
        </S.WindowSolutionButton>
    )
}