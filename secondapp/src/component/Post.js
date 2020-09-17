import React from 'react';
import {Link} from 'react-router-dom';

const Posts = () => {
    return(
        <div className="panel panel-success">
            <div className="panel-heading">
                <h2>Post Page</h2>
            </div>
            <div className="panel-body">
                <p>Post is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div>
                    <h4>JavaScript</h4>
                    <Link to="/post/JavaScript">Details</Link>
                </div>
                <div>
                    <h4>React</h4>
                    <Link to="/post/React">Details</Link>
                </div>
                <div>
                    <h4>Node</h4>
                    <Link to="/post/Node">Node</Link>
                </div>
            </div>
        </div>
    )
}

export default Posts;