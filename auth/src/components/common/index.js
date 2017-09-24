/*
whenever we have a file called index.js in a directory, whenever we try to
import a file without specifying a file name, it will by default select the
index.js file

instead of importing the button then exporting the button, we will import out
button this way. it works like a stepping stone
*/

export * from './Button';
export * from './Header';
export * from './Card';
export * from './CardSection';
