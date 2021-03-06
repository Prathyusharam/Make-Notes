import { useState,  createContext, useContext, useReducer } from "react";
import { NotesReducer } from "../reducers";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [noteState, noteDispatch] = useReducer(NotesReducer, {
    notes: [],
    showModal: false,
    noteToEdit: {},
    notesTrash: [],
    notesArchive: [],
    pickColor: false,
    pickColorModal: false,
    labels: ["no-label", "study","work"],
    sortByDateTime: "",
});

  return (
    <NotesContext.Provider value={{ note, setNote, noteState, noteDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};
const useNote = () => useContext(NotesContext);

export { useNote, NotesProvider };