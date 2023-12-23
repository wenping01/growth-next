import { MouseEventHandler } from 'react';
import { Url } from 'url';

export interface CustomButtonProps {
  title: String;
  containerStyle?: String;
  iconComponent?: React.ReactNode;
  btnType?: 'button' | 'submit';
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export interface NavItemProps {
  title: String;
  href: string;
}

export interface NavProps {
  navProps?: NavItemProps[];
}

export interface NavBarProps {
  setOpen(isOpen: boolean): void;
  navBarProps?: NavItemProps[];
}

export interface CardToastProps {
  title: String;
  description: String;
  times: String;
  btnText: String;
  href: string;
}

export interface InputProps {
  title?: String;
  placeholder?: String;
  type?: 'text' | 'textarea';
}
