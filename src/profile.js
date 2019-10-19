import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {db, auth} from './firebase'
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const industries = [
 {value:'IT',
  label:'IT'
  },
  {value:'Banking',
  label:'Banking'
  },
  {value:'Medicine',
  label:'Medicine'
  },
  {value:'Law',
  label:'Law'
  },
];

const genders = [
  {value:'male',
   label:'male'
   },
   {value:'female',
   label:'female'
   },
   {value:'other',
   label:'other'
   },
 ];
 

export default function Profile() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    age: '',
    yearofgrad: 0,
    gender: '',
    college: '',
    degree: '',
    industry: ''
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const submit = ()=>{
    db.ref(`/users/`)
  }

  const goBack = ()=>{
    console.log('submit!!!!')
  }

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        required
        id="standard-firstname"
        label="First name"
        className={classes.textField}
        value={values.firstname}
        onChange={handleChange('first name')}
        margin="normal"
      />
      <TextField
        required
        id="standard-lastname"
        label="Last name"
        className={classes.textField}
        value={values.lastname}
        onChange={handleChange('last name')}
        margin="normal"
      />
      <TextField
        required
        id="standard-age"
        label="Age"
        className={classes.textField}
        value={values.age}
        onChange={handleChange('age')}
        margin="normal"
      />
      <TextField
        id="standard-yearofgrad"
        label="Year of graduation"
        className={classes.textField}
        value={values.yearofgrad}
        onChange={handleChange('yearofgrad')}
        margin="normal"
      />
      <TextField
        id="standard-age"
        label="Gender"
        select
        className={classes.textField}
        value={values.gender}
        onChange={handleChange('gender')}
        margin="normal"
      >
         {genders.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        required
        id="standard-college"
        label="College"
        className={classes.textField}
        value={values.college}
        onChange={handleChange('college')}
        margin="normal"
      />
      <TextField
        required
        id="standard-degree"
        label="Degree"
        className={classes.textField}
        value={values.degree}
        onChange={handleChange('Degree')}
        margin="normal"
      />
      <TextField
        id="standard-industry"
        label="Industry"
        select
        value={values.industry}
        className={classes.textField}
        onChange={handleChange('Industry')}
        margin="normal"
      >
           {industries.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <div>
      <Button variant="contained" onClick={()=>{submit()}}>
          <p>Submit</p>
      </Button>
      <Link href='/dashboard'>
          <p>Back</p>
      </Link>
      </div>
    </form>
  );
}
