export default function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  if (!src) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(26, 18, 10, 0.85)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        cursor: 'zoom-out',
        backdropFilter: 'blur(4px)',
      }}
      onClick={onClose}
    >
      <button
        style={{
          position: 'absolute',
          top: 20,
          right: 25,
          background: '#faf5e8',
          border: '2px solid #c8a96e',
          color: '#3d2e1a',
          borderRadius: '50%',
          width: 40,
          height: 40,
          fontSize: 18,
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        }}
        onClick={onClose}
      >
        ✕
      </button>

      <div style={{ position: 'relative', maxWidth: '85%', maxHeight: '85%' }} onClick={e => e.stopPropagation()}>
        <img
          src={src}
          alt="Project preview large"
          style={{
            maxWidth: '100%',
            maxHeight: '85vh',
            objectFit: 'contain',
            borderRadius: 8,
            border: '3px solid #c8a96e',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            backgroundColor: '#faf5e8',
          }}
        />
      </div>
    </div>
  )
}
