import { useState, useContext, createContext } from "react";
import Books from './books.json';

type Book = {
    name: string;
    author: string;
    description: string;
}

type MyContextType = {
    list: Book[];
    removeItem: (book: Book) => void;
}

const MyContext = createContext<MyContextType | null>(null);

function useMyContext() {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
}

export default function UseContext() {

    const [books, setBooks] = useState<Book[]>(Books);
    const [selectedBook, setSelectedBook] = useState<Book>();

    return (
        <MyContext.Provider value={{ list: books, removeItem(book) {
            setBooks(books.filter(b => b.name !== book.name));
        } }}>
            <div>
                <h2>useContext Sample</h2>
                <div style={{ display: 'flex' }}>
                    <Listview onSelectItem={(book) => setSelectedBook(book)} />
                    <DetailView book={selectedBook} />
                </div>
            </div>
        </MyContext.Provider>
    )
}

//   -===========-
//  List View
// -===========-

type ListViewProps = {
    onSelectItem: (book: Book) => void;
}

function Listview({ onSelectItem }: ListViewProps) {
    const { list } = useMyContext();

    return (
        <div style={{ flexBasis: '33.333333%' }}>
            {
                list.length === 0 ? (
                    <div>No Item</div>) : (
                    <ul>
                        {list.map((item, index) => (<li key={index}><button onClick={() => onSelectItem(item)}>{item.name}</button></li>))}
                    </ul>)
            }
        </div>
    )
}

//   -===========-
//  Detail View
// -===========-

type DetailViewProps = {
    book?: Book;
}

function DetailView({ book }: DetailViewProps) {

    const { list, removeItem } = useMyContext();

    return (
        <div style={{ flexBasis: '66.666667%' }}>
            {book === undefined ? (<div>No Item</div>) : (
                <div>
                    <h1>{book.name}</h1>
                    <div>Author: {book.author}</div>
                    <h2>Description</h2>
                    <p>{book.description}</p>
                    <button onClick={() => removeItem(book)} disabled={list.find(b => b.name === book.name) === undefined}>{list.find(b => b.name === book.name) === undefined ? 'Removed' : 'Remove'}</button>
                </div>
            )}
        </div>
    )
}