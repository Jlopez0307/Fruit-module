import React from 'react';

const choice = (items) => {
    const rand = items[Math.floor(Math.random() * items.length)];
    return rand;
};

const remove = (items, item) => {
    return items.filter(i => i !== item);
};

export {choice, remove};