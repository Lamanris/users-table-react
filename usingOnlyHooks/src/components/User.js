import React, {useState, useEffect} from 'react';

const User = ({user, isAllChecked, setIsAllChecked, setUsersNames, usersNames}) => {
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        isAllChecked ? setIsChecked(true) : setIsChecked(false)
    },[isAllChecked])

    const highlight = () => {
        setIsChecked(!isChecked)
        if (!isChecked) {
            setUsersNames([...usersNames, user.name.split(' ')[0]])
        } else {
            setUsersNames(usersNames.filter(el => el!== user.name.split(' ')[0]))
            if (usersNames.length === 1) {setIsAllChecked(false)}
        }
    }

    return (
        <tr key={user.id} style={{background: isChecked ? "#39ddee" : "none"}}
            >
            <td className="border-dashed border-t border-gray-200 px-3">
                <label
                    className="text-teal-500 inline-flex justify-between items-center transition duration-500 ease-in-out hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
                    <input type="checkbox" onChange={highlight} checked={isChecked} className="form-checkbox rowCheckbox focus:outline-none focus:shadow-outline cursor-pointer"/>
                </label>
            </td>
            <td className="border-dashed border-t border-gray-200 firstName">
                <span className="text-gray-700 px-6 py-3 flex items-center">{user.name.split(' ')[0]}</span>
            </td>
            <td className="border-dashed border-t border-gray-200 lastName">
                <span className="text-gray-700 px-6 py-3 flex items-center">{user.name.split(' ')[1]}</span>
            </td>
            <td className="border-dashed border-t border-gray-200 emailAddress">
                <span className="text-gray-700 px-6 py-3 flex items-center">{user.email}</span>
            </td>
        </tr>
    );
};

export default User;