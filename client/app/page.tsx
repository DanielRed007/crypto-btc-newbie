import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to Crypto Newbie</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Your one-stop app to get started with Bitcoin! Learn the basics, generate your first
            Bitcoin address, and explore crypto with ease.
          </p>
          <Link href="/generate">
            <Button>Generate Keys</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}