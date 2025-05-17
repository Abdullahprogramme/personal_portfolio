import React from 'react';
import DisplayLottie from './Lottie/DisplayLottie';
import GitHub from './Lottie/Github.json';

const GitHubLeetCodeStats = () => {
    const leetCodeUsername = 'Abdullah_Tariq';
    const githubUsername = 'Abdullahprogramme';

    return (
        <div className='w-full bg-[#0a192f] text-gray-300'>
            <div className='justify-center items-center flex flex-col py-16 px-2 space-y-5'>
                <h2 className="text-4xl font-semibold text-[#416D19] text-center">GitHub Contributions</h2>
                <DisplayLottie animationData={GitHub} />

                {/* GitHub Stats Card */}
                <img
                    src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical`}
                    alt="GitHub Stats"
                    className="w-full max-w-xl"
                />

                {/* GitHub Streak Stats */}
                <img
                    src={`https://streak-stats.demolab.com?user=${githubUsername}&theme=radical`}
                    alt="GitHub Streak"
                    className="w-full max-w-xl"
                />

                {/* GitHub Top Languages */}
                <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=radical`}
                    alt="Top Languages"
                    className="w-full max-w-xl"
                />

                {/* LeetCode Badge */}
                <img 
                    src={`https://img.shields.io/badge/LeetCode-${leetCodeUsername}-green`} 
                    alt="LeetCode badge" 
                />
            </div>
        </div>
    );
}

export default GitHubLeetCodeStats;
