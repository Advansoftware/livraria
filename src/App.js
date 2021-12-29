import styled from "styled-components";
import Navbar from "./components/bar/Navbar";
import Carousel from "./components/Carousel"
import { Container } from '@mui/material';
import BooksShowcase from "./components/BooksShowcase";
import Footer from "./components/Footer";
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
          <BooksShowcase />
        </Container>
      </ContainerTop>
      <Footer />
    </div>
  );
}

export default App;
