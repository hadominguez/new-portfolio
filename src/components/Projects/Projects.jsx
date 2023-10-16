import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation()

    return (
        <>{t('projects_description')}</>
    );
}

export default Projects;