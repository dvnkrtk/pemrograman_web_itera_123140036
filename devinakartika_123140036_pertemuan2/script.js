class Note {
    constructor(id, content, color) {
        this.id = id;
        this.content = content;
        this.color = color;
        this.timestamp = new Date().toLocaleString();
    }
}

class DashboardManager {
    static NOTES_KEY = 'Goodnotes'; 

    constructor() {
        this.notes = [];
        this._init();
    }
    
    async _init() {
        this.notes = await this._loadNotes();
        renderNotes();
    }

    async _loadNotes() {
        return new Promise(resolve => {
            const storedNotes = localStorage.getItem(DashboardManager.NOTES_KEY);
            resolve(storedNotes ? JSON.parse(storedNotes).map(noteData => new Note(noteData.id, noteData.content, noteData.color)) : []);
        });
    }

    _generateId = () => Date.now().toString();

    _saveNotes = () => {
        localStorage.setItem(DashboardManager.NOTES_KEY, JSON.stringify(this.notes));
    }

    addNote(content, color) {
        const id = this._generateId();
        const newNote = new Note(id, content, color);
        this.notes.push(newNote);
        this._saveNotes();
    }

    deleteNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
        this._saveNotes();
    }

    editNote(id, newContent, newColor) {
        const noteIndex = this.notes.findIndex(note => note.id === id);
        if (noteIndex !== -1) {
            this.notes[noteIndex].content = newContent;
            this.notes[noteIndex].color = newColor;
            this.notes[noteIndex].timestamp = new Date().toLocaleString();
            this._saveNotes();
        }
    }
}

const manager = new DashboardManager(); 

const noteGrid = document.getElementById('noteGrid');
const noteInput = document.getElementById('noteInput');
const noteColorInput = document.getElementById('noteColor');
const addNoteBtn = document.getElementById('addNoteBtn');

function renderNotes() {
    const notes = manager.notes;
    noteGrid.innerHTML = '';

    if (notes.length === 0) {
        noteGrid.innerHTML = '<p class="empty-message">Ayo tambahkan catatan berwarna pertamamu!</p>';
        return;
    }

    notes.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.classList.add('note-card');
        noteCard.dataset.id = note.id;
        noteCard.style.backgroundColor = note.color;
        
        noteCard.innerHTML = `
            <span class="note-content">${note.content}</span>
            <span class="note-timestamp">${note.timestamp}</span>
            <div class="actions">
                <button class="edit-btn" title="Edit Catatan">✏️</button>
                <button class="delete-btn" title="Hapus Catatan">🗑️</button>
            </div>
        `;
        noteGrid.appendChild(noteCard);
    });
}

addNoteBtn.addEventListener('click', () => {
    const content = noteInput.value.trim();
    const color = noteColorInput.value;
    
    if (content) {
        manager.addNote(content, color);
        noteInput.value = ''; 
        noteColorInput.value = '#ffffa5';
        renderNotes();
    }
});

noteGrid.addEventListener('click', (e) => {
    const noteCard = e.target.closest('.note-card');
    if (!noteCard) return;

    const id = noteCard.dataset.id;
    
    if (e.target.classList.contains('delete-btn')) {
        if (confirm('Yakin ingin menghapus catatan berwarna ini?')) {
            manager.deleteNote(id);
            renderNotes();
        }
    } else if (e.target.classList.contains('edit-btn')) {
        const currentNote = manager.notes.find(n => n.id === id);
        
        const newContent = prompt('Edit catatan:', currentNote.content);
        
        if (newContent !== null && newContent.trim() !== "") {
            const newColor = prompt('Edit warna (Hex Code, misalnya #FFC107):', currentNote.color);
            
            if (newContent.trim() !== currentNote.content || newColor !== currentNote.color) {
                manager.editNote(id, newContent.trim(), newColor || currentNote.color);
                renderNotes();
            }
        }
    }
});