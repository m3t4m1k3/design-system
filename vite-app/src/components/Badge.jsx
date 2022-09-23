import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { theme } from '../shared/theme';
import { typography } from '../shared/typography';

export const APPEARANCES = {
  PRIMARY: 'primary',
  WHITE: 'white',
  SECONDARY: 'secondary',
};

const BadgeWrapper = styled.div`
  display: inline-block;
  font-family: ${typography.font.primary};
  font-weight: ${typography.weight.bold};
  font-size: ${typography.size.s1}px;
  line-height: ${typography.size.m1}px;
  padding: 1px 8px;
  border-radius: 100px;

  ${({ appearance }) =>
    appearance === 'primary' &&
    css`
      color: ${theme.color.monochrome.lightest};
      background: ${theme.color.primary.default};
      border: 1px solid ${theme.color.primary.default};
    `};

  ${({ appearance }) =>
    appearance === 'white' &&
    css`
      color: ${theme.color.primary.default};
      background: ${theme.color.monochrome.lightest};
      border: 1px solid ${theme.color.monochrome.medium};
      box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
        0px 4px 16px rgba(51, 51, 51, 0.08);
    `};

  ${({ appearance }) =>
    appearance === 'secondary' &&
    css`
      color: ${theme.color.primary.default};
      background: ${theme.color.monochrome.lightest};
      border: 1px solid ${theme.color.primary.default};
      box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
        0px 4px 16px rgba(51, 51, 51, 0.08);
    `};
`;

export function Badge({ ...props }) {
  return <BadgeWrapper {...props} />;
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
};

Badge.defaultProps = {
  appearance: APPEARANCES.PRIMARY,
};
