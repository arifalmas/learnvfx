"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import UnlockModal from "@/components/UnlockModal";
import useProduct from "@/hooks/useProduct";
import useProfile from "@/hooks/useProfile";
import { IGalleryItem, IProduct } from "@/types/product-types";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function SoundPackPage() {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter()
  const params = useParams();
  const slug = params?.slug as string;


  // Access User Crystal
  const { data: user } = useProfile()
  const userCrystal = user?.data?.crystal || 0;

  // Single Product data
  const { data: product, isLoading, isError, error } = useProduct(slug);

  if (isLoading) return <p>Loading Products...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;
  if (!product) return <p>Product not found.</p>;

  const confirmUnlock = () => {
    if (userCrystal < product.crystalToUnlock) {
      router.push('/crystal-price')
    } else {
      setOpenModal(false);
      alert("Pack Unlocked Successfully!");
    }

  };

  return (
    <>
      <section className="min-h-screen bg-[#0d0f12] text-white pb-10">
        <div className="max-w-7xl mx-auto px-6 pt-16">

          {/* ===== GRID WRAPPER ===== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">

            {/* ===== LEFT COLUMN (NOW LONG) ===== */}
            <div className="lg:col-span-2 space-y-16">

              {/* ===== TOP CONTENT ===== */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border border-white/10 bg-[#14161b]">
                    <img
                      src="/finalsfx.png"
                      alt="sound pack thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h1 className="text-4xl font-bold">
                    {product?.name}
                  </h1>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                  {product?.description}
                </p>

                <p className="text-sm text-gray-500 mb-8">
                  207 downloads · 4.6 GB · Created on Jan 6, 2026
                </p>

                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="/images/folder-preview.png"
                    alt="organized folders"
                    className="w-full"
                  />
                </div>
              </div>

              {/* ===== PREVIEW + DRAG SECTION ===== */}

              {
                product.gallery.map((item: IGalleryItem) => (
                  <Card key={item._id} className="bg-gray-50/5 border border-white/10 p-6">
                    <CardTitle className="text-xl font-semibold mb-4 text-white">
                      {item.label}
                    </CardTitle>

                    <Image
                      src="/images/audio-preview.png"
                      alt="audio preview"
                      className="w-full"
                      width={800}
                      height={400}
                    />

                    <CardTitle className="text-xl font-semibold mb-4 text-white mt-10 md:mt-16">
                      Drag and drop the segment you like
                    </CardTitle>

                    <img
                      src="/images/drag-drop.png"
                      alt="drag and drop"
                      className="w-full"
                    />
                  </Card>
                ))
              }

            </div>

            {/* ===== RIGHT STICKY CARD ===== */}
            <Card className="h-fit lg:sticky lg:top-28 self-start bg-gray-50/5 border border-white/10 p-6">
              <CardTitle className="text-xl font-semibold mb-4 text-white">
                This Pack Includes
              </CardTitle>

              <ul className="space-y-3 text-sm text-gray-300">
                <li className="text-white/60">Instant download</li>
                <li className="text-white/60">Organized files</li>
                <li className="text-white/60">High quality</li>
                <li className="text-white/60">Easy preview</li>
                <li className="text-white/60">Lifetime access</li>
                <li className="text-white/60">Help tutorial</li>
                <li className="text-white/60">207 downloads</li>
                <li className="text-white/60">4.6 GB</li>
                <li className="text-white/60">{product?.crystalToUnlock} Crystals</li>
              </ul>

              <Button
                variant="ghost"
                onClick={() => setOpenModal(true)}
                className="w-full mt-6 py-3 rounded-xl bg-white text-black hover:bg-white/90 font-semibold"
              >
                UNLOCK
              </Button>
            </Card>

          </div>
        </div>
      </section>

      {/* ===== UNLOCK MODAL ===== */}
      {openModal && (
        <UnlockModal setOpenModal={setOpenModal} userCrystal={userCrystal} product={product} confirmUnlock={confirmUnlock} />
      )}
    </>
  );
}