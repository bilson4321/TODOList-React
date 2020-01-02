import React from 'react';

class Header extends React.Component
{
    render()
    {
        return(
        <header className='bg-dark text-white mb-2'>
            <div className='container p-3'>
                <h1>TO-DO List</h1>
            </div>
        </header>
        );
    }
}
export default Header;