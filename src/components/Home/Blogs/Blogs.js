import React from 'react';
import './Blogs.css';
import ema from '../../../images/ema.png';
import wilson from '../../../images/wilson.png';
import aliza from '../../../images/aliza.png';
import BlogPost from '../BlogPost/BlogPost';

const Blogs = () => {

    const blogPosts = [
        {
            title: "Check at least a doctor in a year for your teeth",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet earum consequuntur consequatur, dicta maiores.",
            author: 'aliza mathew',
            authorImg: aliza,
            date: '23 Aug 2018'
        },
        {
            title: "2 times of brush in a day may keep you healthy",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet earum consequuntur consequatur, dicta maiores.",
            author: 'wilson pungda',
            authorImg: wilson,
            date: '7 sep 2019'
        },
        {
            title: "The tooth cancer is taking a chance",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet earum consequuntur consequatur, dicta maiores.",
            author: 'ema dusta',
            authorImg: ema,
            date: '30 Dec 2021'
        }
    ]
    return (
        <section className="blogs mt-5 py-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase"> our blog </h5>
                    <h1> From Our Blog News </h1>
                </div>
                <div className="card-deck d-flex mt-5 pt-5">
                    {
                        blogPosts.map((blog, i)=> <BlogPost key={i} postId={i} blog={blog} /> )
                    }
                </div>
            </div>
        </section>
 
    );
};

export default Blogs;