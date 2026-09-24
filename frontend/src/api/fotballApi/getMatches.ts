import type { ResponsFixture } from "../../type/fixtures/fixtureType";


export default async function GetMatches(date: string ): Promise<ResponsFixture[]> {

    try {
        const respons = await fetch(`https://localhost:7141/fotballApi/${date}`);

        if(!respons.ok){
            throw new Error(`HTTP error: ${respons.status}`)
        }

        const data = await respons.json();

        console.log(data.response)
        return data.response 
    
    } catch (error) {

        console.log("feiled to get matches");
    }

    return [];
    
    


}