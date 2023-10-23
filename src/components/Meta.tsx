import React from "react";
import { Metadata } from 'next'

type Props = {
  title?: string;
  keywords?: string;
  description?: string;
};

const Meta = ({
  title = "Tech Innovation Club",
  keywords = "Tech, Technology, Innovation, Club, University, pau, Pan-Atlantic University ",
  description = "TIC - Tech Innovation Club",
}: Props) => {
  return (
    <>
      {/* <meta
        name="google-site-verification"
        content="2WxeB47QwUgB4OtawGepEVh_ISIlKflFNyYzYsGXQ9k"
      /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href={"/assets/images/ticLogo.svg"} />
      <link rel="canonical" href="https://tic-pau.netlify.app/" />
      <title>{title}</title>
      <meta name="og:title" content="Tech Innovation Club" />
      <meta name="og:description" content="TIC - Tech Innovation Club" />
      <meta name="og:image" content={"/assets/images/ticLogo.svg"} />
      <meta name="og:url" content="https://tic-pau.netlify.app/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tech Innovation Club" />
      <meta name="twitter:description" content="TIC - Tech Innovation Club" />
      <meta name="twitter:image" content={"/assets/images/ticLogo.svg"} />
    </>
  );
};

export default Meta;
