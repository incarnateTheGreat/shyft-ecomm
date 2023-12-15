import toast, { Toast } from "react-hot-toast";

const options: Partial<
  Pick<
    Toast,
    | "id"
    | "icon"
    | "duration"
    | "ariaProps"
    | "className"
    | "style"
    | "position"
    | "iconTheme"
  >
> = {
  style: {
    maxWidth: "400px",
  },
  ariaProps: {
    role: "status",
    "aria-live": "polite",
  },
};

const handleToast = (text = "", status = "success") => {
  if (status === "error") {
    return toast.error("Oops! Something went wrong!", options);
  }

  return toast.success(text, options);
};

export default handleToast;
