import { useEffect, useRef } from "react";
import "./index.css";

const AnimationBg = () => {
  const containerRef = useRef(null);
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789,.<>/?;:'`[]{}=-+_/|*!@#$%^&*()~".split("");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const addChar = () => {
      const element = document.createElement("span");
      container.appendChild(element);
      animate(element);
    };

    const animate = (element) => {
      let duration = Math.random() * 3 + 5; // 2-5 saniye arası süre
      let offsetX = Math.random() * 100; // 0-100vw arası rastgele konum
      let size = Math.random() * 20 + 10; // 10px ile 30px arasında font boyutu

      element.style.cssText = `
        left: ${offsetX}vw;
        font-size: ${size}px;
        animation-duration: ${duration}s;
      `;

      // Karakter değişimini sağlayan fonksiyon
      const changeCharacter = () => {
        element.innerHTML = chars[Math.floor(Math.random() * chars.length)];
      };

      // İlk karakteri belirle
      changeCharacter();

      // Karakterin sürekli değişmesi için interval başlat
      const charInterval = setInterval(changeCharacter, 100); // 100ms'de bir değişim

      // Animasyon süresi sonunda elemanı kaldır ve intervali durdur
      setTimeout(() => {
        clearInterval(charInterval);
        if (container.contains(element)) {
          container.removeChild(element);
        }
      }, duration * 1000);
    };

    const interval = setInterval(addChar, 150);
    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="animation-container" />;
};

export default AnimationBg;
