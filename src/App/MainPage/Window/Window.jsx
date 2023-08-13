import React, { UseContext } from 'react';
import * as S from './styles';
import {gameRulesHeading, gameRulesMainText} from "./../../../../public/infoTexts.js"
import { WindowButton } from './WindowButton/WindowButton.jsx';

export const Window = ({name, stateChanger}) => {

    return(
        <S.Window>
            {name == 'info' ? 
            <>
                <h2>{gameRulesHeading}</h2>
                <p>{gameRulesMainText}</p>
                <WindowButton text={'Get back to game'} stateChanger={stateChanger}/>
            </> 
            : <>{gameRulesMainText}</>}
        </S.Window>
    )
}