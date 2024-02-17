const dictionaries = {
  en: () => import("./dictionaries/en.json").then((r) => r.default),
  fr: () => import("./dictionaries/fr.json").then((r) => r.default),
  th: () => import("./dictionaries/th.json").then((r) => r.default),
  es: () => import("./dictionaries/es.json").then((r) => r.default),
  de: () => import("./dictionaries/de.json").then((r) => r.default),
  it: () => import("./dictionaries/it.json").then((r) => r.default),
  ja: () => import("./dictionaries/ja.json").then((r) => r.default),
  zh: () => import("./dictionaries/zh.json").then((r) => r.default),
  ru: () => import("./dictionaries/ru.json").then((r) => r.default),
  pt: () => import("./dictionaries/pt.json").then((r) => r.default),
  hi: () => import("./dictionaries/hi.json").then((r) => r.default),
  ko: () => import("./dictionaries/ko.json").then((r) => r.default),
  nl: () => import("./dictionaries/nl.json").then((r) => r.default),
  tr: () => import("./dictionaries/tr.json").then((r) => r.default),
};

export const getDictionary = (lang) => {
  return dictionaries[lang]();
};
