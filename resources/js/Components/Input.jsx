import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export const Input = forwardRef(function Input(
  { type = 'text', className = '', isFocused = false, color, bordered = true, ...props },
  ref
) {
  const localRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) localRef.current?.focus();
  }, [isFocused]);

  return (
    <input
      {...props}
      type={type}
      ref={localRef}
      className={`input ${bordered ? 'input-bordered' : ''} input-${color} w-full ${className}`}
    />
  );
});
