import { TbReload } from "react-icons/tb";
import { Button } from "./ui/Button";
import { cn } from "@/utils/cn";

const FormSubmitButton = ({
  isSubmitting,
  loadingTextTranslation,
  submitTextTranslation,
  className,
}) => {
  return (
    <Button
      className={cn("py-6 px-5", className)}
      variant="primary"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <span className="flex items-center gap-2 text-xl text-white">
          <TbReload className="h-5 w-5 animate-spin" />
          {loadingTextTranslation}
        </span>
      ) : (
        submitTextTranslation
      )}
    </Button>
  );
};

export default FormSubmitButton;
