import React, { useState, UseContext, useEffect } from 'react';
import { getImagePath } from '../Sidebar/Items/ItemStack/Item/Item.jsx';
import * as S from './styles.js'

export const NewDiscoveryAlert = ({name}) => {

    const path = getImagePath(name);
    console.log(name);

    return (
        
        <S.NewDiscoveryAlert key={name} name={name} path={path}/>
    )
}