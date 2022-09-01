import React from 'react';
import './BlogPost.css';

const BlogPost = ({blog, postId}) => {
    return (
        <div className={`card post-${postId} py-3`}>
            <div className="card-body">
                <div className='d-flex '>
                    <div className='me-3'> <img style= {{height:"50px"}} src={blog.authorImg} alt="" /> </div>
                    <div> 
                        <h6 className='text-primary'> {blog.author} </h6>
                        <p><small className='text-secondary'> {blog.date} </small></p>
                    </div>
                </div>
                
                <div> <h6> {blog.title} </h6></div>
                <div className="card-text text-secondary"> {blog.description} </div>
            </div>
           
        </div>
    );
};

export default BlogPost;