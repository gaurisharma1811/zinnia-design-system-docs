import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaCheckCircle } from "react-icons/fa";

type ComponentTableItem = {
    id: number;
    name: string;
    status: string;
    codeReady: string;
    designAssets: string;
    documentation: string;
    peerReview: string;
    link: string;
}

const ComponentOverviewTable = () => {
    const [componentData, setComponentData] = useState<ComponentTableItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/data/components-data.json');
            const data = await res.json();
            setComponentData(data.ui_base_elements);
        }
        fetchData();
    }, []);

    return (
        <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th align="left" className="py-2 px-4 text-left font-semibold text-gray-600">Name</th>
                        <th align="left" className="py-2 px-4 text-left font-semibold text-gray-600">Status</th>
                        <th align="left" className="py-2 px-4 text-left font-semibold text-gray-600">Code Ready</th>
                        <th align="left" className="py-2 px-4 text-left font-semibold text-gray-600">Design Assets</th>
                        <th align="left" className="py-2 px-4 text-left font-semibold text-gray-600">Documentation</th>
                        <th align="left" className="py-2 px-4 text-left font-semibold text-gray-600">Peer Review</th>
                    </tr>
                </thead>
                <tbody>
                    {componentData.map((item) => (
                        <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-2 px-4"><Link href={item.link} className="text-blue-600 hover:underline">{item.name}</Link></td>
                            <td className="py-2 px-4" align='center'>{item.status}</td>
                            <td className="py-2 px-4" align='center'>{item.codeReady === 'done' ? <FaCheckCircle className='text-green-700'/> : item.codeReady}</td>
                            <td className="py-2 px-4" align='center'>{item.designAssets === 'done' ? <FaCheckCircle className='text-green-700'/> : item.designAssets}</td>
                            <td className="py-2 px-4" align='center'>{item.documentation === 'done' ? <FaCheckCircle className='text-green-700'/> : item.documentation}</td>
                            <td className="py-2 px-4" align='center'>{item.peerReview === 'done' ? <FaCheckCircle className='text-green-700'/> : item.peerReview}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ComponentOverviewTable;
