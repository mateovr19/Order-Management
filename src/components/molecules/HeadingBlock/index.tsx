
import React from 'react'

const Index = ({ title, description }: { title: string, description: string }) => {
    return (

        <div className='flex flex-col gap-1'>
            <h1 >{title}</h1>
            <p > {description}</p>
        </div>  
        
    );

}

export default Index