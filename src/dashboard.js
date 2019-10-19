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
      backgroundColor: colors.palette.primary.background,
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