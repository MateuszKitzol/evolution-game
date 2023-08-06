import React, {Fragment, useContext, useEffect} from 'react';
import { Sidebar } from './Sidebar/Sidebar.jsx';
import { Sandbox } from './Sandbox/Sandbox.jsx';
import * as S from './styles';

export const MainPage = () => {
    return(
        <Fragment>
            <S.MainPage>
                <Sidebar/>
                <Sandbox/>
            </S.MainPage>
        </Fragment>
    );
}