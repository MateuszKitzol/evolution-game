import React, {Fragment, useContext, useEffect, useState} from 'react';
import { Sidebar } from './Sidebar/Sidebar.jsx';
import { Sandbox } from './Sandbox/Sandbox.jsx';
import * as S from './styles';
import { listOfItems } from '../../../public/listOfItems.js';
import { Item } from './Sidebar/Items/ItemStack/Item/Item.jsx';

export const MainPage = () => {
    const[itemsAmounts, setItemsAmounts] = useState(listOfItems.map(item => {return {name: item, amount: 0}}));

    console.log(itemsAmounts);

    return(
        <Fragment>
            <S.MainPage>
                <Sidebar stateChanger={setItemsAmounts} itemsAmounts={itemsAmounts}/>
                <Sandbox stateChanger={setItemsAmounts} itemsAmounts={itemsAmounts}/>
            </S.MainPage>
        </Fragment>
    );
}