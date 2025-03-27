import { fetchData } from "@/actions/fetch";

const ListFetch = async () => {
    const data = await fetchData(); // Se ejecuta en el servidor automáticamente

    return (
        <ul>
            {data.map((contact) => (
                <li key={contact.id.toString()}>
                    {contact.name} - {contact.email}
                </li>
            ))}
        </ul>
    );
};

export default ListFetch;