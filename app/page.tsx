import { permanentRedirect } from 'next/navigation';

export default function Home() {
  // Redirect to default location (Delhi)
  permanentRedirect('/delhi');
}
