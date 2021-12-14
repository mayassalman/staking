import React from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import "./styles.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BalanceCard from "../../components/Cards/BalanceCard";
import StakingCard from "../../components/Cards/StakingCard";
import background from "../../images/app-background.png";

function App() {
    return (
        <>
            <Box
                className="main-app"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                }}
            >
                <CssBaseline />
                <Header />
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item md={1} xs={12}></Grid>
                        <Grid
                            item
                            container
                            spacing={2}
                            md={10}
                            xs={12}
                            className="card-container"
                        >
                            <Grid
                                item
                                xs={12}
                                md={5}
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <BalanceCard />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={7}
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                            >
                                <StakingCard />
                            </Grid>
                        </Grid>
                        <Grid item md={1} xs={12}></Grid>
                    </Grid>
                </Container>
                <Footer />
            </Box>
        </>
    );
}

export default App;
