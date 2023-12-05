import React from 'react';
import useJsonFetch from './useJsonFetch';
import '../styles/Component.css';

export const Loading = (props) => {
    const { url, title } = props;

    const [data, loading, error] = useJsonFetch(url);

    return (
        <div className='component'>
            <h2>{title}</h2>
            <div className='component-url'>{url}</div>
            <div className='component-ok'>{data.status}</div>
            {loading && <div className='component-load'>Загрузка...</div>}
        </div>
    );
};
