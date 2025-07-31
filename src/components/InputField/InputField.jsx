import styles from "./InputField.module.scss";

const InputField = ({
  type = "text",
  name,
  label,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  onInput,
  step,
  min,
  isRequired = false,
  defaultValue,
}) => {
  return (
    <div className={styles["input-group"]}>
      {label && (
        <label htmlFor={name}>
          {label}
          {isRequired && <span className={styles["required"]}> *</span>}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          onInput={onInput}
          step={step}
          min={min}
          className={`${styles["input"]} ${error ? styles["error"] : ""}`}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          onInput={onInput}
          step={step}
          min={min}
          className={`${styles["input"]} ${error ? styles["error"] : ""}`}
        />
      )}

      {error && <span className={styles["error-message"]}>{error}</span>}
    </div>
  );
};

export default InputField;
