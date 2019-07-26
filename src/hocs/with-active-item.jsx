import React from 'react';

const withActiveItem = (Component) => {
  // eslint-disable-next-line react/display-name
  return (props) => <Component
    {...props}
  />;
};

export default withActiveItem;
