import { slideImg1 } from "@/assets";
import { ContactForm, SectionHeader } from "@/components";

const ContactUs = () => {
  return (
    <div className="relative min-h-screen py-36 ">
      <div
        style={{ backgroundImage: `url('${slideImg1}')` }}
        className="absolute inset-0 z-[-1] bg-cover blur-[5px]"
      />
      <div className="container">
        <div className="flex flex-col items-stretch lg:flex-row bg-white rounded-xl lg:h-[810px]">
          <div className="flex-1">
            <img
              src={slideImg1}
              alt=""
              className="w-full h-full object-[50%_center] lg:object-cover p-[5px] rounded-l-xl rounded-r-none "
            />
          </div>
          <div className="flex-1  p-2 md:p-5 lg:p-12">
            <SectionHeader
              className="mb-8"
              introText="GET IN TOUCH"
              desc="24/7 WE WILL ANSWER YOUR QUESTION AND PROBLEMS"
            />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
