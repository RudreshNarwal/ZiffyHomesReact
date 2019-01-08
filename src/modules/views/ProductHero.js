import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '@material-ui/core/Typography';
import Link from '../next/Link';
import ProductHeroLayout from './ProductHeroLayout';
import backgroundImage from './Untitled.png'
//var Diamond = require('../../assets/linux_logo.jpg');
//const backgroundImage =
  //'https://image.shutterstock.com/image-vector/abstract-geometric-shapes-purple-blue-450w-1217479993.jpg';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#E0F2F1',
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 10,
    },
  },
  more: {
    marginTop: theme.spacing.unit * 2,
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="" />
      <Typography color="inherit" align="left" variant="h4" marked="left">
      Don't just rent a home, get a lifestyle
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Enjoy secret offers up to -70% .
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component={linkProps => (
          <Link {...linkProps} href="/premium-themes/onepirate/sign-up" variant="button" />
        )}
      >
        Register
      </Button>
      <Typography variant="body1" color="primary" className={classes.more}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);