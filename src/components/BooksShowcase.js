import { Grid } from "@mui/material";
import styled from "styled-components";
import Capas from "./assets/capas.js";
import { Link } from "react-router-dom";

const BooksShowcase = () => {
    const Poster = styled.img`
        width: 100%;
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
            {Capas.length > 0 && Capas.map((item, index) =>

                <Grid item key={index + 'book'} md={2}>
                    <Link to={'/' + item.name}>
                        <Poster src={item.url} alt={item.name} title={item.name} />
                    </Link>
                </Grid>

            )
            }

        </Grid >
    );
}
export default BooksShowcase;