// import React, { useContext, useState, useEffect } from 'react';
// import { ThemeContext } from './themeContext'; // Assuming themeContext.ts defines the ThemeContext
// import { Label, Note } from './types'; // Adjust the path as needed to import your Note type
// import { dummyNotesList } from './constants'; // Assuming dummyNotesList is defined in constants.ts
// import { ToggleTheme } from './hooksExercise'; // Importing ToggleTheme from hooksExercise
// import './App.css'; // Import your styles


// export const StickyNotes = () => {
//     // your code from App.tsx
//     function App() {
//         const theme = useContext(ThemeContext); // Use the theme from context
//         const [notes, setNotes] = useState<Note[]>(dummyNotesList); // Initialize notes
//         const initialNote: Note = { id: -1, title: '', content: '', label: Label.other, isFavorite: false };
//         const [createNote, setCreateNote] = useState(initialNote);
//         const [selectedNote, setSelectedNote] = useState<Note>(initialNote);
//         const [favoriteNotes, setFavoriteNotes] = useState<Note[]>([]); // State for favorite notes
    
//         // Create a new note
//         const createNoteHandler = (event: React.FormEvent) => {
//             event.preventDefault();
//             if (createNote.title && createNote.content) {
//                 createNote.id = notes.length + 1; // Simple ID assignment
//                 createNote.isFavorite = false; 
//                 setNotes([createNote, ...notes]);
//                 setCreateNote(initialNote); // Reset the form
//             }
//         };
    
//         // Update the selected note
//         const updateNoteHandler = (note: Note) => {
//             setSelectedNote(note);
//         };
    
//         // Save updated note
//         const saveNoteHandler = (event: React.FormEvent) => {
//             event.preventDefault();
//             const updatedNotes = notes.map((note) => 
//                 note.id === selectedNote.id ? selectedNote : note
//             );
//             setNotes(updatedNotes);
//             setSelectedNote(initialNote); // Reset after saving
//         };
    
//         // Delete a note
//         const deleteNoteHandler = (noteId: number) => {
//             setNotes(notes.filter(note => note.id !== noteId));
//         };
    
//         // Toggle favorite status of a note
//         const toggleFavoriteHandler = (noteId: number) => {
//             setNotes((prevNotes) =>
//                 prevNotes.map((note) => 
//                     note.id === noteId ? { ...note, isFavorite: !note.isFavorite } : note
//                 )
//             );
//         };
    
//         // Update favoriteNotes whenever the notes state changes
//         useEffect(() => {
//             const updatedFavorites = notes.filter(note => note.isFavorite);
//             setFavoriteNotes(updatedFavorites);
//         }, [notes]);
    
//         return (
//             <div className='app-container'>
//                 {/* Note creation form */}
//                 <form className="note-form" onSubmit={createNoteHandler}>
//                     <div>
//                         <input
//                             placeholder="Note Title"
//                             onChange={(event) =>
//                                 setCreateNote({ ...createNote, title: event.target.value })}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <textarea
//                             placeholder="Note Content"
//                             onChange={(event) =>
//                                 setCreateNote({ ...createNote, content: event.target.value })}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <select
//                             onChange={(event) =>
//                                 setCreateNote({ ...createNote, label: event.target.value as Label })}
//                             required
//                         >
//                             <option value={Label.personal}>Personal</option>
//                             <option value={Label.study}>Study</option>
//                             <option value={Label.work}>Work</option>
//                             <option value={Label.other}>Other</option>
//                         </select>
//                     </div>
//                     <div><button type="submit">Create Note</button></div>
//                 </form>
    
//                 {/* Display the notes */}
//                 <div className="notes-grid">
//                     {notes.map((note) => (
//                         <div key={note.id} className="note-item">
//                             <div className="notes-header">
//                                 <button onClick={() => deleteNoteHandler(note.id)}>x</button>
//                                 <button onClick={() => updateNoteHandler(note)}>Edit</button>
//                                 <button onClick={() => toggleFavoriteHandler(note.id)}>
//                                     {note.isFavorite ? '❤️' : '🤍'} {/* Heart icon */}
//                                 </button>
//                             </div>
//                             <h2 contentEditable suppressContentEditableWarning onBlur={(e) => setSelectedNote({...selectedNote, title: e.currentTarget.textContent || ""})}>{note.title}</h2>
//                             <p contentEditable suppressContentEditableWarning onBlur={(e) => setSelectedNote({...selectedNote, content: e.currentTarget.textContent || ""})}>{note.content}</p>
//                             <p>{note.label}</p>
//                         </div>
//                     ))}
//                 </div>
    
//                 {/* Save updated note */}
//                 {selectedNote.id !== -1 && (
//                     <form onSubmit={saveNoteHandler}>
//                         <div>
//                             <button type="submit">Save Note</button>
//                         </div>
//                     </form>
//                 )}
    
//                 {/* Favorite Notes Section */}
//                 <h3>Favorite Notes</h3>
//                 {favoriteNotes.length === 0 ? (
//                     <p>No favorites yet.</p>
//                 ) : (
//                     <ul>
//                         {favoriteNotes.map((note) => (
//                             <li key={note.id}>{note.title}</li>
//                         ))}
//                     </ul>
//                 )}
    
//                 {/* Theme toggle and click counter */}
//                 <div className="App">
//                     <h1>Click Counter with Theme Toggle</h1>
//                     <ToggleTheme /> {/* Theme toggle button and ClickCounter */}
//                 </div>
//             </div>
//         );
//     }
    
    
    
//     }

import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './themeContext'; // Assuming themeContext.ts defines the ThemeContext
import { Label, Note } from './types'; // Adjust the path as needed to import your Note type
import { dummyNotesList } from './constants'; // Assuming dummyNotesList is defined in constants.ts
import { ToggleTheme } from './hooksExercise'; // Importing ToggleTheme from hooksExercise
import './App.css'; // Import your styles

export const StickyNotes = () => {
    const theme = useContext(ThemeContext); // Use the theme from context
    const [notes, setNotes] = useState<Note[]>(dummyNotesList); // Initialize notes
    const initialNote: Note = { id: -1, title: '', content: '', label: Label.other, isFavorite: false };
    const [createNote, setCreateNote] = useState(initialNote);
    const [selectedNote, setSelectedNote] = useState<Note>(initialNote);
    const [favoriteNotes, setFavoriteNotes] = useState<Note[]>([]); // State for favorite notes

    // Create a new note
    const createNoteHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (createNote.title && createNote.content) {
            createNote.id = notes.length + 1; // Simple ID assignment
            createNote.isFavorite = false; 
            setNotes([createNote, ...notes]);
            setCreateNote(initialNote); // Reset the form
        }
    };

    // Update the selected note
    const updateNoteHandler = (note: Note) => {
        setSelectedNote(note);
    };

    // Save updated note
    const saveNoteHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const updatedNotes = notes.map((note) => 
            note.id === selectedNote.id ? selectedNote : note
        );
        setNotes(updatedNotes);
        setSelectedNote(initialNote); // Reset after saving
    };

    // Delete a note
    const deleteNoteHandler = (noteId: number) => {
        setNotes(notes.filter(note => note.id !== noteId));
    };

    // Toggle favorite status of a note
    const toggleFavoriteHandler = (noteId: number) => {
        setNotes((prevNotes) =>
            prevNotes.map((note) => 
                note.id === noteId ? { ...note, isFavorite: !note.isFavorite } : note
            )
        );
    };

    // Update favoriteNotes whenever the notes state changes
    useEffect(() => {
        const updatedFavorites = notes.filter(note => note.isFavorite);
        setFavoriteNotes(updatedFavorites);
    }, [notes]);

    return (
        <div className='app-container'>
            {/* Note creation form */}
            <form className="note-form" onSubmit={createNoteHandler}>
                <div>
                    <input
                        placeholder="Note Title"
                        onChange={(event) =>
                            setCreateNote({ ...createNote, title: event.target.value })}
                        required
                    />
                </div>
                <div>
                    <textarea
                        placeholder="Note Content"
                        onChange={(event) =>
                            setCreateNote({ ...createNote, content: event.target.value })}
                        required
                    />
                </div>
                <div>
                    <select
                        onChange={(event) =>
                            setCreateNote({ ...createNote, label: event.target.value as Label })}
                        required
                    >
                        <option value={Label.personal}>Personal</option>
                        <option value={Label.study}>Study</option>
                        <option value={Label.work}>Work</option>
                        <option value={Label.other}>Other</option>
                    </select>
                </div>
                <div><button type="submit">Create Note</button></div>
            </form>

            {/* Display the notes */}
            <div className="notes-grid">
                {notes.map((note) => (
                    <div key={note.id} className="note-item">
                        <div className="notes-header">
                            <button onClick={() => deleteNoteHandler(note.id)}>x</button>
                            <button onClick={() => updateNoteHandler(note)}>Edit</button>
                            <button onClick={() => toggleFavoriteHandler(note.id)}>
                                {note.isFavorite ? '❤️' : '🤍'} {/* Heart icon */}
                            </button>
                        </div>
                        <h2 contentEditable suppressContentEditableWarning onBlur={(e) => setSelectedNote({...selectedNote, title: e.currentTarget.textContent || ""})}>{note.title}</h2>
                        <p contentEditable suppressContentEditableWarning onBlur={(e) => setSelectedNote({...selectedNote, content: e.currentTarget.textContent || ""})}>{note.content}</p>
                        <p>{note.label}</p>
                    </div>
                ))}
            </div>

            {/* Save updated note */}
            {selectedNote.id !== -1 && (
                <form onSubmit={saveNoteHandler}>
                    <div>
                        <button type="submit">Save Note</button>
                    </div>
                </form>
            )}

            {/* Favorite Notes Section */}
            <h3>Favorite Notes</h3>
            {favoriteNotes.length === 0 ? (
                <p>No favorites yet.</p>
            ) : (
                <ul>
                    {favoriteNotes.map((note) => (
                        <li key={note.id}>{note.title}</li>
                    ))}
                </ul>
            )}

            {/* Theme toggle and click counter */}
            <div className="App">
                <h1>Click Counter with Theme Toggle</h1>
                <ToggleTheme /> {/* Theme toggle button and ClickCounter */}
            </div>
        </div>
    );
};


   
    
    
    
    
    
    
    
    
    
    
    