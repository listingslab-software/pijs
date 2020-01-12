import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getStore } from '../';
import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    camera: {
        margin: theme.spacing(),
        maxWidth: 800,
    },
    iconBtnSpacer: {
        marginTop: theme.spacing(),
        marginLeft: theme.spacing(2),
    },
    cameraImage: {
        border: '1px solid rgba(241,221,63,0.25)',
        borderRadius: theme.spacing(),
        maxWidth: '100%',
        maxHeight: 450,
    },
    grow: {
        flexGrow: 1,
    },
    white: {
        color: 'white',
    },
}));


function Camera() {
    
    const classes = useStyles();
    const store = getStore();
    const {
        open,
        broken,
        currentPhoto,
    } = useSelector(state => state.camera);

    if (!open) { return null }

    console.log('broken', currentPhoto, broken)

    let showThis;
    if (currentPhoto) {
        showThis = currentPhoto
    } else {
        showThis = `/jpg/pi4.jpg`;
    }
    // showThis = `/jpg/pi4.jpg`;
    const title = `Camera`;

    return (
        <Card className={classes.camera}>
            <CardHeader
                title={title}
                // subheader={subheader}
                avatar={<Icon
                            icon={`camera`}
                    color={`inherit`} />}
                action={
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            store.dispatch({ type: "SYSTEM/CAMERA/CLOSE" });
                        }}>
                        <Icon
                            icon={`close`}
                            color={`inherit`}
                        />
                    </IconButton>
                } />
            <CardContent>
                <img
                    onError={(e) => { 
                        alert ('image error', e)
                    }}
                    className={classes.cameraImage}
                    alt={`camera`}
                    src={showThis} />
            </CardContent>
        </Card>
    );
}

const MemodFuncComponent = React.memo(Camera);
export default MemodFuncComponent;
