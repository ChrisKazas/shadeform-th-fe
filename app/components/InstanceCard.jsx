// components/InstanceCard.js
import React from 'react';
import CreateButton from './CreateButton';

export default function InstanceCard({ instanceData }) {
    return (
        <div className=" mb-4 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{instanceData.shade_instance_type} Instance</div>
                <div className="text-gray-700 text-base">
                    <p className="mb-2">
                        <span className="font-semibold">Cloud:</span> {instanceData.cloud}
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">Cloud Instance Type:</span> {instanceData.cloud_instance_type}
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">GPU Type:</span> {instanceData.gpu_type}
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">Interconnect:</span> {instanceData.interconnect}
                    </p>
                    <p className="mb-2">
                        <span className="font-semibold">NVLink:</span> {instanceData.nvlink ? 'true' : 'false'}
                    </p>
                </div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #vcpus: {instanceData.vcpus}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #memory: {instanceData.memory_in_gb}GB
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #storage: {instanceData.storage_in_gb}GB
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #gpus: {instanceData.num_gpus}
                </span>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    ${instanceData.hourly_price}/hr
                </span>
            </div>
            <div className="float-right mr-4 mb-4">
                <CreateButton instanceData={instanceData} />
            </div>
        </div>
    );
};



