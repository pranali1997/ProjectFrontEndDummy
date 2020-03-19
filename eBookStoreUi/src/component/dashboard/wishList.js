import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert  {...props} style={{backgroundColor:"black",marginLeft:"10%"}}/>;
}

const useStyles = makeStyles(theme => ({
    root: {

        width: 67,
        height: 30,
        fontFamily: "Times New Roman",
        color: "black",
        fontSize: "0.27em"
    },
}));

export default function CustomizedSnackbars() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Button onClick={handleClick} style={{fontSize:"10px",fontFamily:"Arial"}}>
                WishList
      </Button>
            <div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        This Book is Succeessfully Added
        </Alert>
                </Snackbar>
                <Alert severity="success">Book Added To WishList</Alert>
            </div>
        </div>
    );
}
