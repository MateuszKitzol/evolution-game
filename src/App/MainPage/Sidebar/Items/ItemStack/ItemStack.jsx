import React, { useState, UseContext } from 'react';
import { Item } from './Item/Item.jsx';
import * as S from './styles.js'

export const ItemStack = ({name, stateChanger, itemsAmounts}) => {

    return (
        <S.ItemStack>
            {Array.from(Array(20).keys()).map((index) => <Item key={index}
                                                               name={name}
                                                               stateChanger={stateChanger}
                                                               sidebar={true}
                                                               x={0}
                                                               y={0}/>)}
        </S.ItemStack>
    )
}