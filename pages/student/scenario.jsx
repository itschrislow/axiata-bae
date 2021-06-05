import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Nav from "../../src/components/Nav";
import QuestionCard from "../../src/components/QuestionCard";

const Scenario = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState([]);

  const qaDeck = router.query?.qaDeck;

  const fetchDeck = async () => {
    await fetch(`
      ${process.env.NEXT_PUBLIC_AIRTABLE_API_URL}QA
      ?filterByFormula=${encodeURIComponent(`{qaDeck} = '${qaDeck}'`)}
    `, {
      headers: new Headers({
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`
      })
    })
      .then(res => res.json())
      .then(res => setQuestions(res.records))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (qaDeck) fetchDeck();
  }, [qaDeck])

  return (
    <Nav>
      <QuestionCard
        index={index}
        setIndex={setIndex}
        showPrev={index > 0}
        showNext={index < questions.length - 1}
        question={questions?.[index]?.fields}
      />
    </Nav>
  )
}

export default Scenario;