import React, { useState, FunctionComponent, Dispatch } from 'react';

const useDropdown = (
  label: string,
  defaultState: string,
  options: Array<string>
) => {
  const [state, setState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;

  const Dropdown: FunctionComponent = () => (
    <label>
      {label}
      <select
        data-testid={id}
        id={id}
        value={state}
        onChange={e => setState(e.target.value)}
        onBlur={e => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <option>All</option>
        {options.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, Dropdown, setState] as [
    string,
    FunctionComponent,
    Dispatch<string>
  ];
};

export default useDropdown;
