import * as uiIcons from '@material-ui/icons';
import React from 'react';
import AllList from './AllList';
import Detail from './Detail';
import SideMenu from './SideMenu';

const groupBy = (names: string[]): Map<string, string[]> => {
    return names.reduce((map, name) => {
        let base;
        // TODO: judge this case programatically
        if (name === 'InsertChartOutlined') { map.set(name, [name]); }
        if (name.slice(-8) === 'Outlined') { base = name.split('Outlined')[0]; }
        if (name.slice(-7) === 'Rounded') { base = name.split('Rounded')[0]; }
        if (name.slice(-5) === 'Sharp') { base = name.split('Sharp')[0]; }
        if (name.slice(-7) === 'TwoTone') { base = name.split('TwoTone')[0]; }
        !base ? map.set(name, [name]) : map.get(base) ? map.get(base).push(name) : console.log(base, name);
        return map;
    }, new Map());
}

interface Props {
    select: string;
    setSelect: (newSelect: string) => void;
}

const Content: React.FC<Props> = ({ select, setSelect }: Props) => {
    const names = Object.keys(uiIcons);
    const groupedNames = groupBy(names);

    return (
        <div className="main" style={{ height: 'calc(100% - 60px)', display: 'flex' }}>
            <SideMenu select={select} allNames={names} groupedNames={groupedNames} setSelect={setSelect}></SideMenu>
            {!!select ?
                <Detail selectComp={groupedNames.get(select)}></Detail> :
                <AllList groupedNames={Array.from(groupedNames.keys())} setSelect={setSelect}></AllList>}
        </div>
    );
}

export default Content;