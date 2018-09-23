import React, { Component } from 'react';
import image from '../../assets/bitcoin.jpg';
import './media.css';

class Media extends Component {
    render(){
    const styles = {
        container: {
            fontSize: 14,
            /*background: 'red',*/
            color: '#44546b',
            cursor: 'pointer',
            width: 260,
            border: '1px solid red'
        }
    }

    console.log(image);
        return(
            <div className="Media">
                <div>
                <img
                 src={image}
                 alt="" 
                 width={260}
                 height={160}
                />
                    <h3>¿Por que React</h3>
                    <p>Willy Bardales</p>
                </div>
            </div>
        )
    }
}

export default Media;