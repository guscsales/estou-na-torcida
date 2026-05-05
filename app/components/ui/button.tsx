import classNames from 'classnames';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type CommonProps = {
  as?: 'a' | 'button';
  children: ReactNode;
  className?: string;
  loading?: boolean;
  textClassName?: string;
  variant?: 'primary' | 'custom';
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const baseClassName =
  'inline-flex items-center justify-center rounded-lg px-5 py-3 font-bold transition-colors duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-70';

const variantClassNames = {
  primary:
    'bg-emerald-500 text-gray-50 hover:bg-emerald-600 active:bg-emerald-700',
  custom: '',
};

export function Button({
  as = 'button',
  children,
  className,
  disabled,
  loading = false,
  textClassName,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const Component = as;
  const isDisabled = disabled || loading;

  return (
    <Component
      className={classNames(baseClassName, variantClassNames[variant], className)}
      disabled={as === 'button' ? isDisabled : undefined}
      aria-disabled={as === 'a' && isDisabled ? true : undefined}
      {...props}
    >
      {loading && (
        <span
          aria-hidden
          className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
        />
      )}
      <span className={textClassName}>{children}</span>
    </Component>
  );
}
