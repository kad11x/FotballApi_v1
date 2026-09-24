import { Link } from "react-router-dom";
import type { ResponsFixture } from "../../type/fixtures/fixtureType";

type FixtureCardProps = {
  fixture: ResponsFixture;
};

export default function FixtureCard({ fixture }: FixtureCardProps) {
  return (
    <Link to={`/match/${fixture.fixture.id}`} state={{ fixture }}>
      <div className="fixture-card">
        <p>{fixture.league.name}</p>

        <div>
          <img src={fixture.teams.home.logo} width="40" />

          <strong>{fixture.teams.home.name}</strong>

          <span>
            {fixture.goals.home} - {fixture.goals.away}
          </span>

          <strong>{fixture.teams.away.name}</strong>

          <img src={fixture.teams.away.logo} width="40" />
        </div>
      </div>
    </Link>
  );
}
