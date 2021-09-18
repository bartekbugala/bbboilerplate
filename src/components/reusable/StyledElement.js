import React, { useContext, createElement } from 'react';
import styled from 'styled-components';

import { SiteIdContext } from '../../App';

import { HEADER_STYLES } from '../../styles/styledComponents/sitesStyles';

// Dummy Component to create any html element
const Element = ({ element = 'p', className, children }) => {
  return createElement(`${element}`, { className }, ...children);
};

const StyledComponent = styled(Element)`
  ${({ styleStr }) => styleStr && styleStr};
  ${({ siteID, element }) =>
    HEADER_STYLES[element] && HEADER_STYLES[element][siteID]};
`;

const StyledElement = ({ element = 'p', className, styleStr, children }) => {
  const siteID = useContext(SiteIdContext);
  return (
    <StyledComponent
      className={className}
      siteID={siteID}
      element={element}
      styleStr={styleStr}
    >
      {children}
    </StyledComponent>
  );
};

export default StyledElement;
