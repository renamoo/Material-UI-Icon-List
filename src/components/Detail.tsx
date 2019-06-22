import { Theme, WithStyles } from '@material-ui/core';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { createStyles, StyleRules, withStyles } from '@material-ui/styles';
import React from 'react';
import Icon from './Icon';

const styles = (theme: Theme): StyleRules => createStyles({
    detail: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center'
    },
    block: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        alignItems: 'center'
    },
    name: {
        lineHeight: '30px'
    }
});

interface Props extends WithStyles<typeof styles> {
    selectComp: string[] | undefined;
}

const copyKey = (key: string) => {
    const copyKey = `<${key}Icon></${key}Icon>`;
    let input = document.createElement('input');
    input.setAttribute('id', 'copyinput');
    document.body.appendChild(input);
    input.value = copyKey;
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
}

const Detail: React.FC<Props> = ({ classes, selectComp }: Props) => {

    return (
        <div className={classes.detail}>
            {selectComp && selectComp.map(comp => (
                <div className={classes.block} key={comp}>
                    <Icon name={comp} mode="detail"></Icon>
                    <div className={classes.name} onClick={() => copyKey(comp)} style={{ cursor: 'pointer' }}>
                        {comp} <FileCopyOutlinedIcon fontSize="inherit"></FileCopyOutlinedIcon>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default withStyles(styles)(Detail);