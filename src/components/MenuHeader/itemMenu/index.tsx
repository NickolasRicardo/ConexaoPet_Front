import React from 'react';

import { AntTab } from '../styles';
import { useHistory, useRouteMatch } from 'react-router-dom';

// import { routesAdmin } from '@router/routes/Cliente.admin.config.routes';

interface IProps {
  path: string;
  label: string;
  Icon: React.ReactElement;
}

export default function MenuHeader({ path, label, Icon }: IProps) {
  const history = useHistory();
  let isMatch = useRouteMatch({ path, exact: true }) ? true : false;

  const handleChange = (path: string) => {
    history.push(path);
  };

  return (
    <>
      <AntTab
        onClick={() => handleChange(path)}
        label={label}
        icon={Icon}
        style={{
          borderBottom: isMatch ? ' 10px solid #fff' : 'none',
          opacity: isMatch ? 1 : 0.5,
          fontWeight: isMatch ? 'bold' : 'inherit',
          marginLeft: 20,
        }}
      />
    </>
  );
}
