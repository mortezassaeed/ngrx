import { Component, OnInit } from '@angular/core';
import { Store , select} from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import {selectUserList} from '../store/selectors/user.selectors';
import { GetUsers } from '../store/actions/user.actions';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private _store: Store<IAppState>) { }

  user$ = this._store.lift(select(selectUserList))

  ngOnInit() {
    this._store.dispatch(new GetUsers())
  }

}
