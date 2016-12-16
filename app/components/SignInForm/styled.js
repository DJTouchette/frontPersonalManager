import React from 'react';
import styled from 'styled-components';

import { TextField } from 'material-ui';
import { Link } from 'react-router';
import { secondaryTextColor } from 'colors';

export const TextFieldStyled = styled(TextField)`
	width: 100%;
`;

export const LinkStyled = styled(Link)`
	color: ${secondaryTextColor};
`;
