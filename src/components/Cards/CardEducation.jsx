import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const CardEducation = (props) => {
    const { t } = useTranslation()

    const { education, key } = props;
    return (
        <>
            <div className="card p-8" key={key}>
                <div className="info">
                    <h1 className="title mb-4 text-3xl font-extrabold dark:text-white md:text-2xl lg:text-2xl">{education.degree}</h1>
                    <h2 className="text-xl mb-4 font-extrabold text-gray-400">{t('page_education.institution')}: {education.institution}</h2>
                    <p className="text-gray-600">{t('page_education.location')}: {education.location}</p>
                    <p className="text-gray-600">{t('page_education.start')}: {education.start}</p>

                    {education.intermediate_title && (
                        <>
                            {education.intermediate_title.title && (<h2 className="text-xl mb-4 font-extrabold text-gray-400">{t('page_education.title')}: {education.intermediate_title.title}</h2>)}
                            <p className="text-gray-600">{t('page_education.end')}: {education.intermediate_title.end}</p>
                            {education.intermediate_title.CGPA && (<p className="text-gray-600">{t('page_education.CGPA')}: {education.intermediate_title.CGPA}</p>)}
                        </>
                    )}

                    {education.final_title && (
                        <>
                            {education.final_title.title && (<h2 className="text-xl mb-4 font-extrabold text-gray-400">{t('page_education.title')}: {education.final_title.title}</h2>)}
                            <p className="text-gray-600">{t('page_education.end')}: {education.final_title.end}</p>
                            {education.final_title.title && (<p className="text-gray-600">{t('page_education.CGPA')}: {education.final_title.CGPA}</p>)}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
CardEducation.propTypes = {
    education: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
}

export default CardEducation;