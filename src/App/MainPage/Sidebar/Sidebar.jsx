import React, { UseContext } from 'react';
import { Items } from './Items/Items.jsx';
import * as S from './styles';

export const Sidebar = ({stateChanger, itemsAmounts, discoveredItems, $shadowed, $resetPositions, resetPositionsStateChanger}) => {

    return(
        <S.Sidebar $shadowed={$shadowed}>
            Evolution Game
            <Items stateChanger={stateChanger} 
                   itemsAmounts={itemsAmounts} 
                   discoveredItems={discoveredItems}
                   $shadowed={$shadowed}
                   $resetPositions={$resetPositions}
                   resetPositionsStateChanger={resetPositionsStateChanger}/>
        </S.Sidebar>
    )
}