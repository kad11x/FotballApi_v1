import { useLocation } from "react-router-dom";
import type { ResponsFixture } from "../../type/fixtures/fixtureType";
import Header from "../../components/statusCard/Header/Header";

export default function MatchPage() {
  const location = useLocation();

  const fixture = location.state?.fixture as ResponsFixture;

  if (!fixture) {
    return <p>Match not found</p>;
  }

  return (
    <>
      <Header />
      <main>
        <h2>{fixture.league.name}</h2>

        <div className="match-header">
          {/* HOME */}

          <div>
            <img src={fixture.teams.home.logo} width="80" />

            <h2>{fixture.teams.home.name}</h2>
          </div>

          {/* SCORE */}

          <div>
            <h1>
              {fixture.goals.home}
              {" - "}
              {fixture.goals.away}
            </h1>

            <p>{fixture.fixture.status.long}</p>
          </div>

          {/* AWAY */}

          <div>
            <img src={fixture.teams.away.logo} width="80" />

            <h2>{fixture.teams.away.name}</h2>
          </div>
        </div>

        <hr />

        {/* MATCH INFORMATION */}

        <section>
          <h2>Match information</h2>

          <p>Date: {fixture.fixture.date}</p>

          <p>Referee: {fixture.fixture.referee ?? "Unknown"}</p>

          <p>Stadium: {fixture.fixture.venue.name ?? "Unknown"}</p>

          <p>City: {fixture.fixture.venue.city ?? "Unknown"}</p>

          <p>Status: {fixture.fixture.status.long}</p>

          <p>Minutes: {fixture.fixture.status.elapsed ?? "-"}</p>
        </section>

        <hr />

        {/* LEAGUE */}

        <section>
          <h2>League</h2>

          <img src={fixture.league.logo} width="60" />

          <p>{fixture.league.name}</p>

          <p>{fixture.league.country}</p>

          <p>Season: {fixture.league.season}</p>
        </section>
      </main>
    </>
  );
}
