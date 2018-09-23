import React from 'react';
import { render } from 'react-dom';
import Media from './playlist/componentes/media.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


render(<Media /> , document.getElementById('root'));
registerServiceWorker();
