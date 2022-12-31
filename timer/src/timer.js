import React, {useEffect, useState} from 'react';

function Timer() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => setCounter((counter) => counter - 1), 1000);
        }
    }, [counter])

    return(
        <h1>
            {counter} sec
        </h1>
    )
}

export default Timer;