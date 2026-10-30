import { whatsappLink } from "../../data/site";

/** A lightweight, accessible site-wide WhatsApp shortcut. */
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Hi Cubixmet, I'd like to know more about your services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Cubixmet on WhatsApp (opens in a new tab)"
      title="Chat with us on WhatsApp"
      className="floating-whatsapp"
    >
      <span className="floating-whatsapp__pulse" aria-hidden="true" />
      <svg
        className="floating-whatsapp__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.372-.01-.57-.01a1.095 1.095 0 0 0-.793.372c-.273.298-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.261.489 1.692.626.711.226 1.358.194 1.87.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.86 9.86 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.855 9.855 0 0 1-1.51-5.26C2.17 6.44 6.612 2 12.054 2a9.8 9.8 0 0 1 6.976 2.893 9.8 9.8 0 0 1 2.888 6.98c-.002 5.448-4.434 9.883-9.868 9.886M20.452 3.46A11.866 11.866 0 0 0 12.055 0C5.492 0 .15 5.34.148 11.905c0 2.098.548 4.146 1.587 5.953L0 24l6.293-1.65a11.89 11.89 0 0 0 5.758 1.469h.005c6.56 0 11.901-5.341 11.904-11.905a11.86 11.86 0 0 0-3.508-8.454Z" />
      </svg>
    </a>
  );
}
