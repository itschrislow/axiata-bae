import { CheckCircleIcon, XCircleIcon, XIcon } from '@heroicons/react/solid'
import Link from 'next/link';

const ANSWER = {
  Yes: "TRUE",
  No: "FALSE",
}

const QuestionCard = ({
  index,
  setIndex,
  showPrev,
  showNext,
  showSubmit,
  question,
  answers,
  setAnswers,
}) => {
  const handleAnswers = (answer) => {
    let newAnswers = answers.slice();
    newAnswers[index] = answer;
    setAnswers(newAnswers);

    // if (showNext) handleNext();
  }

  const handlePrev = () => setIndex(index - 1)
  const handleNext = () => setIndex(index + 1)

  const handleSubmit = async () => {
    let obj = {};
    // obj["fields"] = answers.ma
    console.log(JSON.stringify(answers))
    // await fetch(`${process.env.NEXT_PUBLIC_AIRTABLE_API_URL}/answers`, {
    //   method: "POST",
    //   headers: new Headers({
    //     'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`
    //   }),
    //   body: JSON.stringify(),
    // })
  }

  return (
    <>
      {/* PREVIOUS & NEXT BUTTONS */}
      <div className="w-full grid grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg shadow bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
          <img
            src={question?.quesIMG?.[0].url}
            className="object-cover pointer-events-none group-hover:opacity-75"
          />
        </div>

        {/* QUESTION */}
        <div className="h-full flex flex-col justify-between bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <p className="block font-medium text-gray-700">
            {question?.question}
          </p>

          <div>
            {/* SUCCESS */}
            {/* <div className="mb-6 rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="font-medium text-green-800">{question?.encouragement}</p>
                </div>
              </div>
            </div> */}
            {/* FAIL */}
            {/* <div className="mb-6 rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <p className="font-medium text-red-800">{question?.guidance}</p>
                </div>
              </div>
            </div> */}
            {/* CTA */}
            <div className="grid grid-cols-2 gap-10">
              <button
                type="button"
                onClick={() => handleAnswers(ANSWER.No)}
                className={`
                inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 hover:bg-indigo-100 focus:outline-none text-center
                ${answers[index] === ANSWER.No ?
                    "ring-2 ring-offset-2 ring-indigo-500"
                    :
                    ""
                  }
              `}
              >
                <p className="w-full">No</p>
              </button>
              <button
                type="button"
                onClick={() => handleAnswers(ANSWER.Yes)}
                className={`
                inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 hover:bg-indigo-100 focus:outline-none text-center
                ${answers[index] === ANSWER.Yes ?
                    "ring-2 ring-offset-2 ring-indigo-500"
                    :
                    ""}
              `}
              >
                <p className="w-full">Yes</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PREV & NEXT BUTTON */}
      <div className={`
          mt-4 flex 
          ${(showPrev && (showNext || showSubmit)) ?
          "justify-between"
          : showPrev ?
            "justify-start"
            :
            "justify-end"
        }`}
      >
        {showPrev && (
          <button
            onClick={handlePrev}
            className="text-yellow-500 font-medium rounded-md bg-yellow-500 bg-opacity-10 px-3 py-2 hover:bg-opacity-20 focus:outline-none"
          >
            Previous
          </button>
        )}

        {showNext && (
          <button
            onClick={handleNext}
            className="text-yellow-500 font-medium rounded-md bg-yellow-500 bg-opacity-10 px-3 py-2 hover:bg-opacity-20 focus:outline-none"
          >
            Next
          </button>
        )}
        {console.log(showSubmit)}
        {showSubmit && (
          <Link href="/student">
            <button
              onClick={handleSubmit}
              className={`
              text-yellow-500 font-medium rounded-md bg-yellow-500 bg-opacity-10 px-3 py-2 hover:bg-opacity-20 focus:outline-none
              ${showSubmit ? "cursor-pointer" : "cursor-not-allowed"}
            `}
            >
              Submit
          </button>
          </Link>
        )}
      </div>
    </>
  )
}

export default QuestionCard;