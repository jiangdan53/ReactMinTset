/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};


export default function transition() {
    const [inProp, setInProp] = useState(false);
    return (
        <div>
            <Transition in={inProp} appear timeout={300}>
                {state => {
                    console.log(state)
                    return <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        I'm a fade Transition!
                    </div>
                }

                }
            </Transition>
            <button onClick={() => setInProp(!inProp)}>
                Click to Enter
            </button>
        </div>
    );
}
