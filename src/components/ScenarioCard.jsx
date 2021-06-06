import Link from "next/link";

const ScenarioCard = ({ scenario }) => {
  return (
    <Link href={`/student/scenario?qaDeck=${scenario?.queryParam}`}>
      <div className="relative text-center">
        <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
          <img
            src={scenario?.deckIMG?.[0].url}
            alt=""
            className="object-cover pointer-events-none group-hover:opacity-75"
          />
        </div>
        <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
          {scenario?.deckName}
        </p>
      </div>
    </Link>
  )
}

export default ScenarioCard;