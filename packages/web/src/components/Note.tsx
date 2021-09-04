import React from "react";
import ReactMarkdown from "react-markdown";
import { NoteT } from "../types";

export const Note = (props: { note: NoteT }) => {
  const [noteBody, setNoteBody] = React.useState(props.note.body);

  return (
    <div>
      <h1>{props.note.title}</h1>
      <textarea
        onChange={(event) => {
          setNoteBody(event.target.value);
        }}
        value={noteBody}
      />
      <div>
        <ReactMarkdown>{noteBody}</ReactMarkdown>
      </div>
    </div>
  );
};
