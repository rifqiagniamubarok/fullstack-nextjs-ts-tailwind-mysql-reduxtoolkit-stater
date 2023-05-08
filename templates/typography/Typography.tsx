import { FC } from 'react';
import classNames from 'classnames';

interface Props {
  children?: string;
  className?: string;
}

const Typography: FC<Props> = (props): JSX.Element => {
  const { children, className } = props;
  return (
    <p className={classNames(className, 'text-sm md:text-base')}>{children}</p>
  );
};

export default Typography;
