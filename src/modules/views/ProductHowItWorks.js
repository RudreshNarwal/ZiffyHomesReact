import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LayoutBody from '../components/LayoutBody';
import Typography from '../components/Typography';
import backgroundImage from './untitled3.png'
import ProductHeroLayout from './ProductHeroLayout';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';




const styles = theme => ({
  card: {
    maxWidth: 360
  },
  media: {
    height: 200
  },
  background: {
    backgroundImage: `url(${backgroundImage})`,
   
    backgroundPosition: 'center',
  },
  root: {
    display: 'flex',
    overflow: 'hidden',
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 16,
    marginBottom: theme.spacing.unit * 12,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `0px ${theme.spacing.unit * 5}px`,
  },
  title: {
    
    marginBottom: theme.spacing.unit * 4,
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
 
  button: {
    marginTop: theme.spacing.unit * 8,
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <LayoutBody className={classes.layoutBody} width="large">
      <img style={{ display: 'none' }} src={backgroundImage} alt="" />

        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          Featured Homes
        </Typography>
        <div>
          <Grid container spacing={40}>
            <Grid item xs={12} md={4}>
            <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://www.ziffyhomes.com/image/cache/data/properties/noida 22/br1,,-300x200.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="subtitle1" component="h2">
                        4 BHK Apartment
                        <Chip
                            label="Girl"
                            clickable
                            className={classes.chip}
                            color="secondary"
                          />

                      </Typography>
                      <Typography component="p">
                        Address Mahamaya Flyover bla
                      </Typography>
                      <IconButton aria-label="Add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                          <ShareIcon />
                        </IconButton>
                    </CardContent>
                  
                  <List component="nav" className={classes.root}>
                  <ListItem button>
                    <ListItemText primary="Rooms" />
                  </ListItem>
                  <Divider />
                  <ListItem button divider>
                    <ListItemText primary="Beds" />
                  </ListItem>
                  </List>
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://www.ziffyhomes.com/image/cache/data/properties/Test Property/IMG-20180608-WA0021-300x200.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="subtitle1" component="h2">
                        4 BHK Apartment
                        <Chip
                            
                            label="Boy"
                            clickable
                            className={classes.chip}
                            color="primary"
                          />

                      </Typography>
                      <Typography component="p">
                        Address Mahamaya Flyover bla
                      </Typography>
                      <IconButton aria-label="Add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                          <ShareIcon />
                        </IconButton>
                    </CardContent>
                  
                  <List component="nav" className={classes.root}>
                  <ListItem button>
                    <ListItemText primary="Rooms" />
                  </ListItem>
                  <Divider />
                  <ListItem button divider>
                    <ListItemText primary="Beds" />
                  </ListItem>
                  </List>
                  </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
            <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://www.ziffyhomes.com/image/cache/data/FELLA HOMES/GGN-122/14633110_319334305105784_3045198258738480734_o-300x200.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="subtitle1" component="h2">
                        4 BHK Apartment
                        <Chip
                            label="Girl"
                            clickable
                            className={classes.chip}
                            color="secondary"
                          />

                      </Typography>
                      <Typography component="p">
                        Address Mahamaya Flyover bla
                      </Typography>
                      <IconButton aria-label="Add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="Share">
                          <ShareIcon />
                        </IconButton>
                    </CardContent>
                  
                  <List component="nav" className={classes.root}>
                  <ListItem button>
                    <ListItemText primary=" Rooms" />
                  </ListItem>
                  <Divider />
                  <ListItem button divider>
                    <ListItemText primary=" Bed" />
                  </ListItem>
                  </List>
                  </CardActionArea>
                </Card>
            </Grid>
          </Grid>
        </div>
       
      </LayoutBody>
    </ProductHeroLayout>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);