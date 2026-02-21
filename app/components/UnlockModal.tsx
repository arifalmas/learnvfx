const UnlockModal = ({ open, onClose, onConfirm }: { open: boolean, onClose: () => void, onConfirm: () => void }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-[#1a1c20] rounded-2xl w-full max-w-2xl p-8 border border-white/10">

        {/* Title */}
        <h2 className="text-center text-lg text-gray-300 mb-6">
          spent <span className="font-semibold text-white">4 crystal</span> to unlock this pack?
        </h2>

        {/* Card */}
        <div className="flex items-center gap-4 bg-[#101213] rounded-xl p-4 mb-8 border border-white/10">
          <img src="/images/pack-thumb.png" alt="pack" className="w-16 h-16 rounded-lg object-cover" />

          <div>
            <h3 className="font-semibold text-white">
              20,000+ Sound Effects Pack <span
                className="text-xs text-gray-400">YesRealSabbir</span>
            </h3>

            <p className="text-sm text-gray-400 mt-1">
              An organized sound-effects library packed with a wide variety of high-quality
              sounds
              for editors, VFX artists, and game developers.
            </p>

            <p className="text-xs text-gray-500 mt-2">
              207 downloads · 4.6 GB · Creation Date : Jan 19, 2026
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button onClick={onConfirm}
            className="py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90">
            yes
          </button>

          <button onClick={onClose}
            className="py-3 rounded-xl bg-[#2a2d33] text-white font-semibold hover:bg-[#333740]">
            no
          </button>
        </div>
      </div>
    </div>
  );
}

export default UnlockModal;