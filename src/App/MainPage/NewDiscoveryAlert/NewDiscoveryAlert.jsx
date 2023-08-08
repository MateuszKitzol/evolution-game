import React, { useState, UseContext } from 'react';
import { Item } from './Item/Item.jsx';
import * as S from './styles.js'

export const NewDiscoveryAlert = ({name, stateChanger, discoveredItems}) => {

    return (
        <S.ItemStack>
            {Array.from(Array(20).keys()).map((index) => <Item key={index}
                                                               name={name}
                                                               stateChanger={stateChanger}/>)}
        </S.ItemStack>
    )
}