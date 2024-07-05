import { ChangeEvent } from "react";

const Select = ({
  value,
  onChange,
  options,
  label,
  isDisabled,
}: {
  value: string | number;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string | number; name: string }>;
  label: string;
  isDisabled?: boolean;
}) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label htmlFor={label} className="ml-1 text-xs text-gray-300">
        {label}
      </label>
      <select
        id={label}
        disabled={isDisabled}
        className="min-w-[200px] cursor-pointer bg-gray-700 p-2 transition ease-in hover:bg-gray-800 active:border-0 active:ring-0 sm:min-w-full"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
