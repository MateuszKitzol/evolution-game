import React, { useState, UseContext, useEffect } from 'react';
import * as S from './styles.js'
import { Button } from './Button/Button.jsx';

export const ButtonSection = ({$shadowed, stateChanger}) => {

    return (        
        <S.ButtonSection $shadowed={$shadowed}>
            <Button name='info' stateChanger={stateChanger} $shadowed={$shadowed}/>
        </S.ButtonSection>
    )
}

//<Button name='tip' stateChanger={stateChanger} $shadowed={$shadowed}/>