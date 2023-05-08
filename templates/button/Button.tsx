import classNames from 'classnames';
import * as React from 'react';
import { FC } from 'react';

const ButtonVariant = ['contained', 'outlined', 'text'] as const;

interface Props {
  children: string;
  variant?: (typeof ButtonVariant)[number];
  type?: 'button' | 'submit' | 'reset';
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = (props): JSX.Element => {
  const {
    children,
    variant = 'contained',
    onClick,
    type = 'button',
    color = 'primary',
  } = props;

  const variantStyle = {
    contained: `py-1 px-2 rounded-sm bg-${color} text-white hover:bg-opacity-75`,
    outlined: ` py-1 px-2 rounded-sm border border-3 border-${color} text-${color} hover:bg-${color} hover:bg-opacity-10`,
    text: `py-1 px-2 rounded-sm text-${color} hover:bg-${color} hover:bg-opacity-10`,
  };

  return (
    <button
      className={classNames(variantStyle[variant], 'font-semibold')}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
