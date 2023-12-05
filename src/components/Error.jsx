import useJsonFetch from './useJsonFetch';
import '../styles/Component.css';
import PropTypes from 'prop-types';

export const Error = (props) => {
    const { url, title } = props;

    const [data, error] = useJsonFetch(url);

    return (
        <div className='component'>
            <h2>{title}</h2>
            <div className='component-url'>{url}</div>
            <div className='component-error'>{data.status}</div>
            {error && <div className='component-error'>{error.toString()}</div>}
        </div>
    );
};

Error.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
