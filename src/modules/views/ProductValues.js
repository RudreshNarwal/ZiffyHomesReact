import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LayoutBody from '../components/LayoutBody';
//import Typography from '@material-ui/core/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import backgroundImage from './Untitled1.png'

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#E0F2F1',
    backgroundPosition: 'center',
  },
  root: {
    display: 'flex',
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 15,
    marginBottom: theme.spacing.unit * 30,
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5,
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        
        <Grid container spacing={40}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <img src="https://d3okk28g4aa4th.cloudfront.net/image/data/graphics/step1-mobile.png" alt="Look and Book" />

           {/*   <Typography variant="h6" className={classes.title}>
                The best luxury hotels
              </Typography>
              <Typography variant="h5">
                {'From the latest trendy boutique hotel to the iconic palace with XXL pool'}
                {', go for a mini-vacation just a few subway stops away from your home.'}
              </Typography>    */}
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <img src="https://d3okk28g4aa4th.cloudfront.net/image/data/graphics/step2-mobile.png" alt="Get your suitcase" />
        
        {/*      <Typography variant="h6" className={classes.title}>
                New experiences
              </Typography>
              <Typography variant="h5">
                {'Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… '}
                {'your Sundays will not be alike.'}
              </Typography>  */}
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
            <img src="https://d3okk28g4aa4th.cloudfront.net/image/data/graphics/step3-mobile.png" alt="Start Living" />

        {/*      <Typography variant="h6" className={classes.title}>
                Exclusive rates
              </Typography>
              <Typography variant="h5">
                {'By registering, you will access specially negotiated rates '}
                {'that you will not find anywhere else.'}
              </Typography>  */}
            </div>
          </Grid>
        </Grid>
      </LayoutBody>
    </section>
    </ProductHeroLayout>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);