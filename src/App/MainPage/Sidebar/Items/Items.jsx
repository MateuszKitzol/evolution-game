import React, { useState, UseContext } from 'react';
import { ItemStack } from './ItemStack/ItemStack.jsx';
import * as S from './styles.js'

export const Items = ({stateChanger, itemsAmounts}) => {

    console.log(itemsAmounts);

    return (
        <S.Items>
            {itemsAmounts.map((item, index) => <ItemStack name={item.name} 
                                                          index={index}
                                                          stateChanger={stateChanger}
                                                          itemsAmounts={itemsAmounts}/>)}
        </S.Items>
    )
}