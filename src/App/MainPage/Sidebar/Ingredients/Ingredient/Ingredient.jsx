import React, { UseContext } from 'react';
import * as S from './styles';

const getImagePath = (name) => {
    return `/public/ingredientsImages/${name}.jpg`;
};


export const Ingredient = ({ name }) => {
    const path = getImagePath(name);

    return(
        <S.Ingredient path={path} name={name}>
            
        </S.Ingredient>
    )
}