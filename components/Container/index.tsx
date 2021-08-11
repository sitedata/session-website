import { ReactElement, ReactNode } from 'react';
import classNames from 'classnames';
import { useScreen } from '@/contexts/screen';

export interface IContainerSizes {
  sm: string;
  md: string;
  lg: string;
}

interface Props {
  heights?: IContainerSizes;
  classes?: string;
  children: ReactNode;
}

export default function Container(props: Props): ReactElement {
  const { heights, classes, children } = props;
  const { isMobile, isTablet, isDesktop } = useScreen();
  const height: string | undefined = (() => {
    if (isMobile) return heights?.sm;
    if (isTablet) return heights?.md;
    if (isDesktop) return heights?.lg;
  })();
  return (
    <div
      className={classNames(
        'container mx-auto max-w-6xl p-6',
        'md:p-12',
        'lg:py-0 lg:px-10',
        classes
      )}
      style={{ height: height && `calc(${height})` }}
    >
      {children}
    </div>
  );
}
