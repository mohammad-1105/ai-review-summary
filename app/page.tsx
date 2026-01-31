import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <Card className="max-w-4xl mx-auto space-y-4">
        <CardHeader className="text-4xl font-bold mb-4">
          Product Reviews
        </CardHeader>
        <CardContent className="text-muted-foreground">
          A Next.js app for displaying Customer Reviews
        </CardContent>
      </Card>
    </main>
  );
}
