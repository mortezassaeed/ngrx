import { IConfig } from '../../models/IConfig';


export const initialConfigState: IConfigState = {
    config: null
}

export interface IConfigState{
    config: IConfig;
}