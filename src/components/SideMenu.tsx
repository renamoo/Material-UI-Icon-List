import { Divider, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, Theme, WithStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { createStyles, StyleRules, withStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import Icon from './Icon';

const searchIcon = (key: string, list: string[]): string[] => {
    return list.filter(name => {
        return name.toLowerCase().indexOf(key.toLowerCase()) !== -1;
    });
}

const styles = (theme: Theme): StyleRules => createStyles({
    menus: {
        width: '300px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRight: 'rgba(0, 0, 0, 0.12) 1px solid'
    },
    list: {
        overflowY: 'scroll',
        overflowX: 'hidden'
    },
    menu: {
        height: '30px',
        fontSize: '1.2rem',
        lineHeight: '30px'
    },
    input: {
        height: '50px'
    }
});

interface Props extends WithStyles<typeof styles> {
    select: string;
    allNames: string[];
    groupedNames: Map<string, string[]>;
    setSelect: (newSelect: string) => void;
}

const SideMenu: React.FC<Props> = ({ classes, select, setSelect, groupedNames }: Props) => {
    const [selectList, setSelectList] = useState(Array.from(groupedNames.keys()));

    const filterList = (e: any) => {
        const full = Array.from(groupedNames.keys());
        setSelectList(
            e.target.value === "" ? full : searchIcon(e.target.value, full)
        );
    };

    const selectIcon = (name: string) => {
        setSelect(name);
    }

    return (
        <div className={classes.menus}>
            <div style={{ padding: '0 15px' }}>
                <Input
                    id="exercise"
                    classes={{ root: classes.input }}
                    placeholder="Search"
                    disableUnderline={true}
                    fullWidth={true}
                    onChange={filterList}
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon color="action" fontSize="small" />
                        </InputAdornment>
                    }
                />
            </div>
            <Divider />

            <List classes={{ root: classes.list }}>
                {selectList.map(name => (
                    <div key={name} onClick={() => selectIcon(name)} style={{ background: select === name ? 'powderblue' : 'white', cursor: 'pointer' }}>
                        <ListItem key={name}>
                            <ListItemIcon><Icon name={name} mode="menu"></Icon></ListItemIcon>
                            <ListItemText primary={name}></ListItemText>
                        </ListItem>
                        <Divider />
                    </div>
                ))}
            </List>
        </div>
    );
}

export default withStyles(styles)(SideMenu);