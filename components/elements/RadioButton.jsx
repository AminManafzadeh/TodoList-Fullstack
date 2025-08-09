function RadioButton({ status, setStatus, value, title, children, bg }) {
  return (
    <label
      htmlFor={value}
      className={`${bg} flex items-center justify-between sm:justify-center gap-3 p-3 rounded-lg text-white cursor-pointer w-full`}
    >
      <div className="flex items-center gap-2">
        {children}
        <span className="text-sm sm:text-base">{title}</span>
      </div>

      <input
        type="radio"
        id={value}
        value={value}
        onChange={(e) => setStatus(e.target.value)}
        checked={status === value}
      />
    </label>
  );
}

export default RadioButton;
