export default async function getLocationByID(id: string) {
    const location = await fetch(`http://localhost:4001/location/${id}`).then((res) => res.json())
    return location;
} 