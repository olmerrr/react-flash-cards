import { useState } from "react";

function FlashCards({ questions }) {
  const [ selectId, setSelectedId ] = useState(null);
  const handleClick = (id) => setSelectedId(id !== selectId ? id : null);

  return <ul className="flashcards">
    {questions.map(q => (
        <li
          key={q.id}
          className={q.id === selectId ? 'selected' : ''}
          onClick={() => handleClick(q.id)}
        >
          {q.id === selectId ? q.answer : q.question}
        </li>
      )
    )}
  </ul>;
}

export default FlashCards;