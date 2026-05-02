export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Education Analytics
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
          See Exactly Where{" "}
          <span className="text-[#58a6ff]">Students Drop Off</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          VideoHeat tracks engagement second-by-second across every student. Spot boring segments, find your optimal video length, and re-engage learners before they quit.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $9/mo
        </a>
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
          <div className="px-4 pt-4 pb-2 text-left text-xs text-[#8b949e] font-mono border-b border-[#30363d]">
            Engagement Heatmap — Intro to React (42 students)
          </div>
          <div className="p-4">
            <div className="flex items-end gap-0.5 h-20">
              {[90,88,85,80,75,70,65,60,72,78,80,76,70,60,50,42,38,35,40,45,50,55,52,48,44,40,36,32,30,28].map((v, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${v}%`,
                    backgroundColor: v > 70 ? "#238636" : v > 50 ? "#e3b341" : "#da3633"
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-[#8b949e] mt-2">
              <span>0:00</span><span>Drop-off zone</span><span>End</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited videos tracked",
              "Second-by-second heatmaps",
              "Drop-off & re-engagement alerts",
              "Embeddable tracking script",
              "CSV export"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the tracking work?",
              a: "You embed a lightweight JavaScript snippet into your video player page. It fires events every second while a student watches, sending anonymous engagement data to our servers."
            },
            {
              q: "Which video platforms are supported?",
              a: "VideoHeat works with any HTML5 video player, YouTube embeds, Vimeo, and Wistia. If you can add a script tag to the page, you can track it."
            },
            {
              q: "Is student data private?",
              a: "Yes. We collect only anonymous watch-time events — no names, emails, or personal data. All data is aggregated before display."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        &copy; {new Date().getFullYear()} VideoHeat. All rights reserved.
      </footer>
    </main>
  );
}
