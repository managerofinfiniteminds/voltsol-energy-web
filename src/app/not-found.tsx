import { Container, Section, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <Section className="flex items-center justify-center min-h-[60vh]">
      <Container className="text-center">
        <p className="font-display text-6xl font-bold text-gold sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 text-slate-400">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved.
        </p>
        <div className="mt-8">
          <Button href="/" size="lg">
            Back to Home
          </Button>
        </div>
      </Container>
    </Section>
  );
}
