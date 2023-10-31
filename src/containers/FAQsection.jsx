import React, { useState } from 'react';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';
import {motion , AnimatePresence} from 'framer-motion'
const Questions = ({ Question, Answer, isAnswerShown, toggleAnswer }) => {
  return (
    <div className=' border-b-2 border-silver-platinum-grey p-4 bg-white-alablaster text-eerie-black flex flex-col gap-2 aos-fade-up'>
      <div className='flex font-bold items-center cursor-pointer gap-2 ' onClick={toggleAnswer}>
        <div className={`md:hover:bg-silver-platium p-2 ${isAnswerShown?'bg-silver-platium text-eerie-black':''}`}>
          {isAnswerShown ? <RiSubtractFill /> : <RiAddFill />}
        </div>
        <h1>{Question}</h1>
      </div>
      <AnimatePresence>

      {isAnswerShown && <motion.p
       className=''>{Answer}</motion.p>}
      </AnimatePresence>
    </div>
  );
};

const FAQsection = () => {

    const faqs = [
        {
          "Question": "HOW MUCH DOES IT COST TO HIRE YOU?",
          "Answer": "Every wedding is unique, so we have a great selection of packages to fit your needs. Please email or complete the contact form on our website for details."
        },
        {
          "Question": "HOW MANY PHOTOS DO WE GET?",
          "Answer": "You’ll get 200 - 1,000+ edited and ready for final print images from a full day wedding depending on the package. You will also get anywhere between 10-15 edited images from your Pre - wedding session."
        },
        {
          "Question": "CAN WE PRINT OUR OWN PHOTOS?",
          "Answer": "Yes, of course! All of our packages include high-resolution images on a USB flash drive ready for you to print. We also offer professional printing services at competitive prices, and you’ll also receive low-resolution copies for emailing and web use."
        },
        {
          "Question": "HOW LONG WILL IT TAKE TO GET OUR PHOTOS?",
          "Answer": "It takes approximately 1-2 weeks to get the final images for the Pre - wedding session. For weddings, post-production takes approximately 2-4 weeks, but you’ll get a sneak peek online within 1-2 weeks of your event. Final images include editing and color correcting so that all shots are perfect."
        },
        {
          "Question": "ARE ALL THE PHOTOS EDITED?",
          "Answer": "Yes! Every single photo that you will receive on a USB will go through the same post-production process as the images you see on our website."
        },
        {
          "Question": "DO WE GET AN ONLINE GALLERY?",
          "Answer": "Yes. Every package includes a password-protected online gallery that is super easy to share with your friends and families. It’s also optimized for tablets and smartphones. You will love it."
        },
        {
          "Question": "CAN YOU HELP US CREATE A WEDDING ALBUM?",
          "Answer": "Absolutely! All our albums are handcrafted by international vendors! We would love to show you some samples when you come over for your consultation. You can also check out our albums online."
        },
        {
          "Question": "DO YOU REQUIRE A DEPOSIT?",
          "Answer": "We require a 100% deposit and a signed agreement to reserve your day."
        },
        {
          "Question": "DO YOU PHOTOGRAPH ANYTHING ELSE OTHER THAN WEDDINGS?",
          "Answer": "Ndah Studios Wedding & Events specializes in anything wedding and event-related. We recommend checking out our sister companies Ndah Studios and Ndah Experience for other photography and video needs."
        },
        {
          "Question": "DO YOU TRAVEL OUTSIDE OF NIGERIA?",
          "Answer": "Yes, we are worldwide and will travel anywhere. There is a travel fee for any wedding destination more than 60 kilometers and any engagement location more than 35 kilometers from the office."
        },
        {
          "Question": "WHAT HAPPENS IF IT RAINS ON OUR WEDDING DAY?",
          "Answer": "Some of our best wedding shoots have occurred on rainy days. We know lots of wonderful locations that provide natural light, which are perfect for wedding pictures in any type of weather condition."
        },
        {
          "Question": "WHAT METHODS OF PAYMENT DO YOU ACCEPT?",
          "Answer": "We accept certified cheques and mobile transfer."
        },
        {
          "Question": "WHAT EQUIPMENT ARE YOU USING?",
          "Answer": "We use the latest Canon bodies with only the highest quality lenses. Our backup equipment is the same quality gear as our primary equipment."
        },
        {
          "Question": "DO YOU HAVE INSURANCE COVERAGE?",
          "Answer": "Yes, we have commercial general liability coverage, and our property and equipment are also insured."
        },
        {
          "Question": "WE HAVE MORE QUESTIONS. HOW DO WE CONTACT YOU?",
          "Answer": "Feel free to call us at (+234) 8123219127 or via email at nsweddings&events.gmail.com"
        }
      ];
      
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null);
    } else {
      setOpenQuestionIndex(index);
    }
  };

  return (
    <>
      <div className='h-fit py-16 bg-white-alabaster'>
        <div className='max-lg:px-16 max-md:px-8 px-16 flex flex-col gap-4'>
          <div className='text-2xl'>
            <h1>Here is a list of our Frequently Asked Questions:</h1>
          </div>
          <div className='flex flex-col'> 
            {faqs.map((faq, index) => {
              return (
                <Questions
                  key={index}
                  Question={faq.Question}
                  Answer={faq.Answer}
                  isAnswerShown={index === openQuestionIndex}
                  toggleAnswer={() => toggleAnswer(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQsection;
