import React from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Add} from '@material-ui/icons';

const styles = theme => ({
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
  },
});

const NewChatButton = ({ classes }) => (
  <Button
    variant="fab"
    color="primary"
    className={classes.newChatButton}
  >
    <Add />
  </Button>
);

export default withStyles(styles)(NewChatButton);
