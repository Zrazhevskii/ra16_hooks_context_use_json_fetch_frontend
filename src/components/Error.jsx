import React from 'react';
import useJsonFetch from './useJsonFetch';
import '../styles/Component.css';

export const Error = (props) => {
    const { url, title } = props;

    const [data, loading, error] = useJsonFetch(url);

    return (
        <div className='component'>
            <h2>{title}</h2>
            <div className='component-url'>{url}</div>
            <div className='component-error'>{data.status}</div>
            {error && <div className='component-error'>{error.toString()}</div>}
        </div>
    );
};
