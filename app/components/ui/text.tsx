import classNames from 'classnames';
import type { ElementType, HTMLAttributes, ReactNode } from 'react';

const headingTags = new Set([
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
]);

function isHeadingComponent(component: ElementType) {
  return typeof component === 'string' && headingTags.has(component);
}

type TextProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  variant?: string;
};

const variantClasses: Record<string, string> = {
  xs: 'text-xs leading-4',
  sm: 'text-sm leading-5',
  base: 'text-base leading-6',
  xl: 'text-xl leading-7',
  '2xl': 'text-2xl leading-8',
  '3xl': 'text-3xl leading-tight',
  '4xl': 'text-4xl leading-tight',
  '5xl': 'text-5xl leading-tight',
  '6xl': 'text-6xl leading-tight',
};

function mapVariantToken(token: string) {
  const [prefix, value] = token.includes(':') ? token.split(':') : ['', token];
  const classes = variantClasses[value];

  if (!classes) return token;
  if (!prefix) return classes;

  return classes
    .split(' ')
    .map((className) => `${prefix}:${className}`)
    .join(' ');
}

export function Text({
  as: Component = 'span',
  children,
  className,
  variant = 'base',
  ...props
}: TextProps) {
  return (
    <Component
      className={classNames(
        'font-sans',
        isHeadingComponent(Component) && 'font-bold',
        variant.split(' ').map(mapVariantToken).join(' '),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
