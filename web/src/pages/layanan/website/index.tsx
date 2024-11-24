import React from 'react';
import Layout from '@theme/Layout';

export default function Website() {
  return (
    <Layout title="Web Development" description="Jasa pembuatan website">
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Soon <code>pages/layanan/website.tsx</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}