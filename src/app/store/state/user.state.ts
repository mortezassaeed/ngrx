import { IUser } from '../../models/IUser';


export const initialUserState: IUserState = {
    users: null,
    selectedUser : null
}

export interface IUserState{
    users: IUser[];
    selectedUser: IUser;
}