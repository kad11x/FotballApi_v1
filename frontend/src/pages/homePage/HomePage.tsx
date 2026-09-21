import Header from "../../components/statusCard/Header/Header";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Welcome section */}
        <section className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Football Dashboard
          </h1>

          <p className="mt-2 text-gray-600">
            Explore teams, leagues and football statistics.
          </p>
        </section>

        {/* Cards */}
        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-800">Teams</h2>

            <p className="mt-2 text-gray-500">
              Search and explore football teams.
            </p>

            <button className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              View Teams
            </button>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-800">Matches</h2>

            <p className="mt-2 text-gray-500">
              View upcoming and recent matches.
            </p>

            <button className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              View Matches
            </button>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-800">Leagues</h2>

            <p className="mt-2 text-gray-500">
              Browse leagues and competitions.
            </p>

            <button className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              View Leagues
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
