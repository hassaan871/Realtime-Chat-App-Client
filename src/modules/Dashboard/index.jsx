import React from 'react';
import Person from '../../assets/person.svg';

const Dashboard = () => {
  const contacts = [
    {
      name: 'John',
      status: 'Online',
      img: Person
    },
    {
      name: 'Marry',
      status: 'Online',
      img: Person
    },
    {
      name: 'Varun',
      status: 'Offline',
      img: Person
    },
    {
      name: 'Adam',
      status: 'Online',
      img: Person
    },
    {
      name: 'Alex',
      status: 'Online',
      img: Person
    },
    {
      name: 'Lee',
      status: 'Offline',
      img: Person
    }
  ]
  return (
    <div className='w-screen flex'>
      <div className='w-[25%] h-screen bg-secondary'>
        <div className='flex mx-14 items-center my-8'>
          <div className='border border-primary p-[20x] rounded-full'>
            <img src={Person} alt="" width={75} height={75} />
          </div>
          <div className='ml-8'>
            <h3 className='text-2xl font-semibold'>Tutorials Dev</h3>
            <p className='text-lg font-light'>My Account</p>
          </div>
        </div>
        <hr />
        <div className='mx-14 mt-10'>
          <div className='text-primary text-lg'>Messages</div>
          <div>
            {
              contacts.map(({ name, status, img }) => {
                return (
                  <div className='flex items-center py-8 border-b border-b-gray-300'>
                    <div className='cursor-pointer flex items-center'>
                    <div className='border border-primary p-[20x] rounded-full'>
                      <img src={img} alt="" width={50} height={50} />
                    </div>
                    <div className='ml-8'>
                      <h3 className='text-lg font-semibold'>{name}</h3>
                      <p className={`text-sm font-light ${status == 'Online' ? 'text-green-600' : 'text-gray-600'}`}>{status}</p>
                    </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='w-[50%] h-screen '></div>
      <div className='w-[25%] h-screen '></div>
    </div>
  )
}

export default Dashboard;
