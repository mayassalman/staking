import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import "./Unstaketable.scss";

function createData(id: string, date: string, amount: string, earned: string) {
    return { id, date, amount, earned };
}

const rows = [
    createData("1", "12/01/2021", "1,500 ZKP", "15.12 PRP"),
    createData("2", "12/01/2021", "2,500 ZKP", "25.59 PRP"),
    createData("3", "12/01/2021", "5,000 ZKP", "50.17 PRP"),
];

export default function UnstakeTable() {
    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 400 }}
                size="small"
                aria-label="unstaking table"
            >
                <TableHead>
                    <TableRow>
                        <TableCell>Stake Date</TableCell>
                        <TableCell align="right">Amount Staked</TableCell>
                        <TableCell align="right">PRP Earned</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.date}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">{row.earned}</TableCell>
                            <TableCell align="right">
                                <Button className="btn">Unstake</Button>
                            </TableCell>
                        </TableRow>
                    ))}

                    <TableRow
                        key={"4"}
                        sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                        }}
                    >
                        <TableCell component="th" scope="row">
                            {"12/01/2021"}
                        </TableCell>
                        <TableCell align="right">{"1,000 ZKP"}</TableCell>
                        <TableCell align="right">{"10.50 PRP"}</TableCell>
                        <TableCell align="right">
                            <Button className="disable btn" disabled={true}>
                                36 hrs left
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
