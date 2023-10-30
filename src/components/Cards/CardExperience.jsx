import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const CardExperience = (props) => {
    const { t } = useTranslation()

    const { experience, key } = props;
    console.log(experience)
    return (
        <>
            <div className="card p-8 bg-gray-800 bg-opacity-30 rounded-lg" key={key}>
                <div className="info">
                    <h1 className="title mb-4 text-3xl font-extrabold dark:text-white md:text-2xl lg:text-2xl">{experience.position}</h1>
                    <h2 className="text-xl mb-4 font-extrabold text-gray-400">{t('page_experience.company')}: {experience.company}</h2>
                    <p className="text-gray-400">{t('page_experience.location')}: {experience.location}</p>
                    <p className="text-gray-400">{t('page_experience.start')}: {experience.start}</p>
                    <p className="text-gray-400">{t('page_experience.end')}: {experience.end}</p>
                </div>
            </div>
        </>
    );
}
CardExperience.propTypes = {
    experience: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
}

export default CardExperience;