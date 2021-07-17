import { useRef, useEffect } from 'react';

const usePrevious = (current) => {
    const ref = useRef(null);

    useEffect(() => {
        ref.current = current;
    }, [current]);

    return ref.current;
};

export default usePrevious;
