import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubLeetCodeStats = () => {

    return (
        <div className='w-full bg-[#0a192f] text-gray-300'>
            <div className='justify-center items-center flex flex-col py-16 px-2 space-y-5'>
                <h2 className="text-4xl font-semibold text-[#416D19] text-center">GitHub Contributions</h2>
                <GitHubCalendar 
                    username="Abdullahprogramme" 
                    blockSize={15} 
                    blockMargin={5} 
                    loadingDataText='Loading Data...'
                />
            </div>
        </div>
    );
}

export default GitHubLeetCodeStats;