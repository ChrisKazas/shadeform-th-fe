import InstanceCard from './InstanceCard';
import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination'


const InstanceCardList = () => {

    const [instanceData, setInstanceData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [instancesPerPage] = useState(10);



    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(`http://localhost:8080/instances/types`);
                if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                    console.log(response);
                }
                const responseData = await response.json();
                // console.log(responseData.instance_types);

                setInstanceData(responseData.instance_types);
                setLoading(false)
                // console.log(instanceData)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const indexOfLastInstance = currentPage * instancesPerPage;
    const indexOfFirstInstance = indexOfLastInstance - instancesPerPage;
    const currentInstances = instanceData.slice(indexOfFirstInstance, indexOfLastInstance);

    const paginate = (pageNumber) => {
        console.log(pageNumber)
        setCurrentPage(pageNumber)
    };

    const instanceCards = currentInstances.map(instance => (
        <InstanceCard key={instance} instanceData={instance} />
    ));

    console.log(currentInstances)
    return (
        <div>
            <Pagination instancesPerPage={instancesPerPage} totalInstances={instanceData.length} paginate={paginate} />
            {instanceCards}
        </div>
    );
}

export default InstanceCardList
