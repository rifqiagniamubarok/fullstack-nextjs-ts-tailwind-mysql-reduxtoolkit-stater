import classNames from 'classnames';
import React, { FC } from 'react';

const ButtonVariant = ['contained', 'outlined', 'ghost'] as const;

interface Props {
  children: string;
  variant?: (typeof ButtonVariant)[number];
}

const Button: FC<Props> = (props): JSX.Element => {
  const { children, variant = 'contained' } = props;
  const variantStyle = {
    contained:
      'py-1 px-2 rounded-sm bg-primary-main text-white hover:bg-opacity-75',
    outlined:
      'py-1 px-2 rounded-sm border borde-3 border-primary-main text-primary-main hover:bg-primary-soft hover:bg-opacity-25',
    ghost:
      'py-1 px-2 rounded-sm text-primary-main hover:bg-primary-soft hover:bg-opacity-25',
  };

  return (
    <button className={classNames(variantStyle[variant], 'font-semibold')}>
      {children}
    </button>
  );
};

export default Button;
