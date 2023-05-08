import { FC } from 'react';
import classNames from 'classnames';

interface Props {
  children?: string;
  className?: string;
}

const TypographyMini: FC<Props> = (props): JSX.Element => {
  const { children, className } = props;
  return <p className={classNames(className, 'text-base')}>{children}</p>;
};

export default TypographyMini;
