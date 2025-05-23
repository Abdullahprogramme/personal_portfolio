import React, { useEffect, useState } from "react";
import { FaStar, FaUsers, FaUserFriends, FaCode } from "react-icons/fa";
import { MdCollectionsBookmark } from "react-icons/md";
import DisplayLottie from './Lottie/DisplayLottie';
import GitHub from './Lottie/Github.json';
import blob from "../Assets/blob.svg";

const githubUsername = "Abdullahprogramme"; // Replace with your GitHub username


const StatCard = ({ icon, value, label }) => (
    <div className="flex flex-col items-center relative w-28 h-28">
        <div className="relative flex items-center justify-center w-20 h-20 mb-2">
            {/* Blob SVG as background */}
            <img
                src={blob}
                alt=""
                className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 z-0 opacity-80"
                draggable={false}
            />
            <span className="relative z-10">{icon}</span>
        </div>
        <span className="font-semibold text-xl">{value}</span>
        <span className="text-base">{label}</span>
    </div>
);

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
                <StatCard
                    icon={<MdCollectionsBookmark className="text-[#81A263] text-4xl" />}
                    value={stats.publicRepos}
                    label="Repos"
                />
                <StatCard
                    icon={<FaUsers className="text-[#81A263] text-4xl" />}
                    value={stats.followers}
                    label="Followers"
                />
                <StatCard
                    icon={<FaUserFriends className="text-[#81A263] text-4xl" />}
                    value={stats.following}
                    label="Following"
                />
                <StatCard
                    icon={<FaStar className="text-[#81A263] text-4xl" />}
                    value={stats.totalStars}
                    label="Stars"
                />
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
