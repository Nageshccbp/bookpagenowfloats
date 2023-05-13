import React, { useState } from 'react';
import './App.css'
const books = [
  {
    id: 1,
    title: '100 Greatest Leaders',
    author: 'Ana Clifton',
    image: 'data:image/jpeg;base64,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',
    description: 'This book profiles 100 influential leaders, including Malala Yousafzai, Barack Obama, and Martin Luther King, Jr., who have made a lasting impact on the world. It shares their inspiring stories, showcasing their courage, determination, and ability to bring about meaningful change. Discover the lessons they teach through their remarkable journeys.'},
  {
    id: 2,
    title: 'Rabindranath Tagore - Short Stories',
    author: 'Rabindranath Tagore',
    image: 'https://m.media-amazon.com/images/I/51rZ5Ix75kL._SX322_BO1,204,203,200_.jpg',
    description: 'Rabindranath Tagore, the celebrated writer, and inventor of modern Bengali short stories, presents a captivating collection in "Selected Short Stories of Rabindranath Tagore." Set in rural Bengali villages, his tales beautifully capture the essence of human relationships and the spirit of Indian culture. From highlighting social issues to evoking the mysticism of native surroundings, this book offers a rich tapestry of experiences and delightful stories for readers to discover. Tagore s writing is a testament to loves freedom and the enduring power of his literary contributions in Indian and world literature..',
  },
  // Add more books here...
];

function App() {
  const [bookList, setBookList] = useState(books);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [description,setDescription] = useState('');
  const [image,setImage]=useState('');

  const handleAddBook = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || author.trim() === ''|| description.trim()==='' || image.trim()==='') {
      alert('Please enter both title and author.');
      return;
    }
    const newBook = { id: bookList.length + 1, title, author };
    setBookList([...bookList, newBook]);
    setTitle('');
    setAuthor('');
    setDescription('');
    setImage('');
    setShowForm(false);
  };

  const handleCancel = () => {
    setTitle('');
    setAuthor('');
    setDescription('');
    setImage('');
    setShowForm(false);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDescription = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <h1>Book List</h1>
      <ul className="book-list">
        {bookList.map((book) => (
          <li key={book.id} onClick={() => handleBookClick(book)}>
            <div className="book-image">
              <img src={book.image} alt={book.title} />
            </div>
            <div className="book-details">
              <strong>Title:</strong> {book.title}, <strong>Author:</strong> {book.author}
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleAddBook}>Add Book</button>

      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <h2>Add Book</h2>
          <div>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label>Author:</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div>
            <label>Image-Link:</label>
            <input type="url" value={image} onChange={(e) => setImage(e.target.value)} />
          </div>
          <div>
            <label>Description:</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
          <button onClick={handleCancel}>Cancel</button>
        </form>
      )}

      {selectedBook && (
        <div className="book-description">
          <div className="dialog">
            <h2 className="dialog-title">{selectedBook.title}</h2>
            <p className="dialog-content">{selectedBook.description}</p>
            <button onClick={handleCloseDescription}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;