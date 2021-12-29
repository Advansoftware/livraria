import { Grid } from "@mui/material";
import styled from "styled-components";
import boy from "./assets/capas/boy.jpg";
import garota from "./assets/capas/garota.jpg";

const BooksShowcase = () => {
    const Poster = styled.img`
        width: 160px;
        border-radius: 3px;
        box-shadow: 2px 2px 5px 0px rgb(0 0 0 / 50%);
    `;
    return (
        <Grid
            mt={5}
            container
            justifyContent="space-arround"
            spacing={3}
        >
            <Grid item>
                <Poster src={boy} alt="capa" />
            </Grid>
            <Grid item>
                <Poster src={garota} alt="capa" />
            </Grid>
        </Grid>
    );
}
export default BooksShowcase;