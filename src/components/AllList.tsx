import { Theme, WithStyles } from '@material-ui/core';
import { createStyles, StyleRules, withStyles } from '@material-ui/styles';
import React from 'react';
import Icon from './Icon';

const styles = (theme: Theme): StyleRules => createStyles({
    menus: {
        display: 'flex',
        flexFlow: 'row wrap',
        padding: '20px',
        overflowY: 'scroll',
    }
});

interface Props extends WithStyles<typeof styles> {
    groupedNames: string[];
    setSelect: (newSelect: string) => void;
}

const AllList: React.FC<Props> = ({ classes, groupedNames, setSelect }: Props) => {
    return (
        <div className={classes.menus}>
            {groupedNames.map(name => (
                <div key={name} onClick={() => setSelect(name)} style={{ cursor: 'pointer', margin: '5px' }}>
                    <Icon name={name} mode="menu"></Icon>
                </div>
            ))}
        </div>
    );
}

export default withStyles(styles)(AllList);