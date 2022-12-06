export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div>layout</div>
        {children}
      </body>
    </html>
  );
}
