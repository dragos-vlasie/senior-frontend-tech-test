// pages/index.tsx
import Image from "next/image";
import Video from "@/components/Video";
import Form from "@/components/Form";
import Layout from "@/components/Layout";

export default function Home() {
  const videoFile = {
    url: "/ffern.mp4",
    contentType: "video/mp4",
    width: 640,
    height: 360,
  };
  return (
    <Layout>
      <div className="text-gray-700 prose gap-16 md:p-8 md:flex md:flex-row-reverse items-center">
        <Video videoFile={videoFile} autoplayMuted loop />
        <div>
            <p className="mb-4">Dear Siobhan,</p>
            <p className="mb-4">
              We are delighted to invite you to join Ffern Friends, our new community of like minded creators and artists.
            </p>
            <p className="mb-4">Here's how it works:</p>
            <ul className="list-disc mb-4 ml-8">
              <li>
                You&apos;ll skip the waiting list and be added straight to the Ffern ledger As a ledger member, you&apos;ll receive a
                made-to-order bottle of natural eau de parfum each season
              </li>
              <li>You&apos;ll also be given a unique link to our waiting list, if you decide to share Ffern within your community</li>
              <li>Your bottle will arrive one week ahead of its launch, just before the solstices and equinoxes</li>
              <li>You&apos;ll also be given a unique link to our waiting list, if you decide to share Ffern within your community</li>
            </ul>

            <p className="mb-4">
              If this sounds like something you may be interested in, we&apos;d love it if you could fill out your details below, and
              we&apos;ll send you our latest fragrance.
            </p>
            <p className="mb-1">Sincerely,</p>
            <p className="mb-4">Salma & the Ffern team</p>
          </div>
      </div>

      <Form />
      <Image className="mt-20 md:ml-6 mb-2 block" src="/ffern-logo-black.svg" alt="" width={60} height={18} />
    </Layout>
  );
}
