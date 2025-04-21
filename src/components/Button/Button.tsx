import React from 'react';
import './Button.css';

type ButtonProps = {
  label: string;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
};

export const Button = ({ label, onClick, size = 'medium' }: ButtonProps) => {
  return (
    <button className={`pixel-button ${size}`} onClick={onClick}>
      {label}
    </button>
  );
};
