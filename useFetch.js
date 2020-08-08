import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({ dt: null, lg: true, er: null });
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])
    useEffect(() => {
        setState({ dt: null, lg: true, er: null });
        setTimeout(() => {
            if (isMounted.current) {
                fetch(url).then(rs => rs.json()).then(dt => setState({ er: null, lg: false, dt }));
            } else {
                console.log('SeState no se llamó');
            }
        }, 4000);

    }, [url]);
    return state;
}
