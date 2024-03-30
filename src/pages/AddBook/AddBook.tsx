import { auth, db } from "../../firebase/firebase";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";


const AddBook = () => {
  const [loading, setLoading] = useState(false);
  if (!auth.currentUser) return <Navigate to={"/login"}></Navigate>;

  const handleSubmit = async (e: any) => {
    const docRef = await addDoc(collection(db, "books"), {
      title: e.target.title.value,
      author: e.target.author.value,
    });
    setLoading(false);
    if (docRef.id) {
      e.target.title.value = "";
      e.target.author.value = "";
      alert("Your book added");
    }
  };
  return (
    <div className="add-book">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          handleSubmit(e);
        }}
      >
        <h1>Add a book</h1>
        <div>
          <img src="/book-marked-line.svg" alt="Title" />
          <input placeholder="Enter title..." type="text" name="title" required />
        </div>
        <div>
          <img src="/account-pin-box-line.svg" alt="Author" />
          <input type="text" name="author" placeholder="Enter author..." required />
        </div>
        <button disabled={loading} style={{ opacity: loading ? "0.7" : "" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
