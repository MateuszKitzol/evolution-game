import React, { UseContext } from 'react';
import { Ingredient } from './Ingredient/Ingredient.jsx';
import * as S from './styles';

export const Ingredients = () => {
    return(
        <S.Ingredients>
            <Ingredient name='electron'/>
            <Ingredient name='proton'/>
            <Ingredient name='neutron'/>
            <Ingredient name='hydrogen'/>
            <Ingredient name='carbon'/>
            <Ingredient name='nitrogen'/>
            <Ingredient name='oxygen'/>
            <Ingredient name='adenine'/>
            <Ingredient name='cytosine'/>
            <Ingredient name='guanine'/>
            <Ingredient name='tymine'/>
            <Ingredient name='dna'/>
            <Ingredient name='undiscovered'/>
            <Ingredient name='undiscovered'/>
            <Ingredient name='undiscovered'/>
        </S.Ingredients>
    )
}