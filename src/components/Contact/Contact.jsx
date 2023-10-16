import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation()
  const contacts = t('contact.links', { returnObjects: true });

  return (
    <>
      <div className="p-4">
        <div className="p-8">
          <div className="container mx-auto mt-8">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{t('menu.contact')}</span>
            </h1>

            <div className="mt-8">
              <h2 className="title mb-4 text-3xl font-extrabold dark:text-white md:text-2xl lg:text-2xl">{t('page_contact.info')}</h2>
              <p>{t('page_contact.email')}: {t('contact.email')}</p>
              <p>{t('page_contact.phone')}: {t('contact.phone')}</p>

              <div className="mt-4">
                <h3 className="title mb-4 text-3xl font-extrabold dark:text-white md:text-2xl lg:text-2xl">{t('page_contact.social')}</h3>
                <ul className="flex space-x-4">
                  {contacts.map((contact, key) => (
                    <li key={key} className='socials text-lg mt-1 block w-full py-2 px-3 shadow-sm sm:text-sm'>
                      <a
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        <img className='social-link' src={contact.image}></img>
                        {contact.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="p-8">
          <div className="mx-auto">
            <img src={t('logo')} alt={t('photo_description')} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;