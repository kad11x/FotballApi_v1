import { useEffect, useState } from "react";
import GetMatches from "../../api/fotballApi/getMatches";
import type { ResponsFixture } from "../../type/fixtures/fixtureType";
import FixtureCard from "../fixtureCard/FixtureCard";
import Header from "../statusCard/Header/Header";

export default function FixtureContainer() {
  const [fixtures, setFixtures] = useState<ResponsFixture[] | undefined>([]);

  const date = "2026-09-23";

  useEffect(() => {
    async function loadFixture(date: string) {
      const data = await GetMatches(date);
      setFixtures(data);
    }

    loadFixture(date);
  }, []);
  return (
    <div>
      <Header />
      <h1>Matches</h1>

      {fixtures?.map((fixture) => (
        <FixtureCard key={fixture.fixture.id} fixture={fixture} />
      ))}
    </div>
  );
}
