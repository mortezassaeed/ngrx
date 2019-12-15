import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { configReducer } from './config.reducer';
import { userReducer } from './user.reducer';


export const appReducer: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: userReducer,
    config: configReducer
}