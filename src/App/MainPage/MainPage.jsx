import React, {Fragment, useContext, useEffect} from 'react';
import { Ingredients } from './Ingredients/Ingredients.jsx';
import { Sandbox } from './Sandbox/Sandbox.jsx';
import * as S from './styles';

export const MainPage = () => {
    return(
        <Fragment>
            <S.MainPage>
                <Ingredients/>
                <Sandbox/>
            </S.MainPage>
        </Fragment>
    );
}