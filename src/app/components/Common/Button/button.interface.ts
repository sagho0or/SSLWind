import { MouseEventHandler, ReactNode } from 'react';

export interface IButtonProps {
  children?: ReactNode;
  style?: string;
  customStyle?: string;
  onClick?: MouseEventHandler;
  disabled?:boolean
}