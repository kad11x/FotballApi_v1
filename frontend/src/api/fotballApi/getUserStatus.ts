



export async function getStatus()
{
    const respons = await fetch("https://localhost:7141/fotballapi/status");
    

    const result = await respons.json();

    return result.response
} 

