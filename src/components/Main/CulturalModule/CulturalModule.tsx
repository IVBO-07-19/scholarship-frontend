import React from 'react';
import s from './CulturalModule.module.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CulturalApplication from './CulturalApplication/CulturalApplication';

export default function CulturalModule() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <button onClick={handleClickOpen} className={s.buttonn}>Подать заявление</button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth={'lg'}
      >
        <DialogTitle  id="alert-dialog-title">
          <p className={s.dialog_title}>Культурно-творческая деятельность</p>
          </DialogTitle>
        <DialogContent className={s.dialog_content} >
          <DialogContentText  id="alert-dialog-description">
            {/* <ScientificApplication></ScientificApplication> */}
            <CulturalApplication></CulturalApplication>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Назад
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Далее
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}