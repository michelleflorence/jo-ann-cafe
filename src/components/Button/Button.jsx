import styles from "./Button.module.scss";

const Button = ({
  color = "primary",
  children,
  onClick,
  type,
  outlined = false,
  disabled,
}) => {
  return (
    <button
      className={`${styles["button"]} ${
        styles["color-" + color + (outlined ? "-outline" : "")]
      }`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
