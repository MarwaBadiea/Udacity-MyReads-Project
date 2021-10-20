import React from 'react';
import * as BooksAPI from '../BooksAPI'
import {Link} from 'react-router-dom'

import Book from '../components/book';


class Search extends React.Component {

    state = {
        allBooks: [],
        query: '',
        searchedBooks: [],
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => this.setState({allBooks: books }))
        }

        updateShelf = (book, shelf) => {
            BooksAPI.update(book, shelf).then(res => {
                this.setState({
                    books: this.state.allBooks.map(searchedBooks => {
                        if(searchedBooks.id === book.id) {
                            searchedBooks.shelf = shelf;
                        }
                        return searchedBooks;
                    })
                })
            });
        }


    updateQuery = (query) => {
        this.setState({
            query: query
        }, this.searchForBooks)
    }


    searchForBooks () {
        if(this.state.query.trim() === '') {
            return this.setState({ searchedBooks: [] })
        } 
            BooksAPI.search(this.state.query).then(res => {

                if(res && res.length) {
                res.forEach(book => {
                    let findBooks = this.state.allBooks.filter(findBook => findBook.id === book.id);
                    book.shelf = findBooks[0] ? findBooks[0].shelf : null
                }) 
                return this.setState ({ searchedBooks: res })
            } else {

                return(this.setState({ searchedBooks: [] }))
            }
        })
    }

    render() {

        return (
            <div className="search-books">
            <div className="search-books-bar">
            <Link to={'/'} className="close-search">
                Close
            </Link>
            <div className="search-books-input-wrapper">
                
                <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
                />
                

            </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">

                {this.state.searchedBooks.length >0 && this.state.searchedBooks.map(book =>
                    <Book key={book.id} {...book} updateShelf={this.updateShelf} />
                    )} 

                </ol>
            </div>
        </div>
        );
    }
}

export default Search;