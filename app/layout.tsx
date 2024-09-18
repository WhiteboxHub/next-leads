// // app/layout.tsx

// import { Metadata } from 'next';
// import localFont from 'next/font/local';
// import './globals.css';
// import Modal from 'react-modal';

// // Initialize react-modal
// if (typeof window !== 'undefined') {
//   Modal.setAppElement('#__next');
// }

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff', // Adjust the path as necessary
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });

// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff', // Adjust the path as necessary
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }

// app/layout.tsx
import { Metadata } from 'next';
import './globals.css'; // Your global styles

export const metadata: Metadata = {
  title: 'My App',
  description: 'This is my app description',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="__next">
        {children}
      </body>
    </html>
  );
}
