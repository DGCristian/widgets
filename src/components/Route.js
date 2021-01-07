import {useEffect, useState } from 'react';

const Route = ({path, children}) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(()=>{
        const onLocationChange = () =>{
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };

    }, []);
// The next line of code can be change also from window.location.pathname to currentPath
    return currentPath === path ? children : null;
};



export default Route;