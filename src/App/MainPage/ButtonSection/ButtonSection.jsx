import React, { useState, UseContext, useEffect } from 'react';
import * as S from './styles.js'
import { Button } from './Button/Button.jsx';

export const ButtonSection = () => {

    return (        
        <S.ButtonSection>
            <Button name='info'/>
            <Button name='tip'/>
        </S.ButtonSection>
    )
}