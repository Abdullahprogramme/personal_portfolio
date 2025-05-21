import React, { useEffect, useState } from "react";
import { FaStar, FaUsers, FaUserFriends, FaCode } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import DisplayLottie from './Lottie/DisplayLottie';
import GitHub from './Lottie/Github.json';

const githubUsername = "Abdullahprogramme"; // Replace with your GitHub username

const GitHubStatsCustom = () => {
    const [stats, setStats] = useState({
        publicRepos: 0,
        followers: 0,
        following: 0,
        totalStars: 0,
        languages: {},
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch user info
                const userRes = await fetch(`https://api.github.com/users/${githubUsername}`);
                const userData = await userRes.json();

                // Fetch repos to count stars and languages
                let page = 1;
                let repos = [];
                let fetched;
                do {
                    const reposRes = await fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100&page=${page}`);
                    fetched = await reposRes.json();
                    repos = repos.concat(fetched);
                    page++;
                } while (fetched.length === 100);

                const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

                // Count languages
                const languageCount = {};
                repos.forEach(repo => {
                    if (repo.language) {
                        languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
                    }
                });

                // Sort and get top 5 languages
                const sortedLanguages = Object.entries(languageCount).sort((a, b) => b[1] - a[1]).slice(0, 5);

                setStats({
                    publicRepos: userData.public_repos,
                    followers: userData.followers,
                    following: userData.following,
                    totalStars,
                    languages: sortedLanguages,
                    loading: false,
                    error: null,
                });
            } catch (err) {
                setStats((prev) => ({ ...prev, loading: false, error: "Failed to fetch data" }));
            }
        };

        fetchStats();
    }, []);

    if (stats.loading) return <div className="text-center py-8">Loading GitHub stats...</div>;
    if (stats.error) return <div className="text-center text-red-500 py-8">{stats.error}</div>;

    return (
        <div className="bg-[#0a192f] p-10 text-gray-300 flex flex-col items-center space-y-6 shadow-2xl w-full min-h-screen mx-auto">
            <h2 className="text-4xl font-semibold text-[#416D19] inline border-pink-300 border-b-4">GitHub Stats</h2>
            <DisplayLottie animationData={GitHub} />

            <div className="flex flex-wrap justify-center gap-10 text-2xl">
                <div className="flex flex-col items-center">
                    <MdCollectionsBookmark className="text-[#81A263] text-4xl mb-2" />
                    <span className="font-semibold">{stats.publicRepos}</span>
                    <span className="text-base">Repos</span>
                </div>

                <div className="flex flex-col items-center">
                    <FaUsers className="text-[#81A263] text-4xl mb-2" />
                    <span className="font-semibold">{stats.followers}</span>
                    <span className="text-base">Followers</span>
                </div>

                <div className="flex flex-col items-center">
                    <FaUserFriends className="text-[#81A263] text-4xl mb-2" />
                    <span className="font-semibold">{stats.following}</span>
                    <span className="text-base">Following</span>
                </div>

                <div className="flex flex-col items-center">
                    <FaStar className="text-[#81A263] text-4xl mb-2" />
                    <span className="font-semibold">{stats.totalStars}</span>
                    <span className="text-base">Stars</span>
                </div>
            </div>

            <div className="w-full max-w-4xl mx-auto mt-10 p-6 bg-[#1a2a3a] rounded-lg shadow-lg">
                <div className="flex justify-center">
                    <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-center">
                        <FaCode className="text-[#81A263]" /> Top Languages
                    </h3>
                </div>

                <div className="flex flex-wrap gap-6 justify-center">
                    {stats.languages.length === 0 && <span>No languages found</span>}
                    {stats.languages.map(([lang, count]) => (
                        <div key={lang} className="flex flex-col items-center bg-[#1a2a3a] px-6 py-3 rounded-xl shadow-sm hover:shadow-lg transition duration-300">
                            <span className="text-lg font-bold">{lang}</span>
                            <span className="text-sm text-[#81A263]">{count} repo{count > 1 ? "s" : ""}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GitHubStatsCustom;
