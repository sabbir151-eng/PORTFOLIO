import React from 'react';
import { Button } from '../components/ui/Button';
import { Home as HomeIcon } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-bg text-text flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <span className="text-6xl font-bold font-mono text-accent">404</span>
        <h1 className="text-2xl font-bold font-display text-text mt-4">Page Not Found</h1>
        <p className="text-text-muted mt-2 text-sm">
          The page or case study you are looking for does not exist or has been moved.
        </p>
        <div className="mt-6 flex justify-center">
          <Button as="a" href="/" variant="primary" size="md">
            <HomeIcon className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}

