import { useEffect, useState } from "react";
import Nav from "../../src/components/Nav";
import ScenarioCard from "../../src/components/ScenarioCard";

const Student = () => {
  const [scenarios, setScenarios] = useState([]);

  const fetchScenarios = async () => {
    await fetch(`
      ${process.env.NEXT_PUBLIC_AIRTABLE_API_URL}qaDeck?api_key=${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}&view=Grid%20view
    `)
      .then(res => res.json())
      .then(res => setScenarios(res.records))
  }

  useEffect(() => {
    fetchScenarios();
  }, [])

  return (
    <Nav>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6">
        {scenarios?.map(scenario => (
          <ScenarioCard scenario={scenario.fields} />
        ))}
      </div>
    </Nav>
  )
}

export default Student;