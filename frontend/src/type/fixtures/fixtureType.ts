
export interface ResponsFixture {
    fixture: Fixture;
    goals: Goals;
    league: League;
    teams: Teams;
    
}

export interface Fixture {
    id: number;
    referee: string;
    date: string;
    venue: Venue;
    status: Status;
}

export interface Venue {
    city: string;
    id: number;
    name: string
}

export interface Status {
    elapsed: number;
    extra: number;
    long: string;
    short: string;
}


export interface Goals {
    away: number;
    home: number;
}

export interface League {
    country: string;
    flag: string;
    id: number;
    logo: string;
    name: string;
    season: number;
}

export interface Teams {
    away: Away;
    home: Home;
    
}

export interface Away {
    id: number;
    logo: string;
    name: string;
}

export interface Home {
    id: number;
    logo: string;
    name: string;
}

