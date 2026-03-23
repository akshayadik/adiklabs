// app/mdx-components.tsx
export function useMDXComponents(components: any) {
  return {
    h1: (props) => <h1 className="text-3xl font-bold" {...props} />,
    p: (props) => <p className="text-gray-700" {...props} />,
    ...components,
  }
}