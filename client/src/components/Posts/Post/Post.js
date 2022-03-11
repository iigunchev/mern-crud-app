import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from "../../../actions/posts";
import "./Post.scss";

export const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <article className="card md:min-w-full min-h-full shadow-sm overflow-hidden bg-slate-200">
      <img className="brightness-50 object-cover max-h-60" src={post.selectedFile} alt={post.title}/>
      <div className="absolute top-4 left-4 text-white">
        <h6>{post.creator}</h6>
        <p>{moment(post.createdAt).fromNow()}</p>
      </div>
      <div className="absolute top-4 right-4 text-white">
        <button onClick={()=>setCurrentId(post._id)}>
          ...
        </button>
      </div>
      <div className="bg-blue-50 text-blue-600 text-sm font-bold mx-4 px-4 py-2 max-w-fit rounded-lg mt-4">
        <h6>{post.tags.map((tag) => `${tag} `)}</h6>
      </div>
      <h5 className="my-2 mx-4 text-2xl font-extrabold text-slate-700">{post.title}</h5>
      <p className="mx-4 my-2 text-slate-700">{post.message}</p>
      <div className="my-2 mx-4 flex justify-between">
        <button className="font-bold bg-slate-200 max-w-fit min-h-max p-2 rounded-lg" onClick={() => dispatch(likePost(post._id))}>Like &nbsp; {post.likeCount}</button>
        <button className="font-medium rounded-lg p-2 bg-slate-600 text-white" onClick={() => dispatch(deletePost(post._id))}>Delete</button>
      </div>
    </article>
  )
}

export default Post;