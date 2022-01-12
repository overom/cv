import { getLanguage } from "../config/helpers";
let I18n = {};

(async () => {
  const storedLanguage = await getLanguage();
  if (storedLanguage?.locale) {
    I18n.currentLanguage = storedLanguage.locale.split("_")[0] || "en";
  } else {
    I18n.currentLanguage = "en";
  }
})();

I18n.translations = {
  en: require("./languages/en.json"),
  fr: require("./languages/fr.json"),
};

const translateOrFallback = (initialMsg) => {
  if (typeof initialMsg !== "string") {
    console.warn(
      "try to find a translation with not a string variable " + initialMsg
    );
    return "";
  }
  if (!I18n || !I18n.currentLanguage) {
    console.warn("Locale not defined " + initialMsg);
    return "";
  }
  if (!I18n.translations[I18n.currentLanguage]) {
    console.warn("Translation undefined " + initialMsg);
    return "";
  }
  let localMsg = I18n.translations[I18n.currentLanguage][initialMsg];

  return localMsg !== undefined ? localMsg : initialMsg;
};
export default { ...I18n, t: translateOrFallback };
