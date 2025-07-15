import React from "react";
import Navbar from "../../Component/Website/Header/Navbar";

export default function Topfreelance() {
  return (
    <>
      <Navbar></Navbar>



      <section className="min-h-screen bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center p-8">
        <div className="relative max-w-3xl bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 overflow-hidden">
          {/* Funky colored blobs */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

          <h1 className="relative text-4xl font-extrabold text-indigo-900 mb-8 leading-tight drop-shadow-lg">
            💼 How Top Freelancers Use AI to Win Clients While Working Less
          </h1>

          <p className="relative text-lg text-indigo-800 mb-6">
            Freelancing is a hustle — but the smartest pros have a secret weapon: <strong>AI</strong>.
            They work smarter, not harder — here’s how:
          </p>

          <ul className="relative list-disc list-inside space-y-5 text-indigo-700 font-semibold">
            <li>Personalized outreach at scale — no more cold DMs.</li>
            <li>Smart proposals generated fast with AI insights.</li>
            <li>Accelerated creative delivery — faster turnaround, happier clients.</li>
            <li>Data-driven improvements to refine offers and boost prices.</li>
          </ul>

          <p className="relative mt-8 italic text-indigo-900 font-bold text-center drop-shadow-md">
            More clients, less grind.<br />
            AI amplifies your strengths.
          </p>

          {/* Small funky shapes */}
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-300 rounded-full mix-blend-screen filter blur-md animate-blob animation-delay-4000"></div>
        </div>

        <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -20px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
      </section>
    </>
  );
}


