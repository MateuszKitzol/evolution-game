import React, { useState, UseContext } from 'react';
import { ItemStack } from './ItemStack/ItemStack.jsx';
import * as S from './styles.js'

export const Items = ({stateChanger, itemsAmounts, discoveredItems, $shadowed, $resetPositions, resetPositionsStateChanger}) => {

    return (
        <S.Items>
            {discoveredItems.map((item, index) => <ItemStack name={item.discovered ? item.name : 'undiscovered'} 
                                                             index={index}
                                                             key={index}
                                                             stateChanger={stateChanger}
                                                             discoveredItems={discoveredItems}
                                                             $shadowed={$shadowed}
                                                             $resetPositions={$resetPositions}
                                                             resetPositionsStateChanger={resetPositionsStateChanger}/>)}
        </S.Items>
    )
}