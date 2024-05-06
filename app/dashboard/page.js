// Importing necessary packages and styles
"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../firebase/config';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        router.push('/');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push('/');
    } catch (error) {
      console.error('Error occurred during sign-out:', error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-900 min-h-screen relative text-white flex flex-col justify-center items-center">
      <button className="text-#05a1e7 px-4 py-2 rounded-lg absolute top-4 right-4" onClick={handleSignOut}>Sign Out</button>
      <div className="w-full max-w-screen-lg p-6 relative">
        <div className="text-3xl font-bold mb-6 mt-2 md:mt-10">Popular Topics 🔥</div>
        {/* Carousel with slides */}
        <Slider {...settings} className="w-full">
          {[1, 2, 3, 4, 5].map(card => (
            <div key={card} className="bg-gray-800 p-6 rounded-xl shadow-md mx-2">
              {/* Individual slide content */}
              <div className="md:flex">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <img src={`https://via.placeholder.com/300`} alt={`Card ${card}`} className="w-full h-auto" />
                </div>
                <div className="md:w-2/3 md:pl-6">
                  <h2 className="text-xl font-semibold mb-4">Card {card}</h2>
                  <p className="text-gray-300 mb-4">Card content goes here.</p>
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Custom styles for the carousel arrows */}
        <style jsx global>{`
          .slick-prev,
          .slick-next {
            position: absolute;
            top: -50px; /* Adjust this value as needed */
            right: 0;
            z-index: 1;
            cursor: pointer;
          }

          .slick-prev {
            left: 18rem;
          }

          .slick-prev:before,
          .slick-next:before {
            font-size: 40px;
            color: white;
          }

          .slick-prev:before {
            content: '⬅︎';
          }

          .slick-next:before {
            content: '➡︎';
          }

          /* Styles for desktop view */
          @media (min-width: 768px) {
            .slick-prev {
              left: 93%; /* Adjust this value as needed */
            }
          }

          /* Styles for mobile view */
          @media (max-width: 767px) {
            .slick-prev,
            .slick-next {
              top: -30px; /* Adjust this value as needed */
            }

            .slick-prev:before,
            .slick-next:before {
              font-size: 30px;
            }
          }
        `}</style>
  
      </div>
    </div>
  );
}

export default Dashboard;
