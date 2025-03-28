export default function GoogleMap({ src, title = "Mappa", height = "450" }) {
  return (
    <iframe
      className="rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-300 w-full md:w-4/5"
      src={src}
      height={height}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={title}
    ></iframe>
  );
}
