import React from 'react';

function Home(){
    return(
        <div className="text-center">
            <h1 className="font-bold mb-3 p-5 bg-pink-200">Welcome to the Home Page</h1>
            <p className="p-3 bg-pink-300">
                On this site, we are given data in a csv file. You can use the navigation bar to explore other site features. Keep reading for a description of the data!
            </p>
            <p className="p-3 bg-pink-400">
                Description: This data set consists of Placement data of students in a XYZ campus. It includes secondary and higher secondary school percentage and specialization. It also includes degree specialization, type and Work experience and salary offers to the placed students
            </p>
        </div>

    )
}

export default Home;