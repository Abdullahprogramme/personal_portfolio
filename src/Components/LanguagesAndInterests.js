import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; // import the styles

// add your languages and interests here
const LanguagesAndInterests = () => {
    const languages = ['English', 'Urdu'];
    const interests = ['Coding', 'Reading', 'Cooking', 'Technology', 'Gaming', 'Table Tennis'];

    return (
        <div className="w-full bg-[#0a192f] text-gray-300 pb-8">
            <VerticalTimeline>
                <VerticalTimelineElement
                    date="Languages"
                    iconStyle={{ background: '#416D19', color: '#fff' }}
                    contentStyle={{ background: '#333', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #333' }}
                >
                    {languages.map((language, index) => (
                        <h3 key={index} className=" text-pink-300">{language}</h3>
                    ))}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    date="Interests"
                    iconStyle={{ background: '#416D19', color: '#fff' }}
                    contentStyle={{ background: '#333', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #333' }}
                >
                    {interests.map((interest, index) => (
                        <h3 key={index} className=" text-pink-300">{interest}</h3>
                    ))}
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default LanguagesAndInterests;
