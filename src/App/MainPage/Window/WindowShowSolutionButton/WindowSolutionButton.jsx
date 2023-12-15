import React, { useState, UseContext, useEffect } from 'react';
import * as S from './styles.js'
import { recipesAsObj } from '../../../../../public/recipes.js';

const createStrBasedOnObj = (obj, item) => {
    return Object.keys(recipesAsObj[item]).map(key => `${recipesAsObj[item][key]}*${key}`).join(" + ")
}

export const WindowSolutionButton = ({item, stateChanger}) => {  
    
    const onClickEventHandler = () => {
        stateChanger(x => false);
    }

    console.log(JSON.stringify(recipesAsObj[item]))

    return (        
        <S.WindowSolutionButton onClick={onClickEventHandler} name='key' item={createStrBasedOnObj(recipesAsObj, item)}>
        </S.WindowSolutionButton>
    )
}