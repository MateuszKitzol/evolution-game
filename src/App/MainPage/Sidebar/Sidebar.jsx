import React, { UseContext } from 'react';
import { Items } from './Items/Items.jsx';
import * as S from './styles';

export const Sidebar = ({stateChanger, itemsAmounts, discoveredItems}) => {
    return(
        <S.Sidebar>
            Evolution Game
            <Items stateChanger={stateChanger} itemsAmounts={itemsAmounts} discoveredItems={discoveredItems}/>
        </S.Sidebar>
    )
}