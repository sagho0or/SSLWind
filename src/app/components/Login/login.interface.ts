import { Dispatch } from 'redux';
import { StateInterface } from '@/store/_interfaces/state.interface';

export interface LoginComponentInterface{
  dispatch: Dispatch,
  loginState: StateInterface
}