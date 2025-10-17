export default function Card({
    title,
    description,
    image,
    actions,
    children,
    bordered = true,
    shadow = true,
    hover = false,
    color = 'base-100',
    className = '',
  }) {
    return (
      <div
        className={`
          card bg-${color}
          ${bordered ? 'card-bordered' : ''}
          ${shadow ? 'shadow-xl' : ''}
          ${hover ? 'hover:shadow-2xl transition-shadow duration-300' : ''}
          ${className}
        `}
      >
        {image && (
          <figure className="px-4 pt-4">
            <img src={image} alt={title || 'Card image'} className="rounded-xl" />
          </figure>
        )}

        <div className="card-body">
          {title && <h2 className="card-title">{title}</h2>}
          {description && <p>{description}</p>}

          {/* custom content */}
          {children}

          {actions && <div className="card-actions justify-end mt-2">{actions}</div>}
        </div>
      </div>
    );
  }
