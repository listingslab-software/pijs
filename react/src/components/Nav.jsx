import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/AppShell.Style';
import cn from 'classnames';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core/';
import { Icon } from './';
// import { PiJSSVG } from '../graphics';
import { getStore } from "../";

class Nav extends Component {

    navClick = (path) => {
        const {
            history
        } = this.props;
        const store = getStore();
        history.push(path);
        store.dispatch({ type: "SYSTEM/NAV/CLOSE" });
    }

    render() {
        const {
            classes,
            isHome
        } = this.props;
        return (
            <List className={cn(classes.navList)}>

                {!isHome ?
                    <ListItem button
                        onClick={(e) => {
                            this.navClick(`/`)
                        }}>
                        <ListItemIcon>
                            <Icon icon={`home`} color={`primary`} />
                        </ListItemIcon>
                        <ListItemText primary={`Home`} />
                    </ListItem>
                    : null}

                <ListItem button
                    onClick={(e) => {
                        this.navClick(`/about`)
                    }}>
                    <ListItemIcon>
                        <Icon icon={`docs`} color={`primary`} />
                    </ListItemIcon>
                    <ListItemText primary={`About`} />
                </ListItem>

                <ListItem button
                    onClick={(e) => {
                        this.navClick(`/webcam`)
                    }}>
                    <ListItemIcon>
                        <Icon icon={`webcam`} color={`primary`} />
                    </ListItemIcon>
                    <ListItemText primary={`Webcam`} />
                </ListItem>

                <ListItem button
                    onClick={(e) => {
                        this.navClick(`/map`)
                    }}>
                    <ListItemIcon>
                        <Icon icon={`map`} color={`primary`} />
                    </ListItemIcon>
                    <ListItemText primary={`Map`} />
                </ListItem>

                <ListItem button
                    onClick={(e) => {
                        this.navClick(`/weather`)
                    }}>
                    <ListItemIcon>
                        <Icon icon={`weather`} color={`primary`} />
                    </ListItemIcon>
                    <ListItemText primary={`Weather`} />
                </ListItem>

                <ListItem button
                    onClick={(e) => {
                        this.navClick(`/envirophat`)
                    }}>
                    <ListItemIcon>
                        <Icon icon={`enviro`} color={`primary`} />
                    </ListItemIcon>
                    <ListItemText primary={`Enviro pHAT`} />
                </ListItem>


            </List>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        nav: store.system.nav,
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(Nav))));
