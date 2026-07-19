import React from 'react';

interface MapIframeProps {
  lat?: number | string;
  lng?: number | string;
  className?: string;
  zoom?: number;
}

export function MapIframe({ lat, lng, className = "", zoom = 15 }: MapIframeProps) {
  if (!lat || !lng) {
    return (
      <div className={`relative w-full h-[400px] bg-gray-100 flex items-center justify-center rounded-xl shadow-inner ${className}`}>
        <p className="text-gray-500">Map location not available</p>
      </div>
    );
  }

  const mapUrl = `https://maps.google.com/maps?q=${lat},${lng}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
  
  return (
    <div className={`relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg ${className}`}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Location"
      ></iframe>
    </div>
  );
}
