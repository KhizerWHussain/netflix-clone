import dynamic from "next/dynamic";
const Base = dynamic(() => import("@/components/Base"), { ssr: false });

export default function Home() {
  return <Base />;
}
