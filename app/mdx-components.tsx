import type { MDXComponents } from 'mdx/types'
import Mermaid from './components/Mermaid';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-3xl font-bold text-primary mb-4" {...props} />,
    p: (props) => <p className="text-muted leading-relaxed mb-4" {...props} />,
    
    // Detect code blocks with language "mermaid"
    code: (props) => {
      const { children, className } = props;
      if (className === "language-mermaid") {
        return <Mermaid chart={children as string} />;
      }
      return <code className={className} {...props} />;
    },
    
    ...components,
  }
}