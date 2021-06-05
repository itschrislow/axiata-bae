const QuestionCard = ({ question }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-10">
      <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
        <img
          src={question.source}
          className="object-cover pointer-events-none group-hover:opacity-75"
        />
      </div>

      <div className="h-full flex flex-col justify-between bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <p className="block text-sm font-medium text-gray-700">
          Question
        </p>
        <div className="grid grid-cols-2 gap-10">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center"
          >
            <p className="w-full">No</p>
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-center"
          >
            <p className="w-full">Yes</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard;