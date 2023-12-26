export default function BothLayout({
  children,
  team,
  analytics
}: {
  children: React.ReactNode,
  team: React.ReactNode,
  analytics: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      BothLayout
      {children}
      <div>
      {team}
      {analytics}
      </div>
    </main>
  )
}
