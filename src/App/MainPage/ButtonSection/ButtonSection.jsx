import React, { useState, UseContext, useEffect } from 'react';
import * as S from './styles.js'
import { Button } from './Button/Button.jsx';

export const ButtonSection = ({$shadowed, stateChanger, itemsAmountsStateChanger}) => {

    return (        
        <S.ButtonSection $shadowed={$shadowed}>
            <Button name='clear' stateChanger={stateChanger} itemsAmountsStateChanger={itemsAmountsStateChanger} $shadowed={$shadowed}/>
            <Button name='hint' stateChanger={stateChanger} itemsAmountsStateChanger={itemsAmountsStateChanger} $shadowed={$shadowed}/>
            <Button name='info' stateChanger={stateChanger} itemsAmountsStateChanger={itemsAmountsStateChanger} $shadowed={$shadowed}/>
        </S.ButtonSection>
    )
}

//<Button name='tip' stateChanger={stateChanger} $shadowed={$shadowed}/>