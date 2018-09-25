import React from 'react';
import { render } from 'react-dom';
import Playlist from './playlist/componentes/playlist';
import data from './api.json';

import './index.css';
//import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');

render(<Playlist data={data} />, app);