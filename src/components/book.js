import React from 'react';



class Book extends React.Component {

    render() { 
        const thumbnail = this.props.imageLinks ? this.props.imageLinks.thumbnail : null;

        return (     
                <li>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})`  }}></div>
                    <div className="book-shelf-changer">
                        <select
                        value={this.props.shelf ? this.props.shelf : 'none'}
                        onChange={event => this.props.updateShelf(this.props, event.target.value)}
                        >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.authors}</div>
                </div>
                </li>
        );
    }
}

export default Book;