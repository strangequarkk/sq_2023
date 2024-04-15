const linkExp = /<a\s+[^>]*?href="([^"]+)"[^>]*>/gm;
const imgExp = /<img\s+[^>]*?src="([^"]+)"[^>]*>/gm;

const changeAllTagetedElements = (
  tagRegEx,
  htmlText,
  replacedPart,
  newPart
) => {
  let newHtml = htmlText;
  let match;

  while ((match = tagRegEx.exec(htmlText)) !== null) {
    if (!match[0].includes(newPart)) {
      const targetedLink = match[0].replace(replacedPart, newPart);
      newHtml = newHtml.replace(match[0], targetedLink);
    }
  }
  return newHtml;
};

export const giveLinksTargetBlank = (htmlText) => {
  return changeAllTagetedElements(
    linkExp,
    htmlText,
    "href",
    "target='_blank' href"
  );
};

export const giveImagesLazyLoad = (htmlText) => {
  return changeAllTagetedElements(
    imgExp,
    htmlText,
    /\/?>/,
    "loading='lazy' />"
  );
};
