import React, { Component } from 'react';
import Post from './post';
import '../App.css';

// const data = require ('../photoCardsData.json');


class Postfeed extends Component {
    render() {
        return (
             <div className='Postfeed'>
                <Post />
                
             </div>
        );
    }
}

export default Postfeed;