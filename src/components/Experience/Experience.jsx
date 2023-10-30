import { useTranslation } from 'react-i18next';
import CardExperience from '../Cards/CardExperience'

const Experience = () => {
    const { t } = useTranslation()
    const experience_description = t('page_experience.experience_description', { returnObjects: true });
    const experience = t('work_experience', { returnObjects: true });

    return (
        <div className='grid-body'>
            <div className="p-4">
                <div className="p-8 bg-gray-800 bg-opacity-30">
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{t('menu.experience')}</span>
                    </h1>
                    {experience_description.map((description, key) => (
                        <h3 className="text-xl text-gray-400 mb-4" key={key}>{description}</h3>
                    ))}
                </div>
            </div>
            <div className="timeline">
                <div className="outer">
                    {experience.map((experience, key) => (
                        <CardExperience experience={experience} key={key} />
                    ))}
                </div>
            </div >
        </div>
    );
}

export default Experience;