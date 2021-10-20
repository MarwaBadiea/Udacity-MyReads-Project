import React from 'react';
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom';

import Allshelves from '../components/bookShelves';

class Home extends React.Component {

    state = {
        allBooks: [], //storing books data from API
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => this.setState({allBooks: books }))
        }
        
        
        updateShelf = (book, shelf) => {
            BooksAPI.update(book, shelf).then(res => {
                this.setState({
                    books: this.state.allBooks.map(selectedBook => {
                        if(selectedBook.id === book.id) {
                            selectedBook.shelf = shelf;
                        }
                        return selectedBook;
                    })
                })
            });
        }

    render() { 
        return (
            <div className="list-books">
            
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
                <Allshelves
                books={this.state.allBooks}
                updateShelf={this.updateShelf}
                />
            </div>

            <div className="open-search">
                <Link to={'/search'}>
                    <button>Add a book</button>
                </Link>
            </div>

            </div>
        );
    }
}

export default Home;