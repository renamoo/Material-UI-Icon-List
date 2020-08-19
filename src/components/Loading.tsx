import { CircularProgress } from '@material-ui/core';
import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="spinner" >
            <CircularProgress color="secondary" size={65} />
        </div>
    );
}

export default Loading;