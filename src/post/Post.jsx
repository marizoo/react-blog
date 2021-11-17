import React from 'react'
import './post.css'

const Post = () => {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quasi modi! Ex quidem atque natus nobis molestias excepturi molestiae, facere delectu dolorum hic? Ad dignissimos, inventore sit tenetur dolore perferendis iure officiis!
                </p>
            </div>
        </div>
    )
}

export default Post
