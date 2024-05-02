import React from 'react'

export default function InstanceCard() {
    return (
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">A5000x2 Instance</div>
                <div class="text-gray-700 text-base">
                    <p class="mb-2">
                        <span class="font-semibold">Cloud:</span> jarvislabs
                    </p>
                    <p class="mb-2">
                        <span class="font-semibold">Cloud Instance Type:</span> A5000
                    </p>
                    <p class="mb-2">
                        <span class="font-semibold">GPU Type:</span> A5000
                    </p>
                    <p class="mb-2">
                        <span class="font-semibold">Interconnect:</span> pcie
                    </p>
                    <p class="mb-2">
                        <span class="font-semibold">NVLink:</span> false
                    </p>
                </div>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #vcpus: 14
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #memory: 64GB
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #storage: 500GB
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #gpus: 2
                </span>
            </div>
            <div class="px-6 py-4">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    $125/hr
                </span>
            </div>
        </div>
    )
}
