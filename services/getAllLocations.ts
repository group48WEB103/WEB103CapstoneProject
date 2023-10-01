export default async function getAllLocations() {
    const allLocations = await fetch('http://localhost:4001/locations').then((res) => res.json())
    console.log(allLocations)
    return allLocations;
}