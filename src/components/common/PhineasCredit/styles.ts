import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.875rem;
  padding: 0 6px;
  border-radius: 4px;

  @media (max-width: 768px) {
    background-color: #000000;
    bottom: 0;
    right: 0;
  }
`;
