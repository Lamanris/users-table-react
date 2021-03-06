import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios'
import User from "./User"
import {MainContext} from "../context/main-context";


const Table = () => {
    const [filterSearch, setFilterSearch] = useState('')

    const {users, userNames, isAllChecked, setUsers, checkAll, setUsernames} = useContext(MainContext)

    const headings = [{'key': 'firstName', 'value': 'Firstname'}, {'key': 'lastName', 'value': 'Lastname'}, {'key': 'emailAddress', 'value': 'Email'},]

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => setUsers(data))
    },[])

    let filteredUsers = [...users].filter(el => el.name.toLowerCase().includes(filterSearch.toLowerCase()))

    const checkAllUsers = () => {
        checkAll(!isAllChecked)
        if (!isAllChecked) {
            let allUsersNames = [...new Set([...userNames, ...(filteredUsers.map(el => el.name.split(' ')[0]))])]
            setUsernames(allUsersNames)
        } else {
            setUsernames([])
        }
    }

    return (
        <div className="container mx-auto py-6 px-4">
            <h1 className="text-3xl py-4 border-b mb-10">Users Table</h1>

            <div className="mb-4 flex justify-between items-center">
                <div className="flex-1 pr-4">
                    <div className="relative md:w-1/3">
                        <input type="search"
                               onChange={(e) => setFilterSearch(e.target.value)}
                               className="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                               placeholder="Search..."/>
                        <div className="absolute top-0 left-0 inline-flex items-center p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" viewBox="0 0 24 24"
                                 strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                 strokeLinejoin="round">
                                <rect x="0" y="0" width="24" height="24" stroke="none"/>
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
                <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
                    <thead>
                    <tr className="text-left">
                        <th className="py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100">
                            <label
                                className="text-teal-500 inline-flex justify-between items-center transition duration-500 ease-in-out hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
                                <input type="checkbox" className="form-checkbox focus:outline-none focus:shadow-outline cursor-pointer" checked={isAllChecked} onChange={checkAllUsers}/>
                            </label>
                        </th>
                        {
                            headings.map(el => (
                                <th key={el.key} className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs">
                                    {el.value}
                                </th>
                            ))
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        filteredUsers?.map(user => (
                            <User key={user.id} user={user} />
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <h3 className="text-2xl py-4">????????????????????????: <span className="text-xl">{userNames.length > 0 ? userNames.join(', ') : '???????????????? ??????????????????????????'}</span></h3>
        </div>
    )
}

export default Table;