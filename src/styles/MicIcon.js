import styled from '@emotion/styled/macro';

const right = `
  right: 35px;
`;

const MicIcon = styled.div`
  height: 40px;
  position: absolute;
  top: calc(50% - 20px);
  cursor: pointer;
  right: 0;
  ${({ iconPosition }) => {
    if (iconPosition === 'right') {
      return right;
    }
    return null;
  }}
`;

export default MicIcon;
