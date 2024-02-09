'use client'
import Cookies from "js-cookie";

  // Retrieve the default locale cookie
let defaultLocaleCookie
const getLang = async() =>
{ 
     defaultLocaleCookie = await Cookies.get("NEXT_LOCALE");
  console.log(defaultLocaleCookie, "ok");
  return defaultLocaleCookie

 }
getLang()
// Call the logCookies function wherever you need to log the cookies

export const i18n = {
  defaultLocale: defaultLocaleCookie, // Default locale set to English
  locales: [
    // List of supported locales
    "en", // English
    "fr", // French
    "th", // Thai
    "es", // Spanish
    "de", // German
    "it", // Italian
    "ja", // Japanese
    "zh", // Chinese
    "ru", // Russian
    "ar", // Arabic
    "pt", // Portuguese
    "hi", // Hindi
    "ko", // Korean
    "nl", // Dutch
    "tr", // Turkish
    "sv", // Swedish
    "el", // Greek
    "he", // Hebrew
    "pl", // Polish
    "cs", // Czech
  ],
};
