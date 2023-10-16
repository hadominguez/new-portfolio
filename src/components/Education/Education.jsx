import { useTranslation } from 'react-i18next';
import CardEducation from '../Cards/CardEducation'


const Education = () => {
    const { t } = useTranslation()

    const education_description = t('page_education.education_description', { returnObjects: true });
    const university = t('education.university', { returnObjects: true });
    const high_school = t('education.high_school', { returnObjects: true });
    const elementary_school = t('education.elementary_school', { returnObjects: true });

    return (
        <>
            <div className="p-4">
                <div className="p-8">
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">{t('menu.education')}</h1>
                    {education_description.map((description, key) => (
                        <h3 className="text-xl text-gray-600 mb-4" key={key}>{description}</h3>
                    ))}
                </div>
            </div>
            <div className="timeline">
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
        </>
    );
}

export default Education;