import { ReactElement } from 'react';
import classNames from 'classnames';
import { IContainerSizes } from '@/components/Container';

interface Props {
  color?: 'primary' | 'gray-dark';
  hideLineOnMobile?: boolean;
  containerWidths?: IContainerSizes;
  classes?: string;
  children?: string;
}

export default function Headline(props: Props): ReactElement {
  const {
    color = 'primary',
    hideLineOnMobile = false,
    containerWidths,
    classes,
    children,
  } = props;
  const containerWidth = containerWidths?.lg; // TODO use Screen hook to check size
  const colorClasses = [
    color === 'primary' && 'text-primary',
    color === 'gray-dark' && 'text-gray-dark',
  ];
  const borderClasses = [
    color === 'primary' && 'border-primary',
    color === 'gray-dark' && 'border-gray-dark',
  ];
  return (
    <div className={classNames('flex items-start', classes)}>
      <div
        className={classNames(
          `border-t mt-2 ml-3`,
          borderClasses,
          hideLineOnMobile && 'hidden md:inline'
        )}
        style={{ width: `calc((100vw - ${containerWidth}) / 2)` }}
        // mobile style with screenhook
        // style={{ width: `calc((100vw - ${containerWidth}))` }}
      ></div>
      <div className={'mx-6'}>
        <div
          className={classNames('md:mx-auto', colorClasses)}
          style={{ width: `calc(${containerWidth})` }}
        >
          {children}
        </div>
      </div>
      {/* TODO extend functionality */}
      <div
        className={classNames(
          `border-t mt-2 mr-3`,
          borderClasses,
          'border-none',
          hideLineOnMobile && 'hidden md:inline'
          // mobile style with screenhook
          // 'hidden'
        )}
        style={{ width: `calc((100vw - ${containerWidth}) / 2)` }}
      ></div>
    </div>
  );
}
