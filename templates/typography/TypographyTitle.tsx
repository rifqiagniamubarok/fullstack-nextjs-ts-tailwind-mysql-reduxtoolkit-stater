import { FC } from 'react';
import classNames from 'classnames';

const titleLevel = [1, 2, 3, 4, 5] as const;

interface Props {
  children: string;
  level: (typeof titleLevel)[number];
}

const TypographyTitle: FC<Props> = (props): JSX.Element => {
  const { children, level = 1 } = props;
  const styleTitle = {
    1: 'text-lg md:text-xl font-medium',
    2: 'text-xl md:text-2xl  font-medium',
    3: 'text-2xl md:text-3xl font-medium',
    4: 'text3xl md:text-4xl font-medium md:font-semibold',
    5: 'text-4xl md:text-5xl font-semibold md:font-bold',
    6: 'text5xl md:text-6xl font-semibold md:font-bold',
  };
  return <div className={classNames(styleTitle[level])}>{children}</div>;
};

export default TypographyTitle;
