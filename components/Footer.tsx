import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-green-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
             <Image src="/image/lodobgremover.png" alt="logo" width={50} height={50} />
            <span className="text-xl  font-bold">Botaniqa</span>
          </div>
          <p className="text-green-300">
            © 2025 Botaniqa. All rights reserved. | Naturally healing since 2012
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
