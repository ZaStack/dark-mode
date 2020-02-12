import { React, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {

    const [darkModeTrue, setDarkModeTrue] = useLocalStorage(key, initialValue);

    useEffect (() => {
        if (darkModeTrue == true) {
            document.body.add('.dark-mode');
        } else {
            document.body.remove('.dark-mode')
        }
    }, [ darkModeTrue ]);

        return [ darkModeTrue, setDarkModeTrue ]
}

export default useDarkMode;