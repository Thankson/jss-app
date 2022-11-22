import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import styles from './ContentBlock.module.scss';

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
      <Text tag="h2" className="contentTitle" field={fields.heading} />
      <RichText className="contentDescription" field={fields.content} />
    </div>
  );
};

// export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
export default ContentBlock;
