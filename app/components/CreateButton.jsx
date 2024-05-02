import React from 'react';

const CreateButton = ({ instanceData }) => {

  const handleClick = async () => {

    console.log("***", instanceData)

    try {
      const response = await fetch('http://localhost:8080/instances/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(instanceData),
      });

      if (response.ok) {
        console.log('Instance created successfully');
        alert("Instance Created")
      } else {
        console.error('Error creating instance');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <button
      className={`btn-primary text-white font-bold py-2 px-4 rounded`}
      onClick={handleClick}
    >
      Create
    </button>
  );
};

export default CreateButton;