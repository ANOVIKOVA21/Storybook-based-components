import React, { useState } from 'react';

import './input.css';

export interface InputProps {
  clearable?: boolean;
  type?: string;
}

export const Input = ({ clearable = true, type = 'password', ...props }: InputProps) => {
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;

  function handleInput(newValue: string) {
    setValue(newValue);
  }
  function handleClear() {
    setValue('');
  }
  function togglePassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="input-field">
      <input
        type={inputType}
        className="input"
        value={value}
        {...props}
        onChange={(event) => handleInput(event.target.value)}
      />
      {type === 'password' && value && (
        <button type="button" className="password-btn" onClick={togglePassword}>
          {showPassword ? '🙈' : '👁️'}
        </button>
      )}
      {clearable && value && (
        <button type="button" className="clear-btn" onClick={handleClear}>
          X
        </button>
      )}
    </div>
  );
};
