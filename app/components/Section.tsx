export default function Section({ title, children }) {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-primary mb-10">
        {title}
      </h2>

      {children}

    </section>
  );
}