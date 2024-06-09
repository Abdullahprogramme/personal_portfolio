import React from 'react';

const LanguagesAndInterests = () => {
    const languages = ['English', 'Urdu'];
    const interests = ['Coding', 'Reading', 'Cooking', 'Technology', 'Gaming'];

    return (
        <div className="w-full bg-[#0a192f] text-gray-300 pb-8">
            <div className="flex flex-col space-y-4">
                <div>
                    <h2 className="text-4xl font-semibold text-[#416D19] text-center">Languages</h2>
                    <div className="flex flex-wrap justify-center mt-4">
                        {languages.map((language, index) => <span key={index} className="text-gray-400 font-semibold m-2 p-2 border border-gray-500 rounded hover:border-pink-300 hover:text-pink-300 transition duration-500">{language}</span>)}
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl font-semibold text-[#416D19] text-center">Interests</h2>
                    <div className="flex flex-wrap justify-center mt-4">
                        {interests.map((interest, index) => <span key={index} className="text-gray-400 font-semibold m-2 p-2 border border-gray-500 rounded hover:border-pink-300 hover:text-pink-300 transition duration-500">{interest}</span>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LanguagesAndInterests;