import React, { useState, useEffect } from "react";
import "../app.css"; // Assuming you have a global CSS file for styles
import bannerImage from "../assets/bg.jpg"; // Replace with your actual image path
import all from "../assets/burguerAll.png";
import carne from "../assets/carne.png";
import picante from "../assets/chile.png";
import veggie from "../assets/vegetariano.png";

const BurgertownMenu = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const burgers = [
    {
      id: 1,
      name: "Clásica Doble Queso",
      description: "Doble carne, doble cheddar, pepinillos y salsa de la casa.",
      price: "$9.200",
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&h=800&q=80",
      category: "all",
    },
    {
      id: 2,
      name: "BBQ Bacon",
      description: "Carne, cheddar, bacon crocante y salsa BBQ ahumada.",
      price: "$9.800",
      image:
        "https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&w=800&h=800&q=80",
      category: "extra carne",
    },
    {
      id: 3,
      name: "Spicy Jalapeña",
      description: "Carne, pepper jack, jalapeños y mayo de chipotle.",
      price: "$9.600",
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&h=800&q=80",
      category: "spicy",
    },
    {
      id: 4,
      name: "Veggie Verde",
      description: "Medallón plant-based, palta, rúcula y tahini de limón.",
      price: "$8.900",
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&h=800&q=80",
      category: "veganas",
    },
    {
      id: 5,
      name: "Doble Smash",
      description: "Dos smash, cheddar, cebolla planchada y pepinillos.",
      price: "$10.200",
      image:
        "https://images.unsplash.com/photo-1606756790138-8b9a3c91f9d1?auto=format&fit=crop&w=800&h=800&q=80",
      category: "extra carne",
    },
    {
      id: 6,
      name: "Buffalo Heat",
      description: "Carne, cheddar, salsa buffalo y cebolla morada.",
      price: "$9.500",
      image:
        "https://images.unsplash.com/photo-1617196039897-3b2cba77c5e7?auto=format&fit=crop&w=800&h=800&q=80",
      category: "spicy",
    },
    {
      id: 7,
      name: "Americana",
      description: "Carne, cheddar, lechuga, tomate y mostaza.",
      price: "$8.700",
      image:
        "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=800&h=800&q=80",
      category: "all",
    },
    {
      id: 8,
      name: "Tex-Mex",
      description: "Carne, guacamole, nachos y salsa picante.",
      price: "$9.900",
      image:
        "https://images.unsplash.com/photo-1604147706283-e3894eb16fd3?auto=format&fit=crop&w=800&h=800&q=80",
      category: "spicy",
    },
    {
      id: 9,
      name: "Vegana Mediterránea",
      description: "Lentejas, hummus, tomate asado y aceite de oliva.",
      price: "$9.000",
      image:
        "https://images.unsplash.com/photo-1612874742237-6526221588c5?auto=format&fit=crop&w=800&h=800&q=80",
      category: "veganas",
    },
    {
      id: 10,
      name: "Triple Cheese",
      description: "Carne, cheddar, mozzarella y provoleta fundida.",
      price: "$10.800",
      image:
        "https://images.unsplash.com/photo-1599785209793-f6f9cc7bd5b5?auto=format&fit=crop&w=800&h=800&q=80",
      category: "extra carne",
    },
    {
      id: 11,
      name: "Sweet Chili",
      description: "Carne, cheddar, cebolla caramelizada y sweet chili.",
      price: "$9.400",
      image:
        "https://images.unsplash.com/photo-1604908176997-8b5b0fc5f081?auto=format&fit=crop&w=800&h=800&q=80",
      category: "spicy",
    },
    {
      id: 12,
      name: "Veggie Palta",
      description: "Garbanzos, palta, tomate y rúcula en pan integral.",
      price: "$8.800",
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&h=800&q=80",
      category: "veganas",
    },
    {
      id: 13,
      name: "Clásica NY",
      description: "Carne, cheddar, pepinillos, ketchup y mostaza.",
      price: "$8.900",
      image:
        "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&h=800&q=80",
      category: "all",
    },
    {
      id: 14,
      name: "Mega Bacon",
      description: "Doble carne, cheddar y mucho bacon crocante.",
      price: "$11.200",
      image:
        "https://images.unsplash.com/photo-1607016533831-d9c7dabe8c77?auto=format&fit=crop&w=800&h=800&q=80",
      category: "extra carne",
    },
    {
      id: 15,
      name: "Chipotle Fire",
      description: "Carne, pepper jack, jalapeños frescos y mayo chipotle.",
      price: "$10.100",
      image:
        "https://images.unsplash.com/photo-1605522315444-9fef86e57390?auto=format&fit=crop&w=800&h=800&q=80",
      category: "spicy",
    },
  ];

  const sides = [
    { name: "PAPAS FRITAS", price: "3200" },
    { name: "PAPAS CON CHEDDAR", price: "4500" },
    { name: "ONION RINGS", price: "3800" },
    { name: "ALITAS BUFFALO", price: "5200" },
  ];

  const milkshakes = [
    "VAINILLA",
    "CHOCOLATE",
    "FRUTILLA",
    "DULCE DE LECHE",
    "OREO",
    "BANANA",
  ];

  const categories = [
    {
      id: "all",
      name: "TODAS",
      icon: (
        <img
          src={all}
          alt="Todas"
          className="h-6 w-6 brightness-0 invert" // brightness-0 + invert = blanco
        />
      ),
    },
    {
      id: "extra carne",
      name: "EXTRA CARNE",
      icon: (
        <img
          src={carne}
          alt="Extra Carne"
          className="h-6 w-6 brightness-0 invert"
        />
      ),
    },
    {
      id: "spicy",
      name: "PICANTES",
      icon: (
        <img
          src={picante}
          alt="Picantes"
          className="h-6 w-6 brightness-0 invert"
        />
      ),
    },
    {
      id: "veganas",
      name: "VEGANAS",
      icon: (
        <img
          src={veggie}
          alt="Veganas"
          className="h-6 w-6 brightness-0 invert"
        />
      ),
    },
  ];

  const filteredBurgers =
    activeFilter === "all"
      ? burgers
      : burgers.filter((burger) => burger.category === activeFilter);

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Condensed:wght@300;400;700&family=Merriweather:wght@300;400;700&display=swap");

        .neon-glow {
          text-shadow: 0 0 3px #ff6b35, 0 0 6px #ff6b35, 0 0 9px #ff6b35;
        }

        @media (min-width: 768px) {
          .neon-glow {
            text-shadow: 0 0 5px #ff6b35, 0 0 10px #ff6b35, 0 0 15px #ff6b35,
              0 0 20px #ff6b35;
          }
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @media (min-width: 768px) {
          .card-hover:hover {
            transform: translateY(-8px) rotate(1deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @media (min-width: 768px) {
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @media (min-width: 768px) {
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-50px) scale(0.9);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }
        }

        .slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }

        .brick-pattern {
          background-image: linear-gradient(
              45deg,
              transparent 25%,
              rgba(0, 0, 0, 0.1) 25%
            ),
            linear-gradient(-45deg, transparent 25%, rgba(0, 0, 0, 0.1) 25%),
            linear-gradient(45deg, rgba(0, 0, 0, 0.1) 75%, transparent 75%),
            linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 75%, transparent 75%);
          background-size: 20px 20px;
          background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
        }

        @media (min-width: 768px) {
          .brick-pattern {
            background-size: 30px 30px;
            background-position: 0 0, 0 15px, 15px -15px, -15px 0px;
          }
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-red-100">
        {/* Header Section - Mobile First */}
        <div className="relative bg-black ">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 h-64 md:h-full md:w-full md:bg-center "
            style={{
              backgroundImage: `url(${bannerImage})`,
            }}
          />
          <div className="relative container mx-auto px-4 py-12 text-center ">
            <div className="floating">
              <h1
                className="text-6xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-yellow-400 neon-glow mb-4 md:mb-6"
                style={{ fontFamily: "Bebas Neue" }}
              >
                BURGERTOWN
              </h1>
            </div>
            <div className="w-16 md:w-20 h-1 bg-yellow-400 mx-auto mb-4 md:mb-6"></div>
            <p
              className="text-sm sm:text-lg md:text-2xl lg:text-3xl text-amber-100 tracking-[0.2em] md:tracking-[0.3em] font-bold px-2"
              style={{
                fontFamily: "bebas-neue-regular",
              }}
            >
              EST. 1995 • ESTILO NYC
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-black via-neutral-800 to-black h-38 py-4 md:py-8 sticky top-0 z-20 shadow-2xl border-b-4 border-red-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="md:hidden">
              <div className="grid grid-cols-4 gap-2">
                {categories
                  .filter((cat) => cat.id !== "signature")
                  .map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`relative h-18 px-3 py-3 font-bold transition-all duration-300 text-xs border-2 ${
                        activeFilter === category.id
                          ? "bg-red-600 text-white border-yellow-400 shadow-lg shadow-red-600/50 scale-105"
                          : "bg-red-900 text-white border-red-600 hover:bg-red-800"
                      }`}
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {activeFilter === category.id && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
                      )}
                      <div className="flex flex-col items-center justify-center gap-1">
                        <span className="text-lg">{category.icon}</span>
                        <span className="font-black leading-tight">
                          {category.name}
                        </span>
                      </div>
                    </button>
                  ))}
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex justify-center">
                <div className="inline-flex bg-black/50 p-2 rounded-full border-2 border-red-600">
                  {categories.map((category, index) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`relative mx-1 px-6 py-3 font-bold transition-all duration-300 transform ${
                        activeFilter === category.id
                          ? "rounded-full text-white scale-110 shadow-lg shadow-red-600/50"
                          : "bg-transparent text-white hover:bg-red-600/20 rounded-full hover:scale-105"
                      } ${
                        index === 0
                          ? "rounded-l-full"
                          : index === categories.length - 1
                          ? "rounded-r-full"
                          : ""
                      }`}
                      style={{ fontFamily: "'Oswald', sans-serif" }}
                    >
                      {activeFilter === category.id && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 rounded-full"></div>
                          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                            <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-yellow-400"></div>
                          </div>
                        </>
                      )}
                      <div className="relative flex items-center gap-2">
                        <span className="text-lg">{category.icon}</span>
                        <span className="font-black tracking-wide">
                          {category.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <div className="inline-flex items-center gap-2 bg-red-700 text-white border-[1px] border-yellow-400 px-4 py-1 rounded-full text-xs font-bold">
                <span>MOSTRANDO:</span>
                <span className="bg-red-800 border-[1px] border-yellow-400 text-white px-2 py-0.5 rounded-full">
                  {categories.find((cat) => cat.id === activeFilter)?.name ||
                    "TODAS"}
                </span>
              </div>
            </div>
          </div>

          {/* Decorative Border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-yellow-400 to-red-600"></div>
        </div>
        {/* Menu Grid - Mobile First Layout */}
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {filteredBurgers.map((burger, index) => (
              <div
                key={burger.id}
                className={`card-hover bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl overflow-hidden border-2 md:border-4 border-red-200 relative ${
                  isLoaded ? "slide-in" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                {/* Popular Badge - Mobile Optimized */}
                {burger.popular && (
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10 bg-red-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg transform rotate-12">
                    🔥 POPULAR
                  </div>
                )}

                {/* Image Section - Mobile First */}
                <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
                  <img
                    src={burger.image}
                    alt={burger.name}
                    className="w-full h-full object-cover transition-transform duration-500 md:hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Price Overlay - Mobile Optimized */}
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                    <div className="bg-green-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-full">
                      <span
                        className="text-lg sm:text-xl md:text-2xl font-black"
                        style={{ fontFamily: "'Anton', sans-serif" }}
                      >
                        {burger.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section - Mobile Optimized */}
                <div className="p-5 md:p-6 lg:p-8">
                  <h3
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 tracking-wide"
                    style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
                  >
                    {burger.name}
                  </h3>

                  <p
                    className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8"
                    style={{ fontFamily: "'Merriweather', serif" }}
                  >
                    {burger.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Two Column Layout - Sides & Milkshakes */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sides Section */}

          <div className="retro-card rounded-none p-6 ">
            <div className="mt-8 bg-red-600 text-white p-4 text-center ">
              <p
                className=" text-xl"
                style={{ fontFamily: "'Bebas Neue', cursive" }}
              >
                ¡TODAS LAS HAMBURGUESAS VIENEN CON PAPAS!
              </p>
            </div>
            <h2
              className="text-3xl font-black text-red-700 mb-6 mt-8"
              style={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              GUARNICIONES
            </h2>

            <div className="space-y-4">
              {sides.map((side, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-dotted border-red-200 pb-2"
                >
                  <span
                    className="font-bold text-red-700"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {side.name}
                  </span>
                  <span
                    className="font-black text-lg text-red-700"
                    style={{ fontFamily: "'Bebas Neue', cursive" }}
                  >
                    ${side.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Milkshakes Section */}
          <div className="retro-card rounded-none p-6">
            <h2
              className="text-3xl font-black text-red-700 mb-6"
              style={{ fontFamily: "'Bebas Neue', cursive" }}
            >
              LICUADOS : $4700
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {milkshakes.map((flavor, index) => (
                <div
                  key={index}
                  className="text-center border-b border-dotted border-red-200"
                >
                  <span
                    className="font-bold text-red-700 text-sm"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {flavor}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center bg-red-600 text-white p-4">
              <p className="text-sm font-bold mb-2">
                LICUADOS CON TOSTADAS - SUPER COMBO!
              </p>
              <div className="inline-block bg-white text-red-600 px-4 py-2 transform rotate-3">
                <span
                  className="text-3xl font-black"
                  style={{ fontFamily: "'Bebas Neue', cursive" }}
                >
                  $9500
                </span>
              </div>
            </div>

            {/* Mini Mascot */}
            <div className="text-center mt-6">
              <div className="inline-block text-6xl transform -rotate-12 hover:rotate-12 transition-transform duration-300">
                🍔
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Mobile First */}
        <div className="bg-neutral-900 text-center py-8 md:py-12 px-4">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-3 md:mb-4"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            ¿LISTO PARA ORDENAR?
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 px-2"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            El auténtico sabor de Nueva York, aquí en Argentina
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-black py-3 md:py-4 px-8 md:px-12 rounded-full text-lg md:text-xl transition-all duration-300 transform active:scale-95 md:hover:scale-110 shadow-lg hover:shadow-yellow-500/50">
            <span style={{ fontFamily: "'Anton', sans-serif" }}>
              ¡A DISFRUTAR!
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default BurgertownMenu;
