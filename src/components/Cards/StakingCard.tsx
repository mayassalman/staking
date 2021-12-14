import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import WarningIcon from "@mui/icons-material/Warning";
import { Link } from "@mui/material";
import Unstaktable from "./Unstaktable";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import logo from "../../images/panther-logo.svg";
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import "./styles.scss";

export default function Staking() {
    const [toggle, setToggle] = React.useState("stake");

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newState: string
    ) => {
        setToggle(newState);
    };

    const children = [
        <ToggleButton value="stake" key="1">
            Stake ZPK
        </ToggleButton>,
        <ToggleButton value="unstake" key="2">
            Unstake
        </ToggleButton>,
    ];

    const control = {
        value: toggle,
        onChange: handleChange,
        exclusive: true,
    };

    return (
        <Box width={"100%"} margin={"0 5"}>
            <Box className="top-card-header">
                <Box className="header-content">
                    <Typography className="subtitle-summary">$0.721</Typography>
                    <Typography variant="caption">ZKP Price</Typography>
                </Box>
                <Box className="header-content">
                    <Typography className="subtitle-summary">
                        75,851 <span>ZKP</span>
                    </Typography>
                    <Typography variant="caption">Daily Rewards</Typography>
                </Box>
                <Box className="header-content">
                    <Typography className="subtitle-summary">
                        80,057,856 <span>ZKP</span>
                    </Typography>
                    <Typography variant="caption">
                        Circulating Supply
                    </Typography>
                </Box>
            </Box>

            <Card variant="outlined">
                <Box
                    sx={{
                        display: "flex",

                        justifyContent: "center",
                    }}
                >
                    <ToggleButtonGroup size="large" {...control}>
                        {children}
                    </ToggleButtonGroup>
                </Box>

                <CardContent>
                    {toggle == "stake" && (
                        <>
                            <Box display="flex" justifyContent="space-between">
                                <Typography
                                    mb={0}
                                    className="secondary-dark"
                                    variant="subtitle2"
                                >
                                    Amount
                                </Typography>
                                <span>
                                    <Typography
                                        m={1}
                                        className="secondary-dark"
                                        variant="subtitle2"
                                        component="span"
                                    >
                                        Available
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        component="span"
                                        m={1}
                                        className="available-zpk"
                                    >
                                        12,520
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        component="span"
                                    >
                                        ZKP
                                    </Typography>
                                </span>
                            </Box>

                            <Box className="light-box">
                                <Input
                                    sx={{ m: 2, mt: 3, width: '17ch', border: 0 }}
                                    id="staking-value"
                                    autoComplete='off'
                                    autoFocus={true}
                                    placeholder={"15000"}
                                    disableUnderline={true}
                                    endAdornment={<InputAdornment position="end" >
                                        <span id="price-unit">
                                            ZKP
                                        </span>

                                    </InputAdornment>}
                                    aria-describedby="staking-value-helper-text"

                                />
                                {/* <Typography variant="h5" component="span">
                                        12,000
                                    </Typography> */}
                                {/* </span> */}
                                <Box display={"flex"} alignItems={"center"}>
                                    <Button className="max-button">MAX</Button>
                                    <Box className="logo">
                                        <img src={logo} />
                                    </Box>
                                </Box>
                            </Box>
                        </>
                    )}

                    <Box className="warning-box top-card-header">
                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <WarningIcon />

                            <Typography variant="subtitle2" mb={3}>
                                Staking will lock your tokens for 7+ days
                            </Typography>
                        </Box>
                        <Typography variant="caption">
                            You will need to unstake in order for your staked
                            assets to be liquid again. This process will take 7
                            days to complete.
                            <Link href="#" underline="always" color="inherit">
                                Learn more
                            </Link>
                        </Typography>
                    </Box>
                </CardContent>

                {toggle == "stake" && (
                    <>
                        <CardActions>
                            <Box className="result"> Stake 12,000 ZPK</Box>
                        </CardActions>
                    </>
                )}
                {toggle == "unstake" && (
                    <>
                        <Unstaktable />
                    </>
                )}
            </Card>
        </Box>
    );
}
