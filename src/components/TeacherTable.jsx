const TeacherTable = () => {
  const people = [
    {
      name: 'Jane Cooper',
      scenario: 'Body Shaming',
      q1: true,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    },
    {
      name: 'John Doe',
      scenario: 'Physical Bullying',
      q1: true,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    },
    {
      name: 'John Doe',
      scenario: 'Physical Bullying',
      q1: true,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    },
    {
      name: 'John Doe',
      scenario: 'Physical Bullying',
      q1: true,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    },
    {
      name: 'John Doe',
      scenario: 'Physical Bullying',
      q1: true,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    },
    {
      name: 'John Doe',
      scenario: 'Physical Bullying',
      q1: true,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    },
    {
      name: 'John Doe',
      scenario: 'Physical Bullying',
      q1: true,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    },
    {
      name: 'John Doe',
      scenario: 'Physical Bullying',
      q1: true,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    },
    {
      name: 'John Doe',
      scenario: 'Physical Bullying',
      q1: true,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    },
    {
      name: 'John Doe',
      scenario: 'Physical Bullying',
      q1: true,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    },
    {
      name: 'John Doe',
      scenario: 'Physical Bullying',
      q1: true,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    },
  ]

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Scenario
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Q1
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Q2
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Q3
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Q4
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Q5
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {person.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.scenario}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.q1 ? "Yes" : "No"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.q2 ? "Yes" : "No"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.q3 ? "Yes" : "No"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.q4 ? "Yes" : "No"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {person.q5 ? "Yes" : "No"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherTable;