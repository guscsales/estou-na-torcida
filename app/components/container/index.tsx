import classNames from 'classnames';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function Container({
  children,
  ...props
}: Props & React.HTMLAttributes<HTMLElement>) {
  const className = classNames(
    'w-full sm:w-[1400px] px-2 sm:px-4 sm:mx-auto',
    props.className
  );

  return (
    <section {...props} className={className}>
      {children}
    </section>
  );
}
