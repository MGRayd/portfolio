import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import project1 from '../assets/Project1.png';
import project2 from '../assets/Project2.png';
import project3 from '../assets/Project3.png';
import project4 from '../assets/Project4.png';

function Portfolio() {
    const projects = [
      {
        title: 'GitHub CI/CD Pipeline',
        description: 'Automating cloud deployments using GitHub Actions and Google Cloud Functions for University Integrations.',
        image: project1,
      },
      {
        title: 'SITS Data Integration',
        description: 'Enhancing data workflows and automations in higher education systems.',
        image: project2,
      },
      {
        title: 'Crusadarr',
        description: 'A personal project creating a web app to manage and track Warhammer 40K Crusade campaigns.',
        image: project3,
        link: 'https://crusadarr.uk/',
      },
      {
        title: 'Future Project',
      description: 'Future Project 4.',
      image: project4,
    },
    {
      title: 'Future Project',
      description: 'Future Project 5.',
      image: project4,
    },
    {
      title: 'Future Project',
      description: 'Future Project 6.',
      image: project4,
    },
  ];

  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
      <div className="px-4 sm:px-0">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={4000}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1, // On very small screens (e.g. phones)
          },
          640: {
            slidesPerView: 2.2, // On tablets/small laptops
          },
          1024: {
            slidesPerView: 3,   // On desktop and large screens
          },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
          <div className="w-full sm:w-[300px] flex-shrink-0 mr-4 sm:mr-0">
            <div className="rounded-lg overflow-hidden bg-gray-800 shadow-[0_6px_20px_rgba(0,0,0,0.2)]">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                >
                  <div className="transition-transform duration-300 transform hover:scale-105">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-4 min-h-[140px] flex flex-col justify-between">
                      <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm">{project.description}</p>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="transition-transform duration-300 transform hover:scale-105">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-4 min-h-[140px] flex flex-col justify-between">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>        
        ))}
      </Swiper>
      </div>
    </section>
  );
}

export default Portfolio;
