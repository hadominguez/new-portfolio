import GLTFViewer from '../GLTF/GLTFLoader';
import { useTranslation } from 'react-i18next';


const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="p-4">
        <div className="p-8">
          <div className="circular--portrait mx-auto">
            <img src={t('photo')} alt={t('photo_description')} />
          </div>
        </div>
        <div className="p-8">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">{t('name')}</h1>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{t('title')}</span></h1>
          <h3 className="text-xl text-gray-600 mb-4">{t('about_description')}</h3>
        </div>
      </div>
      <GLTFViewer />
    </>
  );
}

export default About;