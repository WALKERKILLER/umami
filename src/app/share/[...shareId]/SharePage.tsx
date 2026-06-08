'use client';
import { Column, useTheme } from '@umami/react-zen';
import { useEffect } from 'react';
import { WebsiteHeader } from '@/app/(main)/websites/[websiteId]/WebsiteHeader';
import { WebsitePage } from '@/app/(main)/websites/[websiteId]/WebsitePage';
import { WebsiteProvider } from '@/app/(main)/websites/WebsiteProvider';
import { PageBody } from '@/components/common/PageBody';
import { useShareTokenQuery } from '@/components/hooks';
import { BackgroundWaves } from './BackgroundWaves';
import { Footer } from './Footer';
import { Header } from './Header';
import { SketchDecorations } from './SketchDecorations';

export function SharePage({ shareId }) {
  const { shareToken, isLoading } = useShareTokenQuery(shareId);
  const { setTheme } = useTheme();

  useEffect(() => {
    const url = new URL(window?.location?.href);
    const theme = url.searchParams.get('theme');

    if (theme === 'light' || theme === 'dark') {
      setTheme(theme);
    }
  }, []);

  if (isLoading || !shareToken) {
    return null;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center font-sans bg-wabi-paper dark:bg-wabi-dark-paper transition-colors duration-500 overflow-x-hidden">
      {/* Ambient Background & Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundWaves />
        <SketchDecorations />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 w-full max-w-6xl px-4 py-8 md:py-12 flex flex-col items-center flex-grow">
        <Header />
        <div className="w-full mt-8 md:mt-10">
          <Column backgroundColor="transparent">
            <PageBody gap>
              <WebsiteProvider websiteId={shareToken.websiteId}>
                <WebsiteHeader showActions={false} />
                <WebsitePage websiteId={shareToken.websiteId} />
              </WebsiteProvider>
            </PageBody>
          </Column>
        </div>
      </main>

      <Footer />
    </div>
  );
}
