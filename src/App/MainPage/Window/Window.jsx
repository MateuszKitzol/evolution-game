import React, { UseContext } from 'react';
import * as S from './styles';
import {gameRulesHeading, gameRulesMainText} from "../../../../public/infoTexts.js"
import { WindowExitButton } from './WindowExitButton/WindowExitButton.jsx';
import { hints } from '../../../../public/hints.js';
import { WindowSolutionButton } from './WindowShowSolutionButton/WindowSolutionButton';

export const Window = ({name, stateChanger, itemToBeDiscovered}) => {

    return(
        <S.Window>
            {name == 'info' ? 
            <>
                <h2>{gameRulesHeading}</h2>
                <p>{gameRulesMainText}</p>
                <WindowExitButton text={'Get back to game'} stateChanger={stateChanger}/>
            </>
            : 
            <>
                <h2>Hint:</h2>
                {hints[itemToBeDiscovered].map(x => <><span>{x}</span><br/></>)}
                <br/>
                <WindowSolutionButton text={'Get solution'} item={itemToBeDiscovered}/>
                <WindowExitButton text={'Get back to game'} stateChanger={stateChanger}/>
            </>}
        </S.Window>
    )
}