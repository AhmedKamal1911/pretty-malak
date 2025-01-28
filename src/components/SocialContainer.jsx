import { telegram, viber, whatsapp } from "@/assets";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/ToolTip";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import clsx from "clsx";
const SOCIALS = [
  { id: "telegram", text: "Telegram", src: telegram },
  { id: "whatsApp", text: "WhatsApp", src: whatsapp },
  { id: "viber", text: "Viber", src: viber },
];
export default function SocialContainer() {
  return (
    <div className="fixed start-2 bottom-5 flex flex-col gap-2 z-[888]">
      <TooltipProvider>
        {SOCIALS.map(({ id, src, text }) => {
          return (
            <Tooltip key={id} delayDuration={400}>
              <TooltipTrigger>
                <Link className="hover:rotate-[20deg] transition-all" to={"#"}>
                  <img src={src} alt="" className="size-12  rounded-full" />
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className={clsx(
                  {
                    "bg-green-500": id === "whatsApp",
                    "bg-cyan-600": id === "telegram",
                    "bg-purple-600": id === "viber",
                  },
                  " text-white"
                )}
                sideOffset={10}
                side={"right"}
              >
                <p>{text}</p>
                <TooltipArrow
                  className={clsx({
                    "fill-green-500": id === "whatsApp",

                    "fill-cyan-600": id === "telegram",

                    "fill-purple-600": id === "viber",
                  })}
                />
              </TooltipContent>
            </Tooltip>
          );
        })}
      </TooltipProvider>
    </div>
  );
}
