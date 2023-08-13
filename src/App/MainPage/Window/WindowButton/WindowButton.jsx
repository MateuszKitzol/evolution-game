import React, { useState, UseContext, useEffect } from 'react';
import * as S from './styles.js'

export const WindowButton = ({text, stateChanger}) => {

    const onClickEventHandler = () => {
        stateChanger(x => false);
    }

    return (        
        <S.WindowButton onClick={onClickEventHandler}>
            <div>{text}</div>
        </S.WindowButton>
    )
}