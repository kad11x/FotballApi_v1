

export default async function GetMatches(){

    try {
        const respons = await fetch("https://localhost:7141/fotballapi/matches/");

        if(!respons.ok){
            throw new Error(`HTTP error: ${respons.status}`)
        }

        const data = await respons.json();

        return data 
    
    } catch (error) {

        console.log("feiled to get matches");


        
    }
    


}