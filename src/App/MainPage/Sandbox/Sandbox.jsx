import React, { UseContext, useState, useEffect } from 'react';
import { Item } from '../Sidebar/Items/ItemStack/Item/Item.jsx';
import * as S from './styles';
import { recipesAsArr, recipesAsObj } from '../../../../public/recipes.js';

const areArrayEqual = (a, b) => {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

const itemsAmountsToRecipeArr = (arr) => {
    let newArr = [];

    for (let i = 0; i < arr.length; i++)
        for(let j = 0; j < arr[i].amount; j++)
            newArr.push(arr[i].name);

    return newArr.sort();
}



export const Sandbox = ({discoveredItemsStateChanger, newDiscoveryStateChanger, itemsAmounts, discoveredItems, $shadowed}) => {

    const[composition, setComposition] = useState(itemsAmountsToRecipeArr(itemsAmounts));

    useEffect(() => {
        let discovery = recipesAsArr.find(x => areArrayEqual(x.recipe, composition));

        if(discovery){
            let discoveryName = discovery.item;

            if(!discoveredItems.indexOf(discoveryName).discovered){

                discoveredItemsStateChanger(discoveries =>
                    discoveries.map(obj => {
                        if(obj.name === discoveryName){
                            return {...obj, discovered: true}
                        }
                        else
                            return obj;
                    })
                )
                newDiscoveryStateChanger(x => discoveryName);
            }
        }
    }, [composition]);

    useEffect(() => {
        setComposition(x => itemsAmountsToRecipeArr(itemsAmounts));
    }, [itemsAmounts]);

    return(
        <S.Sandbox $shadowed={$shadowed}>
        </S.Sandbox>
    )
}