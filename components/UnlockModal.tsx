import { IProduct } from "@/types/product-types";

interface UnlockModalProps {
  setOpenModal: (open: boolean) => void;
  userCrystal: number;
  product: IProduct;
  confirmUnlock: () => void;
}

const UnlockModal = ({ setOpenModal, userCrystal, product, confirmUnlock }: UnlockModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setOpenModal(false)}
      />

      <div className="relative bg-[#1a1c20] rounded-2xl w-full max-w-2xl p-8 border border-white/10">
        {
          userCrystal >= product?.crystalToUnlock ? (
            <h2 className="text-center text-lg text-gray-300 mb-6">
              Unlock this pack by spending{" "}
              <span className="text-white font-semibold px-1">
                {product.crystalToUnlock} crystals
              </span>
              . Confirm to proceed.
            </h2>
          ) : (
            <h2 className="text-center text-lg text-gray-300 mb-6">
              <span className="mr-2 text-red-600 font-semibold">Balance Low 😟</span>
              You need{" "}
              <span className="text-white font-semibold px-1">
                {product.crystalToUnlock - userCrystal} more crystals
              </span>{" "}
              to unlock this pack.
            </h2>
          )
        }


        <div className="flex items-center gap-4 bg-[#101213] rounded-xl p-4 mb-8 border border-white/10">
          <img
            src="/finalsfx.png"
            className="w-16 h-16 rounded-lg object-cover"
            alt="pack"
          />

          <div>
            <h3 className="font-semibold">
              {product.name}
              <span className="text-xs text-gray-400">
                YesRealSabbir
              </span>
            </h3>

            <p className="text-sm text-gray-400 mt-1">
              {product.description}
            </p>

            <p className="text-xs text-gray-500 mt-2">
              207 downloads · 4.6 GB · Creation Date : Jan 19, 2026
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={confirmUnlock}
            className="py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90"
          >
            {
              userCrystal >= product.crystalToUnlock ? "Confirm" : "Buy Crystal"
            }
          </button>

          <button
            onClick={() => setOpenModal(false)}
            className="py-3 rounded-xl bg-[#2a2d33] text-white font-semibold hover:bg-[#333740]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default UnlockModal;