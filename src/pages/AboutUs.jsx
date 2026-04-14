const AboutUs = () => {
  const sections = [
    {
      title: "Our Mission",
      content:
        "AyaShop is your ultimate destination for modern elegance and smart technology. We believe shopping is an experience that adds excellence to your lifestyle.",
      icon: "✨",
    },
    {
      title: "How the Story Began",
      content:
        "Born from a passion for quality, we curate a marketplace where style meets utility, ensuring a safe and seamless journey from our vision to your doorstep.",
      icon: "📖",
    },
    {
      title: "What We Offer",
      content:
        "Fashion that reflects you, smart electronics to simplify your life, and a boundless variety of products that constantly evolve to meet your ambitions.",
      icon: "💎",
    },
    {
      title: "Our Core Values",
      content:
        "Uncompromised quality, absolute trust through transparency, and dedicated support to ensure your complete satisfaction with every order.",
      icon: "🤝",
    },
  ];
  return (
    <>
      <div>
        <div className="text-center py-20  text-[#340c4b] dark:text-purple-700">
          <h1 className="text-5xl font-extrabold mb-4 mt-5 underline ">
            About our Shop
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg dark:text-white">
            We blend elegance with technology to create a unique shopping
            experience tailored just for you.
          </p>
        </div>
        <div className="py-6 px-6 flex items-center justify-center font-['Poppins'] mb-10">
          <div className="max-w-6xl w-full grid grid-cols-1  md:grid-cols-2 lgl:grid-cols-4 gap-8">
            {sections.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden p-8 rounded-3xl bg-purple-950 backdrop-blur-md border border-white/20 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-purple-500 dark:hover:bg-purple-500/20 dark:hover:backdrop-blur-lg dark:hover:border-purple-400/20"
              >
                <div className="absolute -inset-y-full -inset-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent rotate-45 transition-all duration-700 group-hover:inset-0 dark:bg-none dark:bg-[#0f051a]" />

                <div className="relative z-10">
                  <span className="text-4xl mb-4 block filter drop-shadow-md">
                    {item.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-[#b60e8f] mb-4 tracking-wide dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-800 leading-relaxed text-md dark:text-white/50">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
