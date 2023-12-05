import useJsonFetch from './useJsonFetch';
import '../styles/Component.css';
import PropTypes from 'prop-types';

export const Loading = (props) => {
    const { url, title } = props;

    const [data, loading] = useJsonFetch(url);

    return (
        <div className='component'>
            <h2>{title}</h2>
            <div className='component-url'>{url}</div>
            <div className='component-ok'>{data.status}</div>
            {loading && <div className='component-load'>Загрузка...</div>}
        </div>
    );
};

Loading.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
