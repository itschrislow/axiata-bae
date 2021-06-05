import { useState } from "react";
import { useRouter } from "next/router";
import Nav from "../../src/components/Nav";
import QuestionCard from "../../src/components/QuestionCard";

const scenarios = [
  {
    title: 'Body Shaming',
    link: 'body-shaming',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Physical Bullying',
    link: 'physical-bullying',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Name Calling',
    link: 'name-calling',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
]

const Scenario = () => {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState([]);
  return (
    <Nav>
      <QuestionCard question={scenarios[0]} />
    </Nav>
  )
}

export default Scenario;