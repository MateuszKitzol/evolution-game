import React, { useState, UseContext, useEffect } from 'react';
import * as S from './styles.js'

export const getIconPath = (name) => {
    return `/public/icons/${name}.png`;
};

export const Button = ({name}) => {

    const path = getIconPath(name);

    return (        
        <S.Button path={path}/>
    )
}