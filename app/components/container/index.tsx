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
    'w-full xl:w-[1280px] 2xl:w-[1400px] px-2 lg:px-4 lg:mx-auto',
    props.className
  );

  return (
    <section {...props} className={className}>
      {children}
    </section>
  );
}
