import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PlayIcon from '@material-ui/icons/PlayCircleOutline';


function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    backgroundColor: 'rgba(238, 238, 238);'
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width:500,
    backgroundColor: 'rgba(238, 238, 238);',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {props.video}
     
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
      <PlayIcon className='icon'/>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}