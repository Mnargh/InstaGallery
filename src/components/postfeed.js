import React, { Component } from 'react';
import Post from './post';
import '../App.css';

const data = require ('../photoCardsData.json');


class Postfeed extends Component {
    render() {
        return (
             <div className='Postfeed'>
                <center>
                    {data.map((post, index) => {
                        return <Post 
                        key={index}
                        username={post.username} 
                        usericon={post.userIconLink}
                        photo = {post.imageLink}
                        description = {post.description}
                        />
                        
                    })}
                </center>
             </div>
        );
    }
}

export default Postfeed;