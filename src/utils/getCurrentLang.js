import { DEFAULT_LANG } from "../i18n";

export function getCurrentLang() {
  return (
    JSON.parse(localStorage.getItem("lang"))?.languageName ??
    DEFAULT_LANG.languageName
  );
}
