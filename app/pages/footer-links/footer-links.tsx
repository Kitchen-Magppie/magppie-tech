import { ButtonsMenu } from '../form/components/buttons-menu';

export default function FooterLinks() {
  const mainLinks = [
    { id: 1, link: 'Wellness Kitchens' },
    { id: 2, link: 'Wellness Wardrobes' },
    { id: 3, link: 'About Us' },
    { id: 4, link: 'Our Vision' },
    { id: 5, link: 'Our Clients' },
    { id: 6, link: 'Ongoing Projects' },
    { id: 7, link: 'Career' },
  ];

  const socialLinks = [
    { id: 1, link: 'Instagram' },
    { id: 2, link: 'Facebook' },
    { id: 3, link: 'Linkedin' },
  ];
  return (
    <>
      <div className='w-full px-6 pt-20'>
        {mainLinks.map((links) => (
          <p
            className='text-[30px] x-font-noto-serif-display-400 pb-4'
            key={links.id}
          >
            {links.link}
          </p>
        ))}
      </div>
      <div className='w-full px-6 pt-1'>
        {socialLinks.map((links) => (
          <p className='text-[18px] pb-3 x-font-barlow-semi-condensed-400' key={links.id}>
            {links.link}
          </p>
        ))}
      </div>
      <ButtonsMenu />
    </>
  );
}
