
import { useEffect, useState } from 'react'
import InstanceCard from './InstanceCard';


export default function InstanceCardList() {

    const [instanceData, setInstanceData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/instances/types');
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                }
                const data = await response.json();

                setInstanceData(data.instance_types);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <main>
            {instanceData && instanceData.length > 0 ? (
                instanceData.map((instance) => (
                    <InstanceCard
                        key={instance.cloud}
                        instanceData={instance}
                    />
                ))
            ) : (
                <p>No instance data available.</p>
            )}

        </main>
    )
}
