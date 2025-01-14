import styled from '@emotion/styled/macro';

const left = `
  padding-left: 12px;
  left: 0;
`;

const right = `
  padding-right: 12px;
  right: 0;
`;

const clear = `
  padding-right: 32px;
  right: 0;
  top: calc(50% - 9px);
`;

const InputIcon = styled.div`
  position: absolute;
  top: calc(50% - 8px);
  cursor: pointer;
  ${({ iconPosition }) => {
    if (iconPosition === 'left') {
      return left;
    } else if (iconPosition === 'right') {
      return right;
    }
    return null;
  }};
  ${({ clearIcon }) => clearIcon && clear}};

  svg.search-icon {
    fill: ${({ theme }) => theme.colors.primaryColor};
  }

  svg.cancel-icon {
    fill: ${({ theme }) => theme.colors.borderColor};
  }
`;

export default InputIcon;
