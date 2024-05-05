// components/InstanceCard.js
import React from 'react';
import CreateButton from './CreateButton';

export default function InstanceCard({ instanceData }) {

    const Tag = ({ label, value }) => {
        return (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {label} {value}
            </span>
        )
    }

    const InstanceSpec = ({ label, value }) => {
        return (
            <p className="mb-2">
                <span className="font-semibold">{label}:</span> {value}
            </p>
        )
    }



    return (
        <div className=" mb-4 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{instanceData.shade_instance_type} Instance</div>
                <div className="text-gray-700 text-base">
                    <InstanceSpec label={'Cloud'} value={instanceData.cloud} />
                    <InstanceSpec label={'Cloud Instance Type'} value={instanceData.cloud_instance_type} />
                    <InstanceSpec label={'GPU Type'} value={instanceData.gpu_type} />
                    <InstanceSpec label={'Interconnect'} value={instanceData.interconnect} />
                    <InstanceSpec label={'NVLink'} value={instanceData.nvlink ? 'true' : 'false'} />
                </div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Tag label={'#vcpus: '} value={instanceData.vcpus} />
                <Tag label={'#memory:'} value={`${instanceData.memory_in_gb}GB`} />
                <Tag label={`#storage: `} value={`${instanceData.storage_in_gb}GB`} />
                <Tag label={'#gpus: '} value={instanceData.num_gpus} />
            </div>
            <div className="px-6 py-4">
                <Tag label={`$${instanceData.hourly_price}/hr`} value={instanceData.num_gpus} />
            </div>
            <div className="float-right mr-4 mb-4">
                <CreateButton instanceData={instanceData} />
            </div>
        </div>
    );
};



