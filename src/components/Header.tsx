import { Button, Icon, IconButton, Theme, WithStyles } from '@material-ui/core';
import { createStyles, StyleRules, withStyles } from '@material-ui/styles';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import React from 'react';

const styles = (theme: Theme): StyleRules => createStyles({
    header: {
        height: '60px',
        background: '#2196F3',
        width: '100vw',
        display: 'flex',
        paddingLeft: '20px',
        fontFamily: 'Josefin Sans, sans-serif',
        fontSize: '1.55rem',
        color: 'white',
    },
    title: {
        textAlign: 'left',
        lineHeight: '60px',
        flexGrow: 1
    }
});

interface Props extends WithStyles<typeof styles> {
    setSelect: (newSelect: string) => void;
}

const Header: React.FC<Props> = ({ classes, setSelect }: Props) => {
    React.useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, []);

    return (
        <div className={classes.header}>
            <div className={classes.title}>Material-UI Built-in Icons</div>
            <Button size="medium" color="inherit" onClick={() => setSelect('')}>
                See All
            </Button>
            <div style={{ lineHeight: '60px', width: '100px' }}>
                <IconButton aria-label="Github" color="inherit" >
                    <Icon className={clsx(classes.icon, 'fab fa-github')} color="inherit" fontSize="inherit" />
                </IconButton>
            </div>
        </div>
    );
}

export default withStyles(styles)(Header);