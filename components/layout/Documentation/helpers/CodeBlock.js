import React from 'react';
import { refractor } from 'refractor';
import js from 'refractor/lang/javascript';
import jsx from 'refractor/lang/jsx';

refractor.register(js);
refractor.register(jsx);


const renderElement = (element) => {
    if (element.type === 'element') {
      const { tagName, properties, children } = element;
      const className = properties.className.join(' ');

      return React.createElement(
        tagName,
        { className },
        children.map(renderElement)
      );
    } else if (element.type === 'text') {
      return element.value;
    } else {
      return null;
    }
  };


const CodeBlock = ({ children }) => {
  let code = refractor.highlight(children, 'jsx');
 
  const renderElement = (element) => {
    if (element.type === 'element') {
      const { tagName, properties, children } = element;
      const className = properties.className.join(' ');

      return React.createElement(
        tagName,
        { className },
        children.map(renderElement)
      );
    } else if (element.type === 'text') {
      return element.value;
    } else {
      return null;
    }
  };




    code = code.children.map(renderElement);
  return (
    <div>
      <code className='language-jsx'>{code}</code>
    </div>
  );
};

export default CodeBlock;
