import React, { UseContext, useState } from 'react';
import * as S from './styles';


export const DeleteIcon = ({ index, stateChanger }) => {
    const path = "public/closeIcon.png";

    return <S.DeleteIcon path={path} key={index} onClick={stateChanger}/>
}