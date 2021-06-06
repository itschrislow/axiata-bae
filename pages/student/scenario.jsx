import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Nav from "../../src/components/Nav";
import QuestionCard from "../../src/components/QuestionCard";

const Scenario = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const qaDeck = router.query?.qaDeck;

  const fetchDeck = async () => {
    await fetch(`
      ${process.env.NEXT_PUBLIC_AIRTABLE_API_URL}/QA
      ?filterByFormula=${encodeURIComponent(`{qaDeck} = '${qaDeck}'`)}
    `, {
      headers: new Headers({
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`
      })
    })
      .then(res => res.json())
      .then(res => {
        let arr = [...res.records];
        arr.sort((a, b) => {
          a.fields.id > b.fields.id ? 1 : -1
        })
        setQuestions(arr)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (qaDeck) fetchDeck();
  }, [qaDeck])

  useEffect(() => {
    if (questions) {
      setAnswers(Array(questions?.length))
    }
  }, [questions])

  return (
    <Nav>
      <QuestionCard
        index={index}
        setIndex={setIndex}
        showPrev={index > 0}
        showNext={index < questions?.length - 1}
        showSubmit={index === questions?.length - 1}
        question={questions?.[index]?.fields}
        answers={answers}
        setAnswers={setAnswers}
      />
    </Nav>
  )
}

export default Scenario;