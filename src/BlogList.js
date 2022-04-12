import { Link } from "react-router-dom";

const BlogList = ({blogs , title}) => {

    return (         
        <div className="titles">
            <h2 style= {{backgroundColor: "red", padding: "10px", textAlign: "center"}}>{ title }</h2>   
        <div className="blog-list" style= {{backgroundColor: "none"}}>
        {blogs.map((blog) => (
        <div className="blog-preview" key = {blog.id}>
            <Link to = {`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by: { blog.author }</p>
            <p>From: { blog.country }</p>
            {/* <p>{ blog.body }</p> */}
            </Link>
        </div>
        
    ))} 
    </div>  
    </div>
    );
}
 
export default BlogList;