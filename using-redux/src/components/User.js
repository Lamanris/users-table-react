import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {checkAll, setUsernames} from "../redux/actions";


const User = ({user}) => {
    const [isChecked, setIsChecked] = useState(false)

    const isAllChecked = useSelector(state => state.isAllChecked)
    const {userNames} = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        isAllChecked ? setIsChecked(true) : setIsChecked(false)
    },[isAllChecked])

    const highlight = () => {
        setIsChecked(!isChecked)
        if (!isChecked) {
            dispatch(setUsernames([...userNames, user.name.split(' ')[0]]))

        } else {
            dispatch(setUsernames(userNames.filter(el => el!== user.name.split(' ')[0])))
            if (userNames.length === 1) {dispatch(checkAll(false))}
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