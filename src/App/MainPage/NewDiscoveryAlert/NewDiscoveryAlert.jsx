import React, { useState, UseContext, useEffect } from 'react';
import * as S from './styles.js'

export const NewDiscoveryAlert = ({name, itemsAmountsStateChanger}) => {
    
    useEffect(() => {
        itemsAmountsStateChanger(items => items.map(x => { return {name: x.name, amount: 0}}));
    }, []);

    return (  
        <S.NewDiscoveryAlert key={name} name={name}/>
    )
}