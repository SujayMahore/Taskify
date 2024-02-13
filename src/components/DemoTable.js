import React from 'react'

const DemoTable = () => {
  return (
    <div className='m-10 rounded-lg'>
        <table className='min-w-full divide-y divide-gray-200 border rounded-md '>
            <thead className='bg-gray-50'>
                <tr>
                <th className='px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider border-r '>Name</th>
                <th className='px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider'>Class</th>
                <th className='px-6 text-left text-sm font-medium text-gray-500 uppercase tracking-wider'>Marks</th>
                </tr>
                
            </thead>
            <tbody className='bg-white divide-y divide-gray-200 '>
                <tr className='hover:scale-105 hover:bg-gray-400'>
                    <td className='px-6 py-4 whitespace-nowrap   '>Sujay</td>
                    <td className='px-6 py-4 whitespace-nowrap  '>7</td>
                    <td className='px-6 py-4 whitespace-nowrap  '>78</td>
                </tr>
                <tr>
                    <td className='px-6 py-4 whitespace-nowrap border-r  '>Sujay</td>
                    <td className='px-6 py-4 whitespace-nowrap border-r '>7</td>
                    <td className='px-6 py-4 whitespace-nowrap border-r '>78</td>
                </tr>
                <tr>
                    <td className='px-6 py-4 whitespace-nowrap border-r '>Sujay</td>
                    <td className='px-6 py-4 whitespace-nowrap border-r '>7</td>
                    <td className='px-6 py-4 whitespace-nowrap border-r '>78</td>
                </tr>
                <tr>
                    <td className='px-6 py-4 whitespace-nowrap border-r '>Sujay</td>
                    <td className='px-6 py-4 whitespace-nowrap border-r '>7</td>
                    <td className='px-6 py-4 whitespace-nowrap border-r '>78</td>
                </tr>

            </tbody>
        </table>
    </div>
  )
}

export default DemoTable