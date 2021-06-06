import Link from "next/link";
import { useState } from "react";

const Report = () => {
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = () => {
    setEmail("");
    setComments("");
  }

  return (
    <div className="mt-10 sm:mt-0">
      <div className="mt-5 md:mt-0">
        <form action="#" method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* EMAIL ADDRESS */}
                <div className="col-span-1">
                  <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                    Email address
                    </label>
                  <input
                    type="text"
                    name="email_address"
                    id="email_address"
                    autoComplete="email"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* SCHOOL */}
                <div className="col-span-1">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    School
                    </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>SMK Ave Maria Convent</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                {/* INCIDENT */}
                <div className="col-span-2">
                  <label htmlFor="email_address" className="mb-1 block text-sm font-medium text-gray-700">
                    Which picture best describes the situation you're facing?
                    </label>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                      <img
                        src="/static/isolation.jpg"
                        className="object-cover pointer-events-none opacity-100"
                      />
                    </div>
                    <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                      <img
                        src="/static/vandalism.jpg"
                        className="object-cover pointer-events-none opacity-50"
                      />
                    </div>
                    <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                      <img
                        src="/static/bullying.jpg"
                        className="object-cover pointer-events-none opacity-50"
                      />
                    </div>
                  </div>
                </div>

                {/* COMMENTS */}
                <div className="col-span-2">
                  <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                    Comments
                    </label>
                  <textarea
                    type="text"
                    name="street_address"
                    id="street_address"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <Link href="/student/make-a-report">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit Report
                  </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Report;