import React, { useState } from "react";
import canvasConfetti from "canvas-confetti";
import {
  FaHeart,
  FaGem,
  FaRing,
  FaStar
} from "react-icons/fa";
import "../App.css";

function Proposal() {

  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({
    x: 0,
    y: 0
  });

  /* No button move */

  const moveNo = () => {

    const x = Math.random() * 260 - 130;
    const y = Math.random() * 160 - 80;

    setNoPos({
      x,
      y
    });
  };

  /* Premium Confetti */

  const handleYes = () => {

    setAccepted(true);

    canvasConfetti({
      particleCount: 220,
      spread: 120,
      startVelocity: 40,
      origin: { y: 0.6 }
    });

    setTimeout(() => {

      canvasConfetti({
        particleCount: 180,
        angle: 60,
        spread: 90,
        origin: { x: 0 }
      });

      canvasConfetti({
        particleCount: 180,
        angle: 120,
        spread: 90,
        origin: { x: 1 }
      });

    }, 300);
  };

  return (
    <div className="proposal-page">

      {/* Floating Hearts */}

      <div className="hearts">
        {[...Array(18)].map((_, i) => (
          <FaHeart
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${7 + Math.random() * 5}s`,
              fontSize: `${18 + Math.random() * 20}px`
            }}
          />
        ))}
      </div>

      {/* Main Card */}

      <div className="glass-card">

        <div className="glow-circle"></div>

        {!accepted ? (

          <>
            {/* Top Icons */}

            <div className="top-icons">
              <FaGem />
              <FaStar />
              <FaRing />
            </div>

            {/* Title */}

            <h1 className="main-title">
              Ashish ❤️ Akshu
            </h1>

            {/* Typing */}

            <h2 className="typing">
              Kuch rishte kismat me likhe hote hain ✨
            </h2>

            {/* Love Text */}

            <p className="love-msg">
              Is badalti duniya me,
              <br />
              tumhari muskaan meri
              <br />
              hamesha rehne wali khushi
              <br />
              ban gayi hai ❤️
            </p>

            {/* Shayari */}

            <div className="shayari-box">

              <p>
                "Teri muskaan meri roshni hai,
                <br />
                tera naam meri dua...
                <br />
                Duniya badal jaye chahe,
                <br />
                Akshu...
                <br />
                tu rahegi dil ki sabse
                <br />
                khoobsurat wajah ❤️"
              </p>

            </div>

            {/* Question */}

            <h3 className="question">
              Akshu... kya tum hamesha
              <br />
              mera saath dogi? 💖
            </h3>

            {/* Buttons */}

            <div className="btn-box">

              <button
                className="yes-btn"
                onClick={handleYes}
              >
                Haan Mera Pyaar 💍
              </button>

              <button
                className="no-btn"
                onMouseEnter={moveNo}
                onClick={moveNo}
                style={{
                  transform: `translate(${noPos.x}px, ${noPos.y}px)`
                }}
              >
                Nahi 😅
              </button>

            </div>
          </>

        ) : (

          /* Success */

          <div className="success">

            <FaHeart className="success-heart" />

            <h1>
              Usne Haan Keh Di 💖
            </h1>

            <h2>
              Ashish ❤️ Akshu
            </h2>

            <p>
              "Mohabbat lafzon se nahi,
              <br />
              ehsaason se likhi jati hai...
              <br />
              aur kuch kahaniyan
              <br />
              hamesha ke liye
              <br />
              ban jati hain ❤️"
            </p>

            <h3>
              Hamari Kahani
              <br />
              Yahin Se Shuru Hoti Hai ✨
            </h3>

          </div>

        )}
      </div>
    </div>
  );
}

export default Proposal;