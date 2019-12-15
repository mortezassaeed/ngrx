import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';

import {
    GetUsersSuccess,
    EUserActions,
    GetUserSuccess,
    GetUser,
    GetUsers

} from '../actions/user.actions';

import { USerService } from '../../services/user.service';
import { IUser } from '../../models/Iuser';
import { selectUserList } from '../selectors/user.selectors';


@Injectable()
export class UserEffects {
    constructor(
        private _userService: USerService,
        private _action$: Actions,
        private _store: Store<IAppState>
    ) { }
    
    //@Effect()
    // getUser$ = this._action$.pipe(
    //     ofType<GetUsers>(EUserActions.GetUser),
    //     map(action => action.payload),
    //     withLatestFrom(this._store.pipe(select(selectUserList))),
    //     switchMap(([id, users]) => {
    //         const selectUser = users.filter(user => user.id ===+ id)[0];
    //         return of(new GetUserSuccess(selectedUser));
    //     })
    // );

   


}
