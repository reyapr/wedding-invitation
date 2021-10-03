import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

import './styles.scss'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  background: {
    backgroundColor: 'rgba(216, 173, 131, 0.4)'
  },
  backgroundLight: {
    backgroundColor: 'rgba(216, 173, 131, 0.3)'
  }
})

const styles = {
    fontTitle: {
        fontFamily: '"Dancing Script", sans-serif',
        fontSize: '1.75rem',
        'font-weight': 'bold'
    },
    fontDesc: {
        fontFamily: '"Dancing Script", sans-serif',
        fontSize: '1.15rem',
        'font-weight': 'bold',
        
    },
    fontNext: {
        fontFamily: '"Dancing Script", sans-serif',
        fontSize: '1.05rem',
        'font-weight': 'bold'
    }
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ handleClose, open }: any) {
    const search = window.location.search
    const queryParams = new URLSearchParams(search)
    const to = queryParams.get('to') || "Yang Terhormat";
    
    const classes = useStyles();
    
  return (
    <div className="dialog-modal">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className={classes.background}>
            <div className="title" style={styles.fontTitle}>Kepada {to}</div>
        </DialogTitle>
        <DialogContent className={classes.backgroundLight}>
          <DialogContentText id="alert-dialog-slide-description">
            <div style={styles.fontDesc}>Dengan Segala Hormat Kami Mengundang Anda Untuk Menghadiri Acara Pernikahan Kami.</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.backgroundLight}>
          <Button onClick={handleClose} color="primary">
            <div style={styles.fontNext}>Lanjutkan</div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
