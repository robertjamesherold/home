import type { FC, PropsWithChildren } from 'react';

type FormProps = PropsWithChildren<{
  className?: string;
}> & React.FormHTMLAttributes<HTMLFormElement>;

const Form: FC<FormProps> = ({ children, className = '' }) => (
  <form className={['flex flex-col', className].filter(Boolean).join(' ')}>
    {children}
  </form>
);

export default Form;
