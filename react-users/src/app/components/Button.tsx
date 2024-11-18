import { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

const Button = ({ type = 'button', onClick, children }: ButtonProps) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
