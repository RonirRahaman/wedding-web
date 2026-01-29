/**
 * Reusable Leaflet map. Mobile-first: shorter height, touch-friendly.
 * Desktop: taller map, same layout.
 */
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { motion } from 'framer-motion'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const osmAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'

export default function VenueMap({ lat, lng, label, address, zoom = 15 }) {
  const [mounted, setMounted] = useState(false)
  const center = [lat, lng]
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address || label)}`

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="aspect-[4/3] w-full max-w-full animate-pulse rounded-lg bg-stone-200/60 sm:aspect-[5/3]" />
    )
  }

  return (
    <motion.div
      className="w-full overflow-hidden rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        className="h-[220px] w-full sm:h-[260px] md:h-[300px] lg:h-[320px]"
        scrollWheelZoom={false}
      >
        <TileLayer url={osmUrl} attribution={osmAttribution} />
        <Marker position={center}>
          <Popup>
            <p className="font-semibold text-stone-800">{label}</p>
            {address && (
              <p className="mt-1 max-w-[200px] text-sm leading-snug text-stone-600 sm:max-w-none">
                {address}
              </p>
            )}
            <a
              href={gmapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block py-1 text-sm text-amber-700 underline"
            >
              Open in Google Maps
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </motion.div>
  )
}
