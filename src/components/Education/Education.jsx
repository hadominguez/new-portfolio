import { useTranslation } from 'react-i18next';
import CardEducation from '../Cards/CardEducation'


const Education = () => {
    const { t } = useTranslation()

    const education_description = t('page_education.education_description', { returnObjects: true });
    const university = t('education.university', { returnObjects: true });
    const high_school = t('education.high_school', { returnObjects: true });
    const elementary_school = t('education.elementary_school', { returnObjects: true });

    return (
        <div className='grid-body'>
            <div className="p-4">
                <div className="p-8 bg-gray-800 bg-opacity-30 rounded-lg">
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{t('menu.education')}</span>
                    </h1>
                    {education_description.map((description, key) => (
                        <h3 className="text-xl text-gray-400 mb-4" key={key}>{description}</h3>
                    ))}
                </div>
            </div>
            <div className="timeline ">
                <div className="outer">
                    {university.map((education, key) => (
                        <CardEducation education={education} key={key} />
                    ))}
                    {high_school.map((education, key) => (
                        <CardEducation education={education} key={key} />
                    ))}
                    {elementary_school.map((education, key) => (
                        <CardEducation education={education} key={key} />
                    ))}
                </div>
            </div >
        </div>
    );
}

export default Education;