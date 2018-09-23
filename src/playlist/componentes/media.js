import React, { Component } from 'react';
import image from '../../assets/bitcoin.jpg';
import './media.css';

//prop-types
import PropTypes from 'prop-types';

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
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}
/*Validando tipado en propiedades */
Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;