"use client"

import React, { useState, useEffect } from 'react';
import InstanceCard from '../components/InstanceCard';

const InstanceList = () => {
    const [instances, setInstances] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInstances = async () => {
            try {
                const response = await fetch('http://localhost:8080/instances');
                if (!response.ok) {
                    throw new Error('Failed to fetch instances');
                }
                const data = await response.json();
                setInstances(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInstances();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <main>
            <h2>Instance List</h2>
            <ul>
                {instances.map((instance) => (
                    <div>
                        <li key={instance.cloud}>
                            <InstanceCard instanceData={instance} />
                        </li>
                    </div>
                ))}

            </ul>
        </main>
    );
};

export default InstanceList;