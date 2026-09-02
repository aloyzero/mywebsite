import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

function NavigationBar() {
  return createElement('h1', null, 'Hello from React!');
}

const domNode = document.getElementById('navigation');
if (domNode) {
  const root = createRoot(domNode);
  root.render(createElement(NavigationBar));
}