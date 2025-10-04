import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'React Template',
  description: 'A highly engineered React + Next.js template',
};

/**
 * Root layout component for the application
 * @param props The component props
 * @param props.children Child components to render
 * @returns The root layout with providers
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
