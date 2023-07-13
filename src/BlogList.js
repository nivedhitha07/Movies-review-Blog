import {Link} from "react-router-dom";
const BlogList = ({blog,title}) => {
    //const blog=props.blog;
    return ( 
        <div className="blog-list">
            {blog.map((blogs)=>(
            <div className="blog-preview" key={blogs.id}>
                <Link to={`/blogs/${blogs.id}`}>
                    <h2>{blogs.title}</h2>
                    <p>written by {blogs.author}</p>
                </Link>
            </div>
        ))}
        </div>
        
     );
}
 
export default BlogList;