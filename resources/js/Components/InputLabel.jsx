export default function InputLabel({ htmlFor, value, className = '' }) {
    return (
      <label
        htmlFor={htmlFor}
        className={`label font-semibold text-sm text-gray-700 ${className}`}
      >
        <span className="label-text">{value}</span>
      </label>
    );
  }
