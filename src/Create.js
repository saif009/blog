import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [country, setCountry] = useState('US');
    const [author, setAuthor] = useState('');
    const [isPending, setisPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, country, author};
        setisPending(true);

       setTimeout(() => {fetch("http://localhost:8000/blogs/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog),
        }).then(() => {
          console.log("New Blog Added!");
          setisPending(false);
          history.push('/');
        });
    }, 500);
    }

    return (
      <div className="create">
        <h2>Add a New Blog</h2>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Blog Title: </label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="">Blog Body: </label>
          <textarea
            name=""
            id=""
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <label htmlFor="">Author: </label>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <select
            name=""
            id=""
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="United States">United States</option>
            <option value="Mauritius">Mauritius</option>
          </select>

          {!isPending && <button>Create Blog</button>}
          {isPending && <button disabled>Adding Blog...</button>}
        </form>
      </div>
    );
}
 
export default Create;