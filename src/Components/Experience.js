import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // import the styles

// importing lottie animations
import Experience from './Lottie/Experience.json';
import DisplayLottie from './Lottie/DisplayLottie';

const Timeline = () => {
    // add or change the experiences here
    const experiences = [
        { year: 'May 2024', title: 'Summer career Academy', description: 'The Summer Career Academy provided essential industry skills through a comprehensive career curation program featuring experts in various fields. The training encompassed a wide range of topics, including emotional intelligence, leadership, and presentation skills. Additionally, we gained proficiency in Power BI for data manipulation and entry, with clear and effective instruction. We also had the opportunity to meet and learn from industry leaders, enhancing our understanding and preparedness for future careers.', 
            skills: ['Power BI', 'Data Manipulation', 'Leadership', 'Presentation Skills', 'Team Management', 'Teamwork', 'Strategic Thinking', 'Data Visualization', 'Problem Solving'] },
        { year: 'June 2024', title: 'Gamer programmer intern', description: 'I worked as a game programmer intern for the game development team at M-Labs at Mindstorm studios and learnt game design and game art too.', skills: ['Unity', 'C#', 'Game Development'] },
        { year: 'June 2024', title: 'Android developer intern', description: 'I worked as a React Native intern for the Android development team at Prodigy InfoTech.', skills: ['React Native', 'Android', 'Typescript', 'React'] },
        { year: 'July 2024', title: 'Participant QWorld Quantum Computing Workshop', description: 'I participated in the QWorld Quantum Computing Workshop, where I learned about quantum computing and quantum programming. I also learned about quantum algorithms and quantum programming languages in a very basic way.', skills: ['Quantum Computing', 'Quantum Programming', 'Quantum Algorithms', 'QiSkit'] }
    ];

    return (
        <div name='experience' className="w-full pb-20 min-h-screen bg-[#0a192f] text-gray-300">
            
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl inline text-[#416D19] border-pink-300 border-b-4 font-bold">Experience</p>
                    <p className="py-4">/ My work experience. /</p>
                </div>
            </div>

            <div className='flex justify-center items-center'> {/* Adjusted for centering */}
                <div className="w-3/4 mx-auto"> {/* Resize and center the Lottie animation */}
                    <DisplayLottie animationData={Experience} />
                </div>
            </div>

            <VerticalTimeline>
                {experiences.map((experience, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={experience.year}
                        dateClassName="date"
                        iconStyle={{ background: '#416D19', color: '#fff' }}
                        contentStyle={{ background: '#333', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #333' }}
                    >
                        <h3 className="text-xl font-semibold text-pink-300">{experience.title}</h3>
                        <p className='text-gray-300'>{experience.description}</p>
                        <div className="flex flex-wrap">
                            {experience.skills.map((skill, index) => (
                                <div key={index} className="bg-[#416D19] text-gray-300 text-sm p-1 m-1 rounded-sm">{skill}</div>
                            ))} 
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;
