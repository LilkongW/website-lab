import Image, { ImageProps } from "next/image";

const basePath =
  process.env.NODE_ENV === "production" ? "/website-lab" : "";

export default function AppImage({ src, ...props }: ImageProps) {
  const finalSrc =
    typeof src === "string" ? `${basePath}${src}` : src;
  return <Image src={finalSrc} {...props} />;
}
