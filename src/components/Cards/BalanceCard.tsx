import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import "./styles.scss";

const BlueBox = () => (
    <CardContent className="blue-box">
        <Typography className="subtitle">Total Balance</Typography>

        <Box display="flex" alignItems="baseline">
            <Typography className="big-number" variant="h4" component="div">
                70.000
            </Typography>

            <Typography variant="h5" fontWeight="bold" component="div">
                ZKP
            </Typography>
        </Box>

        <Box display="flex" alignItems="baseline">
            <Typography className="subtitle-light">Staked Balance:</Typography>

            <Typography fontWeight="bold" mr={1} variant="subtitle2">
                10,000
            </Typography>
            <Typography variant="body2" component="div">
                ZKP
            </Typography>
        </Box>

        <Box display="flex" alignItems="baseline">
            <Typography className="subtitle-light">
                Unstaking Balance:
            </Typography>

            <Typography fontWeight="bold" mr={1} variant="subtitle2">
                1000
            </Typography>
            <Typography variant="body2" component="div">
                ZKP
            </Typography>
        </Box>
    </CardContent>
);
const RestData = () => (
    <CardContent>
        <Typography textAlign="start" gutterBottom>
            Privacy Reward Points (PRP)
        </Typography>
        <Box display="flex" justifyContent="space-between">
            <Typography className="secondary-dark" variant="subtitle2">
                Reward balance:
                <ErrorOutlineIcon fontSize="small" className="error-outline" />
            </Typography>

            <Box display="flex">
                <Typography fontWeight="bold" mr={1} variant="subtitle2">
                    107.12
                </Typography>
                <Typography variant="body2" component="div">
                    prp
                </Typography>
            </Box>
        </Box>
        <Box display="flex" justifyContent="space-between">
            <Typography mt={2} className="secondary-dark" variant="subtitle2">
                Total rewards claimed :
            </Typography>
            <Box display="flex">
                <Typography fontWeight="bold" mr={1} mt={2} variant="subtitle2">
                    0
                </Typography>
                <Typography variant="body2" mt={2} component="div">
                    prp
                </Typography>
            </Box>
        </Box>
    </CardContent>
);

const card = (
    <>
        <BlueBox />
        <RestData />

        <CardActions>
            <Button className="full-width-btn">Claim Rewards</Button>
        </CardActions>
    </>
);

export default function OutlinedCard() {
    return (
        <Box width={"100%"} margin={"0 5"}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}
