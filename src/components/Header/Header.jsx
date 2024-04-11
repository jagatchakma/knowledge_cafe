import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex justify-between py-4'>
                <h2 className='text-2xl font-bold'>Knowledge Cafe</h2>
                <div className='min-h-6'>
                    <img className='w-9 h-9 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BAHlIuDPK6lkExHi1DWN6cdzB2OJkmSSMNxEhQXpLnHQ3fslHw7AqUJsZEDvu85xhWw" alt="" />
                </div>
            </div>
            <hr className="h-px  bg-gray-200 border-1 dark:bg-gray-900"></hr>
        </div>
    );
};

export default Header;