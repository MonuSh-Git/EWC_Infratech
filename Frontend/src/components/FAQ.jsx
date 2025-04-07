import { useState } from "react";
// import faqImg1 from "../assets/img/images/faq_img01.jpeg";
// import faqImg2 from "../assets/img/images/faq_img02.avif";
import faqBg from "../assets/img/bg/faq_bg.jpg";

const faqData = [
  { id: 1, question: "Why Choose EWC Infratech?", answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae assumenda, hic iure dolore accusamus vero repellat ipsa rerum animi aperiam ipsum autem commodi. Omnis enim corrupti unde est exercitationem sunt voluptate sequi nihil nesciunt corporis?" },
  { id: 2, question: "What services does EWC Infratech offer?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, id officia. Deserunt suscipit ipsam natus, fugit nisi saepe unde, in vel ad, accusamus beatae voluptatem! Eum corrupti officiis nostrum sapiente?" },
  { id: 3, question: "What areas does EWC serve?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quia perferendis vero. Fuga asperiores facilis sint animi sequi. Omnis totam laborum illum tenetur!" },
  { id: 4, question: "Does EWC handle commercial or residential projects?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia culpa ea corporis rerum obcaecati omnis ducimus quo beatae, reiciendis aperiam sapiente mollitia incidunt inventore possimus. Non, perferendis?" },
  { id: 5, question: "Is EWC Infratech licensed?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quis perspiciatis voluptas voluptatem ea nesciunt libero. Velit nam at quasi explicabo mollitia autem nobis debitis eius reprehenderit modi saepe, similique deleniti! Quidem, cum!" },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="relative bg-cover bg-center py-16 px-6 md:px-12 lg:px-24"
      style={{ backgroundImage: `url(${faqBg})` }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-lg text-blue-950 uppercase font-semibold tracking-wide">
            Our FAQs
          </span>
          <h2 className="text-4xl font-bold text-white mt-2">Frequently Asked Questions</h2>
        </div>

        {/* Two-column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Right - FAQ Accordion Section */}
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                className="border border-gray-300 rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full flex justify-between items-center p-5 bg-gray-100 hover:bg-blue-950 hover:text-white text-lg font-semibold text-gray-800 rounded-lg transition duration-300 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="text-2xl font-bold">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === index ? "max-h-40 p-5 bg-white" : "max-h-0"
                  }`}
                >
                  <p className="text-black text-[18px] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
