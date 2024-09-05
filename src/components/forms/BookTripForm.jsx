// BookTripForm.jsx
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
import { FaHotel, FaPen } from "react-icons/fa";
import { BsFillChatRightTextFill, BsPersonRaisedHand } from "react-icons/bs";
import { FaChildReaching } from "react-icons/fa6";

import { MdMail } from "react-icons/md";
import bookTripFormSchema from "@/validations/bookTripFormSchema";
import { RxCrossCircled } from "react-icons/rx";
import { DatePickerWithPresets } from "../ui/datePicker";
import { format } from "date-fns";
import { ComboboxDemo } from "../ui/ComboBox";
import { useTranslation } from "react-i18next";

const serviceId = import.meta.env.VITE_EMAILJS_BOOK_FORM_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_BOOK_FORM_TEMPLATE_ID;

const BookTripForm = () => {
  const { t } = useTranslation("global");
  const formRef = useRef(null);
  const { toast } = useToast();

  const methods = useForm({
    mode: "onSubmit",
    resolver: zodResolver(bookTripFormSchema(t)),
    defaultValues: {
      email: "",
      message: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      hotelName: "",
      checkDate: undefined, // Default value for check-in date
      childNumber: 0,
      adultNumber: 1,
      country: "",
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
            description: t("global.toasts.messageToast.successMessage"),
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
            description: t("global.toasts.messageToast.failedMessage"),
            variant: "destructive",
            icon: <RxCrossCircled className="w-6 h-6" />,
          });
        }
      );
  };

  const onSubmit = async (data) => {
    console.log(data, "data");
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
            placeholder={t("global.bookTripForm.firstName")}
          />
          <BookInput
            icon={FaPen}
            control={control}
            name="lastName"
            type="text"
            placeholder={t("global.bookTripForm.lastName")}
          />

          <BookInput
            icon={MdMail}
            control={control}
            name="email"
            type="email"
            placeholder={t("global.bookTripForm.email")}
          />

          <BookInput
            icon={IoMdPhonePortrait}
            control={control}
            name="phoneNumber"
            type="text"
            placeholder={t("global.bookTripForm.phoneNumber")}
          />
          <BookInput
            icon={FaHotel}
            control={control}
            name="hotelName"
            type="text"
            placeholder={t("global.bookTripForm.hotelName")}
          />

          <FormField
            control={control}
            name="checkDate"
            render={({ field }) => {
              return (
                <FormItem className="w-full relative">
                  <FormControl>
                    <DatePickerWithPresets
                      placeholder={t("global.bookTripForm.checkDate")}
                      selectedDate={field.value}
                      onDateChange={field.onChange}
                    />
                  </FormControl>
                  <input
                    type="text"
                    name={field.name}
                    hidden
                    defaultValue={
                      field.value
                        ? format(
                            new Date(field.value),
                            "dd MMMM, hh:mm a, yyyy"
                          )
                        : ""
                    }
                  />
                  <FormMessage className="text-red-600 text-[16px]" />
                </FormItem>
              );
            }}
          />
          <FormField
            control={control}
            name="country"
            render={({ field }) => {
              return (
                <FormItem className="w-full relative">
                  <FormControl>
                    <ComboboxDemo
                      selectCountry={field.value}
                      onSelectCountry={field.onChange}
                    />
                  </FormControl>
                  <input
                    type="text"
                    name={field.name}
                    hidden
                    defaultValue={field.value}
                  />
                  <FormMessage className="text-red-600 text-[16px]" />
                </FormItem>
              );
            }}
          />

          <div className="flex flex-col xl:flex-row gap-8 lg:gap-5 ">
            <div>
              <span className="text-grayDesc">
                {t("global.bookTripForm.adult")}
              </span>
              <BookInput
                icon={BsPersonRaisedHand}
                control={control}
                name="adultNumber"
                type="number"
              />
            </div>
            <div>
              <span className="text-grayDesc">
                {t("global.bookTripForm.child")}
              </span>
              <BookInput
                icon={FaChildReaching}
                control={control}
                name="childNumber"
                type="number"
              />
            </div>
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
                    className="text-[16px] ps-7 pt-0 pb-0 pe-0 focus-visible:ring-transparent h-[120px] focus:placeholder:text-main border-t-0 border-l-0 border-r-0 border-b-[2px] rounded-none shadow-none focus:border-b-main transition-[border,placeholder] duration-500"
                    placeholder={t("global.bookTripForm.message")}
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
                {t("global.loadingText")}
              </span>
            ) : (
              t("global.bookTripForm.bookTripFormButtonLabel")
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BookTripForm;
