import { Theme, WithStyles } from '@material-ui/core';
import * as uiIcons from '@material-ui/icons';
import { createStyles, StyleRules, withStyles } from '@material-ui/styles';
import React from 'react';

const styles = (theme: Theme): StyleRules => createStyles({
});

interface Props extends WithStyles<typeof styles> {
    name: string;
    mode: string;
}

const Icon: React.FC<Props> = ({ classes, name, mode }: Props) => {
    const icons: { [key: string]: any } = uiIcons;

    return mode === 'detail' ?
        React.createElement(icons[name] as any, { style: { fontSize: '6.0rem', background: 'powderblue' } }) :
        React.createElement(icons[name] as any, { style: { fontSize: '1.5rem' } })
}

export default withStyles(styles)(Icon);