import React from 'react';
import ReactDOM from 'react-dom/client';
import fruits from './foods';
import {choice, remove} from './helpers';

const App = () => {
    let fruitChoice = choice(fruits);
    
    console.log(`Id like one ${fruitChoice}, please`);
    console.log(`Here you go, one ${fruitChoice}`);
    console.log(`Delicious! Can I have another?`);
    
    let removeFruit = remove(fruits, fruitChoice);
    console.log(removeFruit);
    console.log(`Sorry we only have ${removeFruit} left`);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);