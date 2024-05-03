import InstanceCard from './InstanceCard';
import { v4 as uuidv4 } from 'uuid';

export default function InstanceCardList({ instanceData }) {

    return (
        <main>
            {instanceData && instanceData.length > 0 ? (
                <>
                    {instanceData.map((instance) => (
                        <InstanceCard
                            key={instance.cloud}
                            instanceData={instance}
                        />
                    ))}

                </>
            ) : (
                <p>No instance data available.</p>
            )
            }
        </main >
    );
}
