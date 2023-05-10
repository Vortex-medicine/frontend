type PageName = string;
type Href = string;

export interface LanguageOption {
  value: string;
  label: string;
}

export interface PageLinkData {
  name: PageName;
  href: Href;
}

type GlobalName = string;

export interface SubmenuData {
  globalName: GlobalName;
  pages: PageLinkData[];
}

export function isPageLinkData(
  page: PageLinkData | SubmenuData
): page is PageLinkData {
  return (page as PageLinkData).href !== undefined;
}
