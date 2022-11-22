import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Image from 'next/image';
import styles from './ContentBlock.module.scss';
import ScLogo from 'assets/images/sitecore_logo.svg';

type ContentBlockProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    content: Field<string>;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ContentBlock = ({ fields }: ContentBlockProps): JSX.Element => {
  return (
    <div className="contentBlock">
      <div className={styles.name}>Steven</div>
      <div className="text-3xl font-bold underline">Hello world!</div>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          {/* <img src="/vercel.svg" alt="Vercel Logo" className="logo" /> */}
          <Image src={ScLogo} alt="A stack of colorful cans" />
        </a>
      </div>
      <Text tag="h2" className="contentTitle" field={fields.heading} />
      <RichText className="contentDescription" field={fields.content} />
    </div>
  );
};

// export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
export default ContentBlock;
