/*
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import LayoutBody from '../components/LayoutBody';
import Button from '../components/Button';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: 0,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.palette.warning.main,
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 3}px`,
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
  },
  button: {
    width: '100%',
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/productCTAImageDots.png)',
  },
  subHeading: { 
    position: 'absolute',
    top: -28,
    left: 28,
    color: '#ededed',
    paddingTop: 20,
    
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -20,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
    zIndex: -1,
    backgroundColor: '#E0F2F1',
    paddingTop: 40,
  },
});

class ProductCTA extends React.Component {
  state = {
    open: false,
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <LayoutBody className={classes.root} component="section" width="large">
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} className={classes.cardWrapper}>
            <div className={classes.card}>
              <form onSubmit={this.handleSubmit} className={classes.cardContent}>
                <Typography variant="h3" component="h3" gutterBottom>
                  Home for boys
                </Typography>
                <Typography variant="h5">
                  Taste the holidays of the everyday close to home.
                </Typography>
                <TextField noBorder className={classes.textField} placeholder="Your email" />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  className={classes.button}
                >
                  Keep me updated
                </Button>
              </form>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.imagesWrapper}> 
            <Hidden smDown>
            
              <div className={classes.imageDots} />
              <Typography variant="h3" component="h3" gutterBottom className={classes.subHeading}>
                  Home for girls
                </Typography>
              <img
                src="https://d3okk28g4aa4th.cloudfront.net/image/data/information/girls.png"
                alt="call to action"
                className={classes.image}
              />
            </Hidden>
          </Grid>
        </Grid>
        <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          message="We will send you our best offers, once a week."
        />
      </LayoutBody>
    );
  }
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA); */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LayoutBody from '../components/LayoutBody';

const styles = theme => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 15,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 550,
  },
  media: {
    height: 280
  }
});

function ProductCTA(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
    <LayoutBody className={classes.layoutBody} width="large">
    <Grid container spacing={24}>
      <Grid item xs={12} sm={6}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://d3okk28g4aa4th.cloudfront.net/image/data/information/girls.png"
              title="Home for girls"
            />
           
          </CardActionArea>
          
        </Card>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://d3okk28g4aa4th.cloudfront.net/image/data/information/boys.png"
              title="Home for boys"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                align="center"
                component="h2"
                color="primary"
              >
                Home for boys
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    </LayoutBody>
  </section>
  );
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA  );