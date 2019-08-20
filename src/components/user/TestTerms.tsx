import React, { useContext } from 'react';
import styled from 'styled-components';
import ThemeContext from '../context/ThemeContext';

let currentTheme: string;

const TestTerms = () => {
  const [theme] = useContext(ThemeContext);
  currentTheme = theme;

  return (
    <Container>
      <h2>Regulamin Testu</h2>
      <Terms>
        <ol>
          <li>
            <p>
              Test ma charakter poglądowy i nie jest formą profesjonalnej oceny
              osobowości. W celu dokonania takiej ewaluacji należy skontaktować
              się z odpowiednim specjalistą.
            </p>
          </li>
          <li>
            <p>
              Autor nie bierze żadnej odpowiedzialności za ewentualne wnioski,
              przemyślenia lub sytuacje mogące wyniknąć na wskutek wypełnienia
              testu.
            </p>
          </li>
          <li>
            <p>
              Test jest w 100% darmowy, nie ma charakteru komercyjnego i nie
              wymaga rejestracji.
            </p>
          </li>
          <li>
            <p>Test jest anonimowy i nie wymaga podawania danych osobowych.</p>
          </li>
          <li>
            <p>
              W celu usystematyzowania wyników test zbiera podstawowe informacje
              o uczestniku np. przedział wiekowy (szczegóły w kolejnym kroku).
            </p>
          </li>
        </ol>
      </Terms>
      <Checkbox>
        <label>
          <input type="checkbox" id="terms" name="terms" />
          Potwierdzam zaznajomienie się z regulaminem testu. Rozumiem i zgadam
          się na powyższe warunki.
        </label>
      </Checkbox>
    </Container>
  );
};

export default TestTerms;

const Checkbox = styled.div`
  max-width: 600px;
  display: flex;
  align-items: center;
  margin: 1rem auto;
  input {
    margin-right: 1rem;
  }
`;

const Terms = styled.article`
  border: 1px solid ${({ theme }) => theme.styledColors[currentTheme].border};
  max-width: 600px;
  border-radius: 3px;
  margin: 1rem auto;
  padding: 1rem 1rem 1rem 0;
  text-align: left;
  max-height: 300px;
  box-sizing: border-box;
  overflow: scroll;
`;

const Container = styled.div`
  background-color: ${({ theme }) =>
    theme.styledColors[currentTheme].backgroundFooter};
  box-shadow: ${({ theme }) => theme.styledColors[currentTheme].shadow} 0px 3px
    5px 3px;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
`;
