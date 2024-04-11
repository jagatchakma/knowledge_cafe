import React from 'react';
import { FaRegBookmark } from "react-icons/fa";

const Card = (props) => {
    const imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BAHlIuDPK6lkExHi1DWN6cdzB2OJkmSSMNxEhQXpLnHQ3fslHw7AqUJsZEDvu85xhWw';
    const cardData = props.cardData;
    const timeCal = props.timeCal;
    const isbook = props.bookMarkedClick;
    
    return (
        <div>
            <div className='border rounded-lg pb-4 mb-4'>
                <img className='w-full h-80 rounded-lg' src={cardData.mainImage} alt="" />
                <div className='py-4 flex justify-between items-center'>
                    <div className='flex gap-4'>
                        <img className='w-12 rounded-full' src={cardData.userImage} alt="" />
                        <div>
                            <h2>{cardData.userName}</h2>
                            <p>{cardData.time}</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-green-600'>{cardData.timeRead} min read</h2>
                        <FaRegBookmark onClick={()=> {isbook()}} className='text-slate-500' />
                    </div>
                </div>
                <h2 className='text-3xl font-bold py-2'>{cardData.title} </h2>
                <h2 className='text-3xl font-bold py-2'>{cardData.subjectTitle} </h2>
                <div className='text-gray-500 font-extralight'>
                    <p>{cardData.hasTags}</p>
                </div>
                <button onClick={() => { timeCal(cardData.timeRead) }} className='text-teal-600 font-extralight underline underline-offset-1'>Mark as read</button>
            </div>

            {/* <div className='border rounded-lg pb-4 mb-4'>
                <img className='w-full h-80 rounded-lg' src={imgUrl} alt="" />
                <div className='py-4 flex justify-between items-center'>
                    <div className='flex'>
                        <img className='w-12 rounded-full' src={imgUrl} alt="" />
                        <div>
                            <h2>user name</h2>
                            <p>date: example date</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-green-600'>time min read</h2>
                        <FaRegBookmark className='text-slate-500' />
                    </div>
                </div>
                <h2 className='text-3xl font-bold py-2'>Question Question is hear </h2>
                <h2 className='text-3xl font-bold py-2'>Subject </h2>
                <div className='text-gray-500 font-extralight'>
                    <p>#hastack</p>
                </div>
                <button className='text-teal-600 font-extralight underline underline-offset-1'>Mark as read</button>
            </div>
            <div className='border rounded-lg pb-4 mb-4'>
                <img className='w-full h-80 rounded-lg' src={imgUrl} alt="" />
                <div className='py-4 flex justify-between items-center'>
                    <div className='flex'>
                        <img className='w-12 rounded-full' src={imgUrl} alt="" />
                        <div>
                            <h2>user name</h2>
                            <p>date: example date</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-green-600'>time min read</h2>
                        <FaRegBookmark className='text-slate-500' />
                    </div>
                </div>
                <h2 className='text-3xl font-bold py-2'>Question Question is hear </h2>
                <h2 className='text-3xl font-bold py-2'>Subject </h2>
                <div className='text-gray-500 font-extralight'>
                    <p>#hastack</p>
                </div>
                <button className='text-teal-600 font-extralight underline underline-offset-1'>Mark as read</button>
            </div> */}

        </div>

    );
};

export default Card;