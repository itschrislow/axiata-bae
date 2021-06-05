import Nav from "../../src/components/Nav";
import ScenarioCard from "../../src/components/ScenarioCard";

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

const Student = () => {
  return (
    <Nav>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6">
        {scenarios?.map(scenario => (
          <ScenarioCard scenario={scenario} />
        ))}
      </div>
    </Nav>
  )
}

export default Student;