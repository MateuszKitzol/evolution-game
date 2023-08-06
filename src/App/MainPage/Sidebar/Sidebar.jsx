import React, { UseContext } from 'react';
import { Ingredients } from './Ingredients/Ingredients.jsx';
import * as S from './styles';

export const Sidebar = () => {
    return(
        <S.Sidebar>
            Evolution Game
            <Ingredients/>
        </S.Sidebar>
    )
}