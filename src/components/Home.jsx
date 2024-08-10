// eslint-disable-next-line no-unused-vars
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen max-w-4xl ml-56 bg-gray-100 flex flex-col justify-center items-center text-center py-8 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Our Website!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus quas enim vel eaque illum? Atque sint vero doloremque quidem unde optio, natus deserunt nam. Temporibus eveniet deserunt aperiam unde ut. Ut accusantium cumque unde quidem quis officiis commodi aperiam sapiente, quos vero similique quod ex pariatur laborum debitis minus! Quod, aperiam, recusandae voluptates dolorem exercitationem temporibus, laboriosam tempora excepturi provident saepe nulla quos accusamus praesentium fugit adipisci architecto incidunt modi voluptatum officia eos omnis? Perspiciatis numquam adipisci provident modi error dicta, rem vel voluptatum sapiente quibusdam, consectetur maiores delectus incidunt blanditiis iure quos non! Animi quisquam corrupti deleniti? Placeat?.
      </p>
           <div className='flex'>
                <h2 className='font-bold text-xl mr-4'>From</h2>
                <input type="text" placeholder='Choose Station' className='pd-3'></input>
                 <h3 className='ml-20 font-bold text-xl mr-4'>to</h3>
                 <input type="text" placeholder='choose destination station' className='pl-3' />
                 <input type="date" className='ml-3' />
           </div>
    </div>
  );
};

export default Home;
