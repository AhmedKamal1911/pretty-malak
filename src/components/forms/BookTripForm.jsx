import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/Form";

import { Textarea } from "@/components/ui/Textarea";
import { IoMdCheckmarkCircleOutline, IoMdPhonePortrait } from "react-icons/io";

import { BookInput } from "..";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { TbReload } from "react-icons/tb";
import { Button } from "../ui/Button";
import { useToast } from "@/hooks/useToast";
import { FaDoorOpen, FaHotel, FaPen } from "react-icons/fa";
import { BsFillChatRightTextFill } from "react-icons/bs";

import { MdMail } from "react-icons/md";
import bookTripFormSchema from "@/validations/bookTripFormSchema";
import { RxCrossCircled } from "react-icons/rx";
import { DatePickerWithPresets } from "../ui/datePicker";

const BookTripForm = () => {
  const formRef = useRef();
  const { toast } = useToast();

  const serviceId = import.meta.env.VITE_EMAILJS_BOOK_FORM_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_BOOK_FORM_TEMPLATE_ID;

  const methods = useForm({
    mode: "onSubmit",
    resolver: zodResolver(bookTripFormSchema),
    defaultValues: {
      email: "",
      message: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      hotelName: "",
      roomNumber: "",
      adultNumber: "",
      childNumber: "",
    },
  });
  const {
    reset,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = methods;

  const sendEmail = () => {
    return emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: import.meta.env.VITE_EMAILJS_FORM_PUBLIC_KEY,
      })
      .then(
        () => {
          toast({
            description: "Your message has been sent.",
            variant: "success",
            icon: <IoMdCheckmarkCircleOutline className="w-7 h-7" />,
          });
          setTimeout(() => {
            reset();
          }, 1000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast({
            description: "Server Error there is something wrong.",
            variant: "destructive",
            icon: <RxCrossCircled className="w-6 h-6" />,
          });
        }
      );
  };
  const onSubmit = async (data) => {
    console.log(data);
    await sendEmail();
  };
  return (
    <Form {...methods}>
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="border-[#cac8c85d] border rounded-md shadow-md bg-white"
      >
        <div className="flex flex-col gap-8  p-4">
          <BookInput
            icon={FaPen}
            control={control}
            name="firstName"
            type="text"
            placeholder="First Name:"
          />
          <BookInput
            icon={FaPen}
            control={control}
            name="lastName"
            type="text"
            placeholder="last Name:"
          />

          <BookInput
            icon={MdMail}
            control={control}
            name="email"
            type="email"
            placeholder="Email:"
          />

          <BookInput
            icon={IoMdPhonePortrait}
            control={control}
            name="phoneNumber"
            type="text"
            placeholder="Type your phone Number:"
          />
          <BookInput
            icon={FaHotel}
            control={control}
            name="hotelName"
            type="text"
            placeholder="Type your hotel name (Optional)"
          />
          <BookInput
            icon={FaDoorOpen}
            control={control}
            name="roomNumber"
            type="text"
            placeholder="Type your room number:"
          />
          <DatePickerWithPresets />
          <div className="flex flex-col xl:flex-row gap-8 lg:gap-5 ">
            <BookInput
              icon={FaDoorOpen}
              control={control}
              name="adultNumber"
              type="text"
              placeholder="ADULT"
              min={0}
            />
            <BookInput
              icon={FaDoorOpen}
              control={control}
              name="childNumber"
              type="text"
              placeholder="CHILD"
              min={0}
            />
          </div>
          <FormField
            control={control}
            name="message"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Textarea
                    icon={
                      <BsFillChatRightTextFill className="w-4 h-4 text-main" />
                    }
                    control={control}
                    {...field}
                    type="text"
                    className="text-[16px] pl-7 pt-0 pb-0 pr-0 focus-visible:ring-transparent h-[120px] focus:placeholder:text-main border-t-0 border-l-0 border-r-0 border-b-[2px] rounded-none shadow-none focus:border-b-main transition-[border,placeholder] duration-500"
                    placeholder="Type your message here."
                    id="message-2"
                  />
                </FormControl>
                <FormMessage className="text-red-600 text-[16px]" />
              </FormItem>
            )}
          />

          <Button
            className="py-6 px-9"
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2 text-xl text-white">
                <TbReload className="h-5 w-5 animate-spin" />
                Loading...
              </span>
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BookTripForm;
