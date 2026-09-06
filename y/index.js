import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
  
const domNode = document.getElementById('navigation');
if (domNode) {
  const root = createRoot(domNode);
  root.render(createElement(NavigationBar));
}
