import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import useOutsideClick from "@/hooks/use-outside-click";
import NavbarLanguageDropdownOptionsItem from "@/components/elements/header/NavbarLanguageDropdownOptionsItem";
import LANGUAGES from "@/constants/languages";
import classNames from "classnames";
import { ClassName } from "@/types/common";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { LanguageOption } from "@/types/navigation";

interface LanguageDropdownProps {
  menuIsOpened?: boolean;
  className?: ClassName;
}

function NavbarLanguageDropdown({
  menuIsOpened,
  className = "",
}: LanguageDropdownProps): JSX.Element {
  const { i18n } = useTranslation();
  const { language: currentLanguage } = i18n;
  const router = useRouter();
  const locales = router.locales ?? [currentLanguage];

  const [value, setValue] = useState({
    value: currentLanguage,
    label: LANGUAGES[currentLanguage as keyof typeof LANGUAGES],
  });

  const switchToLocale = useCallback(
    (locale: string) => {
      const path = router.asPath;

      return router.push(path, path, { locale, scroll: false });
    },
    [router]
  );

  const languageChanged = useCallback(
    async (option: LanguageOption) => {
      setValue(option);

      const locale = option.value;

      await switchToLocale(locale);
    },
    [switchToLocale]
  );

  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);

  const dropdownOptionsElement = useRef(null);
  const dropdownIconWrapper = useRef(null);

  useOutsideClick([dropdownOptionsElement, dropdownIconWrapper], () => {
    setDropdownIsOpened(false);
  });

  useEffect(() => {
    if (menuIsOpened !== undefined) {
      if (!menuIsOpened) {
        setDropdownIsOpened(false);
      }
    }
  }, [menuIsOpened]);

  const dropdownClasses = classNames(styles.dropdown, className, {
    [styles.dropdownOpened]: dropdownIsOpened,
  });

  return (
    <div className={dropdownClasses}>
      <div
        className={styles.dropdownIconWrapper}
        ref={dropdownIconWrapper}
        onClick={() => setDropdownIsOpened((prev) => !prev)}
      >
        <LanguageOutlinedIcon className={styles.dropdownIcon} />
      </div>
      <ul ref={dropdownOptionsElement} className={styles.dropdownOptions}>
        {locales.map((locale) => {
          const label = LANGUAGES[locale as keyof typeof LANGUAGES];
          const option = {
            value: locale,
            label,
          };

          return (
            <NavbarLanguageDropdownOptionsItem
              key={option.value}
              item={option}
              selectedLanguage={value}
              setSelectedLanguage={languageChanged}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default NavbarLanguageDropdown;
