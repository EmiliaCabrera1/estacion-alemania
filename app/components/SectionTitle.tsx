export default function SectionTitle({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-center text-gris font-titulos text-2xl my-2">
        {title}
      </h2>
    </>
  );
}
