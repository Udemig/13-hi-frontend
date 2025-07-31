import styles from "./input.module.scss";

const Input = ({ label, name, value, type, options, handleChange }) => {
  return (
    <div className={styles.field}>
      <label htmlFor={name}>{label}</label>

      {options ? (
        <select id={name} name={name} defaultValue={value || ""} onChange={handleChange} required>
          <option value="">Seçiniz</option>
          {options.map((item, key) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          onChange={handleChange}
          defaultValue={value || ""}
          type={type || "text"}
          placeholder={`${label} giriniz`}
          required
        />
      )}
    </div>
  );
};

export default Input;
