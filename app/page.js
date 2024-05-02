"use client"
import Link from 'next/link'
import {useEffect, useState} from 'react'
import InstanceCard from './components/InstanceCard';


export default function Home() {

  const [instanceData, setInstanceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/instances/types');
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        console.log(data.instance_types)
        setInstanceData(data.instance_types);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <main>
      <h2>Instance Types</h2>

      <InstanceCard instanceData={instanceData} />
      <ul>
        {instanceData.map((type) => (
          <div className="card">
            <li key={type.cloud}>{type.cloud}</li>
          </div>
        ))}
      </ul>
      

      <div className="flex justify-center my-8">
        <Link href="/create">
          <button className="btn-primary">Create Instance</button>
        </Link>
      </div>

      
    </main>
  )
}
