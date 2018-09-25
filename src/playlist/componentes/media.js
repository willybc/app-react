import React, { Component } from 'react';
import './media.css';

//prop-types
import PropTypes from 'prop-types';

class Media extends Component {

    state = {
        author: 'Leonidas Esteban'
    }
    /*
        constructor(props){
        super(props)
        this.state = {
            author: props.author
        }
    }
    */

    /* Enlazando evento del DOM */

    render(){

        return(
            <div className="Media">
                <div>
                <img
                 src={this.props.cover} 
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
    cover: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio']),
}

export default Media;