import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { theme } from './shared/theme';
import { typography } from './shared/typography';

export const APPEARANCES = {
  PRIMARY: 'primary',
  PRIMARY_WHITE: 'primaryWhite',
  SECONDARY: 'secondary',
  SECONDARY_WHITE: 'secondaryWhite',
  SECONDARY_DARK: 'secondaryDark',
  FLAT: 'flat',
  FLAT_WHITE: 'flatWhite',
};

export const SIZES = {
  SMALL: 'small',
  LARGE: 'large',
};

const StyledButton = styled.button`
  margin: 1em;
  transition: all 150ms ease-out;
  display: inline-block;
  cursor: pointer;
  font-family: ${typography.type.primary};
  font-size: ${
    ({ size }) =>
      size === SIZES.SMALL
        ? typography.size.s1 // small
        : size === SIZES.LARGE
        ? typography.size.m1 // large
        : typography.size.s3 // medium
  }px;
  font-weight: ${typography.weight.bold};
  line-height: ${typography.size.m2};
  padding: ${
    ({ size }) =>
      size === SIZES.SMALL
        ? '8px 16px' // small
        : size === SIZES.LARGE
        ? '20px 26px' // large
        : '1rem 2rem' // medium
  };

  border-style: solid;
  border-width: 1px;
  border-radius: 0.4rem;
  vertical-align: top;
  user-select: none;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed !important;
      &:hover {
        transform: none;
      }
      background: ${theme.color.primary.disabled};
      color: ${theme.color.monochrome.medium};
      border-color: ${theme.color.primary.disabled};
    `}

  ${({ appearance }) =>
    appearance === APPEARANCES.PRIMARY &&
    `
      background: ${theme.color.primary.default};
      color: ${theme.color.monochrome.medium};
      border-color: ${theme.color.primary.default};

      &:hover {
        background: ${theme.color.primary.hover};
      }

      &:active {
        background: ${theme.color.primary.active};
      }

      &:focus {
        background: ${theme.color.primary.default};
        border-color: ${theme.color.primary.focus};
      }
    `}
`;

export function Button({ isDisabled, children, ...props }) {
  return (
    <StyledButton disabled={isDisabled} {...props}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZES)),
};

Button.defaultProps = {
  appearance: APPEARANCES.PRIMARY,
  isDisabled: false,
};
