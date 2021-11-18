import React from 'react'
import './singlePost.css'

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg"/>
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    <div className="singlePostEdit">
                     <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Eva Green</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt repellendus, exercitationem veritatis dolore nulla, atque earum repudiandae molestiae iusto, nam provident accusamus autem nostrum doloribus sunt modi cupiditate eveniet? Error.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque eos, soluta explicabo, in tempore quod obcaecati debitis dolore voluptate quas perspiciatis repudiandae, consectetur a quaerat. Qui, laboriosam! Id, consequatur tenetur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil magnam neque quaerat quos, ratione consequuntur quae dolore itaque temporibus nesciunt repellendus culpa, iure iusto dignissimos quasi doloribus animi molestiae corrupti officia voluptatibus magni dolor? Quia aliquid molestiae maxime sunt omnis nemo architecto aspernatur? Laudantium.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perspiciatis rerum placeat dignissimos cum. Voluptates in molestiae fuga perferendis quis, mollitia eos, libero quasi, soluta fugit sapiente quibusdam minus! Alias unde sequi suscipit commodi similique omnis tenetur dicta soluta voluptatum, esse a consequatur inventore repellendus iusto, blanditiis quo quas provident.

                </p>
            </div>
        </div>
    )
}

export default SinglePost
