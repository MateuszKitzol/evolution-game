import React, {Fragment, useContext, useEffect, useState} from 'react';
import { Sidebar } from './Sidebar/Sidebar.jsx';
import { Sandbox } from './Sandbox/Sandbox.jsx';
import * as S from './styles';
import { listOfItems, listOfInitialItems } from '../../../public/listOfItems.js';
import { NewDiscoveryAlert } from './NewDiscoveryAlert/newDiscoveryAlert.jsx';

export const MainPage = () => {
    const[itemsAmounts, setItemsAmounts] = useState(listOfItems.map(item => {return {name: item,
                                                                                     amount: 0}}));
    const[discoveredItems, setDiscoveredItems] = useState(listOfItems.map(item => {return {name: item, 
                                                                                           discovered: listOfInitialItems.includes(item)}}));
    const[newDiscovery, setNewDiscovery] = useState(null);

    return(
        <Fragment>
            <S.MainPage>
                <Sidebar stateChanger={setItemsAmounts} itemsAmounts={itemsAmounts} discoveredItems={discoveredItems}/>
                <Sandbox discoveredItemsStateChanger={setDiscoveredItems} itemsAmounts={itemsAmounts} discoveredItems={discoveredItems} newDiscoveryStateChanger={setNewDiscovery}/>
                {newDiscovery && <NewDiscoveryAlert name={newDiscovery}/>}
            </S.MainPage>
        </Fragment>
    );
}