export default function InputLabel({ htmlFor, value, className = '' }) {
    return (
      <label
        htmlFor={htmlFor}
        className={` ${className}`}
      >
        <span className="label-text">{value}</span>
      </label>
    );
  }
