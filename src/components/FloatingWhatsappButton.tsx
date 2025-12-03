const whatsappLink =
  "https://wa.me/919866937777?text=I'm%20interested%20in%20your%20services";

const FloatingWhatsappButton = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 rounded-full bg-[#25D366] px-3 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#1ebe5d]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-10 w-10"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="whatsappGradient"
            x1="16"
            y1="0"
            x2="16"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#25D366" />
            <stop offset="1" stopColor="#128C7E" />
          </linearGradient>
        </defs>
        <path
          d="M16 3C9.925 3 5 7.925 5 14c0 2.018.59 3.892 1.616 5.48L5 27l7.77-1.588A10.94 10.94 0 0 0 16 25c6.075 0 11-4.925 11-11S22.075 3 16 3Z"
          fill="url(#whatsappGradient)"
        />
        <path
          d="M12.205 10.424c-.24-.533-.493-.544-.722-.555l-.616-.01c-.214 0-.56.08-.853.398-.293.32-1.12 1.094-1.12 2.668 0 1.575 1.147 3.095 1.307 3.309.16.213 2.21 3.533 5.45 4.81 2.696 1.063 3.245.852 3.83.8.585-.053 1.89-.772 2.157-1.518.267-.746.267-1.386.187-1.518-.08-.133-.293-.213-.614-.373-.32-.16-1.89-.93-2.183-1.035-.293-.107-.507-.16-.72.16-.213.32-.827 1.034-1.013 1.247-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.574-1.588-.952-.85-1.595-1.899-1.782-2.219-.187-.32-.02-.494.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.707-1.76-.987-2.404Z"
          fill="#fff"
        />
      </svg>
      <span className="hidden md:inline">Get Our Services</span>
    </a>
  );
};

export default FloatingWhatsappButton;

