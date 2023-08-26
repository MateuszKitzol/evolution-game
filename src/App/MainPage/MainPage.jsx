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
    const[itemToBeDiscovered, setItemToBeDiscovered] = useState('carbon');
    const[resetPositions, setResetPositions] = useState(false);
    
    useEffect(() => {
        setItemToBeDiscovered(x => discoveredItems.find(x => !x.discovered).name);
    }, [discoveredItems])

    useEffect(() => {
        console.log(itemsAmounts);
        if(itemsAmounts.every(x => x.amount == 0))
            setResetPositions(x => true);
    }, [itemsAmounts])

    return(
        <Fragment>
            <S.MainPage>
                <Sidebar stateChanger={setItemsAmounts} 
                         itemsAmounts={itemsAmounts}
                         discoveredItems={discoveredItems}
                         $shadowed={windowVisible}
                         $resetPositions={resetPositions}
                         resetPositionsStateChanger={setResetPositions}/>
                <Sandbox discoveredItemsStateChanger={setDiscoveredItems} 
                         itemsAmounts={itemsAmounts} 
                         discoveredItems={discoveredItems} 
                         newDiscoveryStateChanger={setNewDiscovery}
                         $shadowed={windowVisible}
                         />
                {newDiscovery && <NewDiscoveryAlert name={newDiscovery}
                                                    itemsAmountsStateChanger={setItemsAmounts}/>}
                {windowVisible && <Window name={windowVisible}
                                          $shadowed={windowVisible}
                                          stateChanger={setWindowVisible}
                                          itemToBeDiscovered={itemToBeDiscovered}/>}
                <ButtonSection stateChanger={setWindowVisible}
                               itemsAmountsStateChanger={setItemsAmounts}
                               $shadowed={windowVisible}/>
            </S.MainPage>
        </Fragment>
    );
}