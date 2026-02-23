"use client";

import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

export default function SoundPackPage() {
  const [openModal, setOpenModal] = useState(false);

  const confirmUnlock = () => {
    setOpenModal(false);
    alert("Pack Unlocked Successfully!");
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
                    20,000+ Sound Effects Pack
                  </h1>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                  A massive collection of high-quality sound effects for films,
                  VFX artists, game developers and content creators.
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
              <Card className="bg-gray-50/5 border border-white/10 p-6">
                <CardTitle className="text-xl font-semibold mb-4 text-white">
                  Easy preview system
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
                <li className="text-white/60">4 Crystals</li>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpenModal(false)}
          />

          <div className="relative bg-[#1a1c20] rounded-2xl w-full max-w-2xl p-8 border border-white/10">
            <h2 className="text-center text-lg text-gray-300 mb-6">
              spent{" "}
              <span className="text-white font-semibold">
                36 crystal
              </span>{" "}
              to unlock this pack?
            </h2>

            <div className="flex items-center gap-4 bg-[#101213] rounded-xl p-4 mb-8 border border-white/10">
              <img
                src="/finalsfx.png"
                className="w-16 h-16 rounded-lg object-cover"
                alt="pack"
              />

              <div>
                <h3 className="font-semibold">
                  20,000+ Sound Effects Pack{" "}
                  <span className="text-xs text-gray-400">
                    YesRealSabbir
                  </span>
                </h3>

                <p className="text-sm text-gray-400 mt-1">
                  An organized sound-effects library with high-quality sounds
                  for editors, VFX artists, and game developers.
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
                yes
              </button>

              <button
                onClick={() => setOpenModal(false)}
                className="py-3 rounded-xl bg-[#2a2d33] text-white font-semibold hover:bg-[#333740]"
              >
                no
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}