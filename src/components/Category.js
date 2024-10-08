import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setValue } from '../features/searchSlice';

const Category = () => {

    const dispatch = useDispatch();
    const handleClick = (index,category) => {
        setSelected(index)
        dispatch(setValue(category))
    }
    const categorylist = ["All", "Gaming", "Live", "Battelgrounds Mobile India", "Music", "Mixes", "React Router", "HTML", "CSS", "Javascript","Axios","Node","Mongo DB"]
    const [selected,setSelected] = useState(0)
    return (
        <div className='flex gap-3 p-2 mx-2 fixed w-full bg-white top-[3.5rem]'>
            {categorylist.map((category,index) => {
                return (
                <button key={index} className='px-2 py-1 font-semibold text-sm bg-gray-200 rounded-lg' onClick={()=>handleClick(index,category)} style={{backgroundColor : selected===index ? 'black' : "",color: selected===index ? "white" : ""}}>
                    {category}
                </button>)
            })}
        </div>
    )
}

export default Category