import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function SubmissionDialog(props) {


  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Your ticket has been submitted"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>
              <strong>Ticket Name: </strong>{props.fullTicket.ticketName}
            </p>
            <p>
              <strong>Ticket Name: </strong>{props.fullTicket.description}
            </p>
            <p>
              <strong>Ticket Name: </strong>{props.fullTicket.date}
            </p>
            <p>
              <strong>Ticket Name: </strong>{props.fullTicket.startTime}
            </p>
            <p>
              <strong>Ticket Name: </strong>{props.fullTicket.endTime}
            </p>
            <p>
              <strong>Ticket Name: </strong>{props.fullTicket.duration}
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
