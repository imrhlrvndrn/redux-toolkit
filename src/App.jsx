import logo from './logo.svg';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    incrementCounter,
    decrementCounter,
    incrementCounterWith,
    decrementCounterWith,
} from './features/counter/counter.slice';

// styles
import './App.css';

const App = () => {
    const dispatch = useDispatch();
    const [inputCount, setInputCount] = useState(1);
    const count = useSelector((state) => state.counter.value);

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>Hello Vite + React!</p>
                <h1>Counter value: {count}</h1>
                <label>Increment with</label>
                <input
                    type='number'
                    id='inputCount'
                    name='inputCount'
                    value={inputCount}
                    onChange={(event) => setInputCount(event.target.value)}
                />
                <div className='btn-container'>
                    <button onClick={() => dispatch(incrementCounter())}>Increment</button>
                    <button onClick={() => dispatch(incrementCounterWith(inputCount))}>
                        Increment with {inputCount}
                    </button>
                    <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
                    <button onClick={() => dispatch(decrementCounterWith(inputCount))}>
                        Decrement with {inputCount}
                    </button>
                </div>
                <p>
                    Edit <code>App.jsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a
                        className='App-link'
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Learn React
                    </a>
                    {' | '}
                    <a
                        className='App-link'
                        href='https://vitejs.dev/guide/features.html'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Vite Docs
                    </a>
                </p>
            </header>
        </div>
    );
};

export default App;
