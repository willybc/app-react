import React from 'react';
import { render } from 'react-dom';
import Media from './playlist/componentes/media.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


render(<Media type="video" title="¿Que es bitcoin?" author="Willy Bardales" /> , document.getElementById('root'));
registerServiceWorker();
