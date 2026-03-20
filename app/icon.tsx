import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Route segment config
export const runtime = 'nodejs';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default async function Icon() {
  const logoPath = join(process.cwd(), 'public/images/logo.png');
  const logoData = await readFile(logoPath);
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <div
          style={{
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '1px solid rgba(249, 168, 38, 0.2)', // border-accent/20 from Navbar
          }}
        >
          <img
            src={logoBase64}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            alt="IHAUS Logo"
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
