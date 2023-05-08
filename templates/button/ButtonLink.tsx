import classNames from 'classnames';
import Link from 'next/link';
import * as React from 'react';
import { FC } from 'react';

const ButtonVariant = ['contained', 'outlined', 'text'] as const;

interface Props {
  children: string;
  variant?: (typeof ButtonVariant)[number];
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  href?: string;
  openNewTab?: boolean;
  color?: string;
}

const ButtonLink: FC<Props> = (props): JSX.Element => {
  const {
    children,
    variant = 'contained',
    onClick,
    type = 'button',
    href = '/',
    openNewTab = false,
    color = 'primary',
  } = props;
  const variantStyle = {
    contained: `py-1 px-2 rounded-sm bg-${color} text-white hover:bg-opacity-75`,
    outlined: ` py-1 px-2 rounded-sm border border-3 border-${color} text-${color} hover:bg-${color} hover:bg-opacity-10`,
    text: `py-1 px-2 rounded-sm text-${color} hover:bg-${color} hover:bg-opacity-10`,
  };

  return (
    <Link href={href} passHref={openNewTab} legacyBehavior={openNewTab}>
      {openNewTab ? (
        <a target="_blank" rel="noopener noreferrer">
          <button
            className={classNames(variantStyle[variant], 'font-semibold')}
            onClick={onClick}
            type={type}
          >
            {children}
          </button>
        </a>
      ) : (
        <button
          className={classNames(variantStyle[variant], 'font-semibold')}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      )}
    </Link>
  );
};

export default ButtonLink;
