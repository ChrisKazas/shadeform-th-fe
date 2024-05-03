"use client"
import Link from 'next/link'
import {useEffect, useState} from 'react'
import InstanceCardList from './components/InstanceCardList';


export default function Home() {

  const [instanceData, setInstanceData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [instanceCount, setInstanceCount] = useState(0)

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch(`http://localhost:8080/instances/types`);
              if (!response.ok) {
                  throw new Error(`HTTP error ${response.status}`);
              }
              const responseData = await response.json();

              setInstanceData(responseData.instance_types.slice(instanceCount,instanceCount+10));
              setTotalPages(Math.ceil(responseData.instance_types.length / 10));
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
      setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
      setInstanceCount(instanceCount+10)
  };

  const handlePrevPage = () => {
      setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
      
  };


  return (
    <main>
      <h2>Instance Types</h2>
      <div className="grid grid-rows-4 grid-flow-col">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
          <span>{currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
      <InstanceCardList instanceData={instanceData}/>
    </main>
  )
}
