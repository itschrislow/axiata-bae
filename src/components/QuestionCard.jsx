const QuestionCard = ({
  index,
  setIndex,
  showPrev,
  showNext,
  question,
}) => {
  return (
    <>
      {/* PREVIOUS & NEXT BUTTONS */}
      <div className={`
          mb-4 flex 
          ${(showPrev && showNext) ?
          "justify-between"
          : showPrev ?
            "justify-start"
            :
            "justify-end"
        }`}
      >
        {showPrev && (
          <button
            onClick={() => setIndex(index - 1)}
            className="text-white font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10 focus:outline-none"
          >
            Previous
          </button>
        )}

        {showNext && (
          <button
            onClick={() => setIndex(index + 1)}
            className="text-white font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10 focus:outline-none"
          >
            Next
          </button>
        )}
      </div>

      <div className="w-full grid grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
          <img
            src={question?.quesIMG?.[0].url}
            className="object-cover pointer-events-none group-hover:opacity-75"
          />
        </div>

        {/* QUESTION */}
        <div className="h-full flex flex-col justify-between bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <p className="block text-sm font-medium text-gray-700">
            {question?.question}
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
    </>
  )
}

export default QuestionCard;