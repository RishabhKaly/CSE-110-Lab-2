
// import React, { useState, useEffect } from 'react';
// import { ThemeContext, themes } from "./themeContext";


// export function ClickCounter() {
//   const [count, setCount] = useState(0);
//   const theme = useContext(ThemeContext);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   }, [count]); // This ensures that the effect is run every time `count` changes.

//   return (
//     <div
//       style={{
//         background: theme.background,
//         color: theme.foreground,
//         padding: '20px',
//       }}
//     >
//       <p>You clicked {count} times</p>
//       <button
//         onClick={() => setCount(count + 1)}
//         style={{ background: theme.foreground, color: theme.background }}
//       >
//         Click me
//       </button>
//     </div>
//   );
// }

// function ToggleTheme() {
//     const [currentTheme, setCurrentTheme] = useState(themes.light);
  
//     const toggleTheme = () => {
//       setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
//     };
  
//     return (
//       <ThemeContext.Provider value={currentTheme}>
//         <button onClick={toggleTheme}>Toggle Theme</button>
//         <ClickCounter />
//       </ThemeContext.Provider>
//     );
//   }


// export default ToggleTheme;

// ^6:300000yvgubinoimok
//
//






// import React, { useState, useContext, useEffect } from 'react';

// import { ThemeContext, themes } from './themeContext';

// // ClickCounter component
// export function ClickCounter() {
//   const [count, setCount] = useState(0);
//   const theme = useContext(ThemeContext); // Accessing the theme from context

//   return (
//     <div
//       style={{
//         background: theme.background,
//         color: theme.foreground,
//         padding: '20px',
//       }}
//     >
//       <p>You clicked {count} times</p>
//       <button
//         onClick={() => setCount(count + 1)}
//         style={{ background: theme.foreground, color: theme.background }}
//       >
//         Click me
//       </button>
//     </div>
//   );
// }





// function ToggleTheme() {
//   const [currentTheme, setCurrentTheme] = useState(themes.light);

//   const toggleTheme = () => {
//       setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
//   };

//   return (
//       <ThemeContext.Provider value={currentTheme}>
//           <button onClick={toggleTheme} style={{ margin: '20px' }}>
//               Toggle Theme
//           </button>
//           <ClickCounter />
//       </ThemeContext.Provider>
//   );
// }

// // Notes component with favorite functionality
// function Notes() {
//     const [notes, setNotes] = useState([
//         { id: 1, title: 'Note 1', isFavorite: false },
//         { id: 2, title: 'Note 2', isFavorite: false },
//         { id: 3, title: 'Note 3', isFavorite: false },
//     ]);

//     const [favoriteNotes, setFavoriteNotes] = useState<string[]>([]);

//     // Toggle favorite status of a note
//     const handleFavorite = (noteId: number) => {
//         setNotes((prevNotes) =>
//             prevNotes.map((note) =>
//                 note.id === noteId ? { ...note, isFavorite: !note.isFavorite } : note
//             )
//         );
//     };

//     // Update favoriteNotes whenever the notes state changes
//     useEffect(() => {
//         const updatedFavorites = notes
//             .filter((note) => note.isFavorite)
//             .map((note) => note.title);

//         setFavoriteNotes(updatedFavorites);
//     }, [notes]);

//     return (
//         <div>
//             <h2>Notes</h2>
//             <ul>
//                 {notes.map((note) => (
//                     <li key={note.id}>
//                         {note.title}
//                         <button onClick={() => handleFavorite(note.id)}>
//                             {note.isFavorite ? 'Unlike' : 'Like'}
//                         </button>
//                     </li>
//                 ))}
//             </ul>

//             <h3>Favorite Notes</h3>
//             {favoriteNotes.length === 0 ? (
//                 <p>No favorites yet.</p>
//             ) : (
//                 <ul>
//                     {favoriteNotes.map((title, index) => (
//                         <li key={index}>{title}</li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }





// export default ToggleTheme;

import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext, themes } from './themeContext';

// ClickCounter component
export function ClickCounter() {
    const [count, setCount] = useState(0);
    const theme = useContext(ThemeContext);

    return (
        <div
            style={{
                background: theme.background,
                color: theme.foreground,
                padding: '20px',
            }}
        >
            <p>You clicked {count} times</p>
            <button
                onClick={() => setCount(count + 1)}
                style={{ background: theme.foreground, color: theme.background }}
            >
                Click me
            </button>
        </div>
    );
}

// ToggleTheme component
export function ToggleTheme() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    };

    return (
        <div>
            <button onClick={toggleTheme} style={{ margin: '20px' }}>
                Toggle Theme
            </button>
            <ClickCounter />
        </div>
    );
}

// Notes component with favorite functionality
export function Notes() {
    const [notes, setNotes] = useState([
        { id: 1, title: 'Note 1', content: 'Content 1', isFavorite: false },
        { id: 2, title: 'Note 2', content: 'Content 2', isFavorite: false },
        { id: 3, title: 'Note 3', content: 'Content 3', isFavorite: false },
    ]);

    const [favoriteNotes, setFavoriteNotes] = useState<string[]>([]);

    // Toggle favorite status of a note
    const handleFavorite = (noteId: number) => {
        setNotes((prevNotes) =>
            prevNotes.map((note) =>
                note.id === noteId ? { ...note, isFavorite: !note.isFavorite } : note
            )
        );
    };

    // Update favoriteNotes whenever the notes state changes
    useEffect(() => {
        const updatedFavorites = notes
            .filter((note) => note.isFavorite)
            .map((note) => note.title);

        setFavoriteNotes(updatedFavorites);
    }, [notes]);

    return (
        <div>
            <h2>Notes</h2>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        {note.title}
                        <button onClick={() => handleFavorite(note.id)}>
                            {note.isFavorite ? 'Unlike' : 'Like'}
                        </button>
                    </li>
                ))}
            </ul>

            <h3>Favorite Notes</h3>
            {favoriteNotes.length === 0 ? (
                <p>No favorites yet.</p>
            ) : (
                <ul>
                    {favoriteNotes.map((title, index) => (
                        <li key={index}>{title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}



