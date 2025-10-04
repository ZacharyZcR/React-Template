/**
 * Home page component
 * @returns The main landing page
 */
export default function Home(): React.ReactElement {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold">React Template</h1>
        <p className="mt-4 text-lg">
          A highly engineered Next.js template with TypeScript, Tailwind CSS,
          and comprehensive quality checks.
        </p>
      </div>
    </main>
  );
}
