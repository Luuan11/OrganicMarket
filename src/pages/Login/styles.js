import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px;

  @media(min-width: 768px) {
    margin: 0 auto;
    width: 50%;
  }
`;

export const Titulo = styled.h2`
  margin-bottom: 30px;
  margin-top: 80px;
`;

export const InputContainer = styled(FormControl)`
  margin-bottom: 30px;
`