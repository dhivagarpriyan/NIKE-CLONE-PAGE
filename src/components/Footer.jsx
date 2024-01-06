import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images"; 
import { facebook,instagram,twitter } from "../assets/icons";

 
 const Footer = () => {

    const footerLinks = [
        {
            title: "Products",
            links: [
                { name: "Air Force 1", link: "/" },
                { name: "Air Max 1", link: "/" },
                { name: "Air Jordan 1", link: "/" },
                { name: "Air Force 2", link: "/" },
                { name: "Nike Waffle Racer", link: "/" },
                { name: "Nike Cortez", link: "/" },
            ],
        },
        {
            title: "Help",
            links: [
                { name: "About us", link: "/" },
                { name: "FAQs", link: "/" },
                { name: "How it works", link: "/" },
                { name: "Privacy policy", link: "/" },
                { name: "Payment policy", link: "/" },
            ],
        },
        {
            title: "Get in touch",
            links: [
                { name: "customer@nike.com", link: "mailto:customer@nike.com" },
                { name: "+92554862354", link: "tel:+92554862354" },
            ],
        },
    ];

    const socialMedia = [
        { src: facebook, alt: "facebook logo" },
        { src: twitter, alt: "twitter logo" },
        { src: instagram, alt: "instagram logo" },
    ];
    return (
      <footer name="Contact Us" className='max-w-[1440px] bg-black pt-12 py-4 px-8 md:px-16 mt-4'>
        <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
          <div className='flex flex-col items-start'>
            <a href='/'>
              <img
                src={footerLogo}
                alt='logo'
                width={150}
                height={46}
                className='m-0'
              />
            </a>
            <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className='flex items-center gap-5 mt-8'>
              {socialMedia.map((icon) => (
                <div
                  className='flex justify-center items-center w-12 h-12 bg-white rounded-full hover:scale-90 duration-300'
                  key={icon.alt}
                >
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
  
          <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
  
        <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
          <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
            <img
              src={copyrightSign}
              alt='copyright sign'
              width={20}
              height={20}
              className='rounded-full m-0'
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;