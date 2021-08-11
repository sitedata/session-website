import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';

export interface IContainerSizes {
  sm: string;
  md: string;
  lg: string;
}

interface Props {
  height?: IContainerSizes;
  classes?: string;
  children: ReactNode;
}

export default function Container(props: Props): ReactElement {
  const { height, classes, children } = props;
  // TODO Add screenhook support
  return (
    <div
      className={classNames(
        'container mx-auto mt-12 max-w-6xl p-6',
        'md:p-12',
        'lg:my-0 lg:py-0 lg:px-10',
        classes
      )}
      style={{ height: height && `calc(${height.lg})` }}
    >
      {children}
    </div>
  );
}
