export function Button({
    variant = 'primary',
    size = 'md',
    outline = false,
    loading = false,
    disabled = false,
    className = '',
    children,
    ...props
  }) {
    console.log(variant);
    const baseClass = 'btn';
    const variantClass = outline ? `btn-outline btn-${variant}` : `btn-${variant}`;
    const sizeClass = size ? `btn-${size}` : '';
    const loadingClass = loading ? 'loading' : '';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return (
      <button
        {...props}
        disabled={disabled}
        className={`${baseClass} ${variantClass} ${sizeClass} ${loadingClass} ${disabledClass} ${className}`}
      >
        {children}
      </button>
    );
  }
