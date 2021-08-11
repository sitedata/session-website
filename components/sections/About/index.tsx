import { ReactElement } from 'react';
import classNames from 'classnames';
import redact from '@/utils/redact';

import Container from '@/components/Container';
import { Headline } from '@/components/ui';

export default function About(): ReactElement {
  const redactedClasses = redact({
    redactColor: 'primary',
    textColor: 'white',
    animate: true,
    classes: 'p-1',
  });
  return (
    <section className="text-white bg-gray-dark">
      <Headline
        classes={classNames('text-lg font-semibold pt-16', 'lg:pt-20')}
        containerWidths={{
          sm: '10rem',
          md: '34rem',
          lg: '67rem',
        }}
      >
        What is Session?
      </Headline>
      {/* Full screen height - Headline height */}
      <Container
        height={{
          sm: '100vh - 28px',
          md: '100vh - 28px',
          lg: '100vh - 28px',
        }}
        classes={
          'flex flex-col justify-center items-center -mt-8 lg:items-start'
        }
      >
        <p
          className={classNames(
            'group text-white text-lg font-light leading-10 my-12',
            'md:text-4xl md:leading-relaxed md:ml-16',
            'lg:my-0 lg:ml-0 lg:max-w-2xl'
          )}
        >
          Session is an <span className={redactedClasses}>end-to-end</span>{' '}
          encrypted messenger that minimises{' '}
          <span className={redactedClasses}>sensitive</span> metadata,{' '}
          <span className={redactedClasses}>designed and built</span> for people
          who want <span className={redactedClasses}>absolute</span> privacy and
          freedom from <span className={redactedClasses}>any form of</span>{' '}
          surveillance.
        </p>
      </Container>
    </section>
  );
}
