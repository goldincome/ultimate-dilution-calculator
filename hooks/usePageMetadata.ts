import { useEffect } from 'react';

interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  robots?: string;
  canonicalUrl?: string;
  publisher?: string;
}

const updateMetaTag = (name: string, content?: string) => {
  if (content === undefined) return;
  
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const updateLinkTag = (rel: string, href?: string) => {
    if (href === undefined) return;

    let element = document.querySelector(`link[rel="${rel}"]`);
    if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
    }
    element.setAttribute('href', href);
}

export const usePageMetadata = (metadata: PageMetadata) => {
  const { title, description, keywords, author, robots, canonicalUrl, publisher } = metadata;
  useEffect(() => {
    document.title = title;
    
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', robots);
    updateMetaTag('publisher', publisher);
    updateLinkTag('canonical', canonicalUrl);

  }, [title, description, keywords, author, robots, canonicalUrl, publisher]);
};