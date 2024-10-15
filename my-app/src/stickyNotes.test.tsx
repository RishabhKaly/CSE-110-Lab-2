import React, { ReactNode } from 'react'; // Import ReactNode
import { render, screen, fireEvent } from '@testing-library/react';
import { StickyNotes } from './stickyNotes';
import { ThemeContext } from './themeContext'; // Import your ThemeContext
import { dummyNotesList } from './constants'; // Adjust the path as needed

// Define the correct type for the theme
interface Theme {
    background: string;
    foreground: string;
}

// Mocking ThemeContext for the test
const MockThemeContext = ({ children }: { children: ReactNode }) => {
    const theme: Theme = { background: '#fff', foreground: '#000' }; // Provide actual theme values
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

describe('StickyNotes', () => {
    beforeEach(() => {
        render(
            <MockThemeContext>
                <StickyNotes />
            </MockThemeContext>
        );
    });

    test('should display all created notes', () => {
        const notes = dummyNotesList; // Use the dummy notes list for testing
        notes.forEach(note => {
            expect(screen.getByText(note.title)).toBeInTheDocument();
            expect(screen.getByText(note.content)).toBeInTheDocument();
        });
    });

    test('should update a note title and content', () => {
        const noteToUpdate = dummyNotesList[0];
        
        // Click the Edit button using the test ID
        fireEvent.click(screen.getByTestId(`edit-button-${noteToUpdate.id}`)); // Click the edit button for the note
    
        // Update the note title
        const titleElement = screen.getByText(noteToUpdate.title);
        fireEvent.blur(titleElement, { target: { innerHTML: 'Updated Title' } });
    
        // Update the note content
        const contentElement = screen.getByText(noteToUpdate.content);
        fireEvent.blur(contentElement, { target: { innerHTML: 'Updated Content' } });
    
        // Save the changes
        fireEvent.click(screen.getByText('Save Note'));
    
        // Assert that the updated values are displayed
        expect(screen.getByText('Updated Title')).toBeInTheDocument();
        expect(screen.getByText('Updated Content')).toBeInTheDocument();
    });

    test('should delete a note when the x button is pressed', () => {
        const noteToDelete = dummyNotesList[0];
        
        // Assert that the note is initially in the document
        expect(screen.getByText(noteToDelete.title)).toBeInTheDocument();
        
        // Click the delete button using the test ID
        fireEvent.click(screen.getByTestId(`delete-button-${noteToDelete.id}`)); // Click the delete button for the note
    
        // Assert that the note is no longer in the document
        expect(screen.queryByText(noteToDelete.title)).not.toBeInTheDocument();
    });
});



 







