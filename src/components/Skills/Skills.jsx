import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation()
    return (
      <>{t('skills_description')}</>
    );
  }
  
  export default Skills;