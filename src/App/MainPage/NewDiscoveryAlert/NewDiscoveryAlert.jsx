import React, { useState, UseContext, useEffect } from 'react';
import { getImagePath } from '../Sidebar/Items/ItemStack/Item/Item.jsx';
import * as S from './styles.js'

export const NewDiscoveryAlert = ({name, itemsAmountsStateChanger}) => {

    const path = getImagePath(name);
    
    useEffect(() => {
        itemsAmountsStateChanger(items => items.map(x => { return {name: x.name, amount: 0}}));
    }, []);

    return (  
        <S.NewDiscoveryAlert key={name} name={name} path={path}/>
    )
}