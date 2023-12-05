import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useJsonFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios(url)
            .then((res) => {
                setData(res.data);
            })
            .catch((e) => {
                setError(e);
            })
            .finally(() => {
                setLoading(false);
                setError(false);
            });
    }, [url]);
    return [data, loading, error];
}
