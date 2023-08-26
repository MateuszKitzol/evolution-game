import React, { useState, UseContext, useEffect } from 'react';
import * as S from './styles.js'

export const WindowExitButton = ({text, stateChanger}) => {

    const onClickEventHandler = () => {
        stateChanger(x => false);
    }

    return (        
        <S.WindowExitButton onClick={onClickEventHandler}>
            <div>{text}</div>
        </S.WindowExitButton>
    )
}