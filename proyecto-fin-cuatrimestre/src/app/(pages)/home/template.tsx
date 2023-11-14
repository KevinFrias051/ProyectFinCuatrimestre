"use client";


export default function HomeTemplate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  );
}