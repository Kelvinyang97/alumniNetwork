import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { createMuiTheme } from '@material-ui/core/styles';
//import Background from './graduation-feature_1-2.jpg'

const colors = createMuiTheme({
    palette: {
      primary: {
        light: '#ffeead',
        main: '#ffcc5c',
        dark: '#3b3a30',
        background: '#f0f0f0'
      },
    },
  });


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        SomethingSexy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
        
    },
    
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    color: "colors.palette.primary.main",

  },
  toolbar: {
    flexWrap: 'wrap',
    color: colors.palette.primary.main,
  },
  toolbarTitle: {
    flexGrow: 3,
    color: colors.palette.primary.main,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: colors.palette.primary.main,
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: '1px solid ${theme.palette.divider}',
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'Message board',
    price: '0',
    description: ['Send and recieve messages'],
    buttonText: 'Click here for more',
    buttonVariant: 'outlined',
  },
  {
    title: 'Jobs',  
    
    description: [
      'Check recent job advertisements',
    ],
    buttonText: 'Click here for more',
    buttonVariant: 'outlined',
  },
  {
    title: 'Events',
    description: [
      'Create or view upcoming events',
    
    ],
    buttonText: 'Click here for more',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Founders',
    description: ['Luke', 'Kelvin', 'Evie', 'Arpit', 'Jack'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Karie Mayman', 'Ricky Gao'],
  },
];

export default function Pricing() {
  const classes = useStyles();


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="" elevation={0} className={classes.appBar}>
        <Toolbar  color="" className={classes.toolbar}>
          <Typography variant="h6" color = "textPrimary" noWrap className={classes.toolbarTitle}>
            UNSW Colleges Alumni Network
          </Typography>
          <nav>
            <Link variant="button" color="inherit" href="/dashboard" className={classes.link}>
              Home
            </Link>  
            <Link variant="button" color="inherit" href="/profile" className={classes.link}>
              Profile
            </Link>
            <Link variant="button" color="inherit" href="#" className={classes.link}>
              Message Board
            </Link>
            <Link variant="button" color="inherit" href="#" className={classes.link}>
              Jobs
            </Link>
            <Link variant="button" color="inherit" href="#" className={classes.link}>
              Events
            </Link>
          </nav>
          <Link href="#" color="inherit" variant="button" className={classes.link}>
            Search
          </Link>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
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
        className={classes.textField}
        value={values.gender}
        onChange={handleChange('gender')}
        margin="normal"
      />
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
        className={classes.textField}
        value={values.industry}
        onChange={handleChange('Industry')}
        margin="normal"
      />
      {/* <TextField
        id="standard-uncontrolled"
        label="Password"
        defaultValue="foo"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        required
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        error
        id="standard-error"
        label="Error"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        disabled
        id="standard-disabled"
        label="Disabled"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
      />
      <TextField
        id="standard-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        className={classes.textField}
        margin="normal"
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        id="standard-dense"
        label="Dense"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
      />
      <TextField
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        rowsMax="4"
        value={values.multiline}
        onChange={handleChange('multiline')}
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-multiline-static"
        label="Multiline"
        multiline
        rows="4"
        defaultValue="Default Value"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-helperText"
        label="Helper text"
        defaultValue="Default Value"
        className={classes.textField}
        helperText="Some important text"
        margin="normal"
      />
      <TextField
        id="standard-with-placeholder"
        label="With placeholder"
        placeholder="Placeholder"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-textarea"
        label="With placeholder multiline"
        placeholder="Placeholder"
        multiline
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-number"
        label="Number"
        value={values.age}
        onChange={handleChange('age')}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-select-currency"
        select
        label="Select"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your currency"
        margin="normal"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="standard-select-currency-native"
        select
        label="Native select"
        className={classes.textField}
        value={values.currency}
        onChange={handleChange('currency')}
        SelectProps={{
          native: true,
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your currency"
        margin="normal"
      >
        {currencies.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        id="standard-full-width"
        label="Label"
        style={{ margin: 8 }}
        placeholder="Placeholder"
        helperText="Full width!"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="standard-bare"
        className={classes.textField}
        defaultValue="Bare"
        margin="normal"
        inputProps={{ 'aria-label': 'bare' }}
      /> */}
    </form>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
          UCAN because WE CAN!
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          A college's alumni are the reflection of its past, representations of its present, and a link to its future
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}