/*import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    paddingTop: '67.50%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    //backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '5px',
    left: '10px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '5px',
    right: '10px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  /*meme_caption: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2px',
  },
  caption: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '2px',
    //padding: '0 2px',
  },
  cardActions: {
    padding: '0 1px 2px 1px',
    display: 'flex',
    justifyContent: 'center',
  },
});*/

import { makeStyles, rgbToHex } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 0,
    paddingTop: '68%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '10px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  caption: {
    fontSize: '17px',
    padding: '0 16px',
  },
  top:{
    fontWeight: 'bold',
  },
  cardActions: {
    padding: '0 8px 6px 8px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});