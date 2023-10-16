import { useTranslation } from 'react-i18next';
import CardExperience from '../Cards/CardExperience'

const Experience = () => {
    const { t } = useTranslation()
    const experience_description = t('page_experience.experience_description', { returnObjects: true });
    const experience = t('work_experience', { returnObjects: true });

    return (
        <>
            <div className="p-4">
                <div className="p-8">
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">{t('menu.experience')}</h1>
                    {experience_description.map((description, key) => (
                        <h3 className="text-xl text-gray-600 mb-4" key={key}>{description}</h3>
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
        </>
    );
  }
  
  export default Experience;