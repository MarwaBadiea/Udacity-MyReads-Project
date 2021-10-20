import React from 'react';

import Bookshelf from './bookShelf';


class Allshelves extends React.Component {
    render() { 
      const books = this.props.books;
      console.log(books);
        return (
          <div>
            <Bookshelf 
            books={books.filter(book => book.shelf === "currentlyReading")}
            title={"Currently Reading"}
            updateShelf={this.props.updateShelf}
            />

            <Bookshelf
            books={books.filter(book => book.shelf === "wantToRead")}
            title={"Want to Read"}
            updateShelf={this.props.updateShelf}
            />

            <Bookshelf 
            books={books.filter(book => book.shelf === "read")}
            title={"Read"}
            updateShelf={this.props.updateShelf}
            />
          </div>    
        );
    }
}

export default Allshelves;