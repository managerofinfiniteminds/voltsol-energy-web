'use client';

interface SuccessScreenProps {
  firstName: string;
}

export default function SuccessScreen({ firstName }: SuccessScreenProps) {
  const phone = process.env.NEXT_PUBLIC_VOLTSOL_PHONE;

  return (
    <div className="text-center py-12 px-4">
      <div className="text-7xl mb-6">✅</div>
      <h2 className="text-3xl font-bold text-white mb-3">
        Thanks, {firstName}!
      </h2>
      <p className="text-xl text-amber-400 font-semibold mb-4">
        We&apos;ll be in touch within 24 hours.
      </p>
      <p className="text-slate-300 text-lg max-w-md mx-auto leading-relaxed">
        A VoltSol advisor will reach out to discuss your solar savings estimate.
      </p>
      {phone && (
        <p className="mt-6 text-slate-400">
          Questions?{' '}
          <a href={`tel:${phone}`} className="text-amber-400 font-semibold hover:underline">
            Call us: {phone}
          </a>
        </p>
      )}
    </div>
  );
}
