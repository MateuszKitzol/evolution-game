import React, { UseContext, useState } from 'react';
import * as S from './styles';


export const DeleteIcon = ({ index, stateChanger }) => {
    const path = "public/icons/closeIcon.png";

    return <S.DeleteIcon path={path} key={index} onClick={stateChanger}/>
}