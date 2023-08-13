import React, {Fragment, useContext, useEffect, useState} from 'react';
import { Sidebar } from './Sidebar/Sidebar.jsx';
import { Sandbox } from './Sandbox/Sandbox.jsx';
import * as S from './styles';
import { listOfItems, listOfInitialItems } from '../../../public/listOfItems.js';
import { NewDiscoveryAlert } from './NewDiscoveryAlert/newDiscoveryAlert.jsx';
import { ButtonSection } from './ButtonSection/ButtonSection.jsx';
import { Window } from './Window/Window.jsx';

export const MainPage = () => {
    const[itemsAmounts, setItemsAmounts] = useState(listOfItems.map(item => {return {name: item,
                                                                                     amount: 0}}));
    const[discoveredItems, setDiscoveredItems] = useState(listOfItems.map(item => {return {name: item, 
                                                                                           discovered: listOfInitialItems.includes(item)}}));
    const[newDiscovery, setNewDiscovery] = useState(null);
    const[windowVisible, setWindowVisible] = useState(false); 

    return(
        <Fragment>
            <S.MainPage>
                <Sidebar stateChanger={setItemsAmounts} 
                         itemsAmounts={itemsAmounts}
                         discoveredItems={discoveredItems}
                         $shadowed={windowVisible}/>
                <Sandbox discoveredItemsStateChanger={setDiscoveredItems} 
                         itemsAmounts={itemsAmounts} 
                         discoveredItems={discoveredItems} 
                         newDiscoveryStateChanger={setNewDiscovery}
                         $shadowed={windowVisible}/>
                {newDiscovery && <NewDiscoveryAlert name={newDiscovery}/>}
                {windowVisible && <Window name={windowVisible}
                                          $shadowed={windowVisible}
                                          stateChanger={setWindowVisible}/>}
                <ButtonSection stateChanger={setWindowVisible}
                               $shadowed={windowVisible}/>
            </S.MainPage>
        </Fragment>
    );
}