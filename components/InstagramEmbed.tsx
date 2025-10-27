'use client';

import * as React from 'react';

type InstagramEmbedProps = {
  /** Full permalink, e.g. https://www.instagram.com/reel/XXXX/ */
  url: string;
  /** Show IG caption under the embed */
  captioned?: boolean;
  className?: string;
};

export default function InstagramEmbed({
  url,
  captioned = true,
  className,
}: InstagramEmbedProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    const SCRIPT_ID = 'instagram-embed-script';

    const ensureScript = () =>
      new Promise<void>((resolve) => {
        const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
        if (existing) {
          resolve();
          return;
        }
        const s = document.createElement('script');
        s.id = SCRIPT_ID;
        s.async = true;
        s.src = 'https://www.instagram.com/embed.js';
        s.onload = () => resolve();
        document.body.appendChild(s);
      });

    ensureScript().then(() => {
      // Instagram’s global is attached by the script above
      // @ts-ignore
      if (window.instgrm?.Embeds?.process) {
        // @ts-ignore
        window.instgrm.Embeds.process(containerRef.current || undefined);
      }
    });
  }, [url, captioned]);

  return (
    <div ref={containerRef} className={className}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        data-instgrm-captioned={captioned ? 'true' : 'false'}
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px auto',
          maxWidth: 540,
          minWidth: 326,
          width: '100%',
        }}
      />
    </div>
  );
}

