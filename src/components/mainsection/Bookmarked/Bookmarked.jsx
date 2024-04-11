import React from 'react';
import './Bookmarked.css'

const Bookmarked = (props) => {
    // const spentTime = props.spenTime;
    console.log(props.spentTime);
    return (
        <div className='bg-slate-300 stickyAction'>
            <h1>
                {/* Spent time on read: {props.spentTime} */}
            </h1>
        </div>
    );
};

export default Bookmarked;