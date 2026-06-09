'use client';

import { useEffect } from 'react';
import { captureAttribution } from '@/lib/attribution';
import { track } from '@/lib/track';

export default function PageTracker() {
  useEffect(() => {
    captureAttribution();
    track('page_view');
  }, []);

  return null;
}
