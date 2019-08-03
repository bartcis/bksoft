import React, { useState, FunctionComponent, Dispatch } from 'react';

import MenuLink from '../menuLink';

const useSideMenu = (
  label: string,
  defaultState: string,
  options: Array<string>
) => {
  const [state, setState] = useState(defaultState);
  const id = `use-side-menu-${label.replace(' ', '').toLowerCase()}`;

  const SideMenu: FunctionComponent = () => (
    <>
      <h2>{label}</h2>
      <MenuLink link="/about" content="O apce" />
      {options}
      {state}
    </>
  );

  return [state, SideMenu, setState] as [
    string,
    FunctionComponent,
    Dispatch<string>
  ];
};

export default useSideMenu;
