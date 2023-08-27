import React, { UseContext } from 'react';
import * as S from './styles';
import { gameRulesHeading, gameRulesMainText } from "../../../../public/infoTexts.js"
import { hints } from '../../../../public/hints.js';
import { sources } from '../../../../public/sources.js';
import { WindowExitButton } from './WindowExitButton/WindowExitButton.jsx';
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
            : name == 'hint' ?
            <>
                <h2>Hint:</h2>
                {hints[itemToBeDiscovered].map(x => <><span>{x}</span><br/></>)}
                <br/>
                <WindowSolutionButton text={'Get solution'} item={itemToBeDiscovered}/>
                <WindowExitButton text={'Get back to game'} stateChanger={stateChanger}/>
            </>
            : name == 'sources' ?
            <>
                {Object.keys(sources).map(key => 
                    <>
                        <h2>{key}:</h2>
                        {sources[key].map(x =>
                            <><p>{x}</p><br/></>
                        )}
                        <br/>
                    </>
                )}
                <WindowExitButton text={'Get back to game'} stateChanger={stateChanger}/>
            </>
            :
            <></>
            }
        </S.Window>
    )
}