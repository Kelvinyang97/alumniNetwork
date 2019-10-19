import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

function createData(name, industry, degree, college) {
  return { name, industry, degree, college };
}

const rows = [
  createData('Evie', 'SEC', 'COMPSCI', 'HALL'),
  createData('Jack', 'seng', 'COMPSCI', 'HALL'),
  createData('Kelvin', 'seng', 'COMPSCI', 'HALL'),
  createData('Arpit ', 'seng', 'COMPSCI', 'HALL'),
  createData('Luke', 'data', 'math', 'HALL'),
];

export default function Dtable() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Johnny jonny',
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <Paper className={classes.root}>
        <TextField
        id="outlined-name"
        label="search by name"
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Industry</TableCell>
            <TableCell align="right">Degree</TableCell>
            <TableCell align="right">College</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.industry}</TableCell>
              <TableCell align="right">{row.degree}</TableCell>
              <TableCell align="right">{row.college}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
