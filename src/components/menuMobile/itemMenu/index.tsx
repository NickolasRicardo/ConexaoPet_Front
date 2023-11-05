import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from 'react-router-dom';

interface IProps {
  path: string;
  label: string;
  Icon: React.ReactElement;
  onClick?: Function;
  exact: boolean;
}

const MenuMobile: React.FC<IProps> = ({
  Icon,
  label,
  path,
  onClick,
  exact,
}) => {
  let isMatch = useRouteMatch({ path, exact: exact }) ? true : false;

  const history = useHistory();

  const handleChangeRoute = (newValue: string) => {
    history.push(newValue);
  };

  return (
    <>
      <BottomNavigationAction
        label={label}
        onClick={() => {
          if (onClick) {
            onClick();
          } else {
            handleChangeRoute(path);
          }
        }}
        selected={isMatch}
        icon={Icon}
      />
    </>
  );
};

export default MenuMobile;
