import styled from "styled-components";
import Navbar from "./components/bar/Navbar";
import Carousel from "./components/Carousel"
import { Container } from '@mui/material';
function App() {
  const ContainerTop = styled.div`
    margin-top: 6rem;
  `;
  return (
    <div>
      <Navbar />
      <ContainerTop>
        <Container>
          <Carousel />
        </Container>
      </ContainerTop>
    </div>
  );
}

export default App;
