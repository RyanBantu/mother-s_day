import { motion, useReducedMotion } from "framer-motion";
import { Hero } from "./components/Hero.jsx";
import { Reveal } from "./components/Reveal.jsx";

const easeOut = [0.22, 1, 0.36, 1];

export default function App() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <motion.header
        className="site-header"
        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.55,
          ease: easeOut,
        }}
      >
        <span className="site-header__cross" aria-hidden="true">
          ✝
        </span>
        <p className="site-header__title">Mother&apos;s Day 2026</p>
      </motion.header>

      <main id="main">
        <Hero />

        <Reveal>
          <section className="section section--cream">
            <div className="section__inner">
              <h2>Thank you for raising me in faith</h2>
              <p>
                I&apos;m sorry I haven&apos;t been the son you hoped for. I&apos;ve
                struggled with anger and bitterness. I can&apos;t change the past,
                but I&apos;m taking the time I need to become a better person, and
                I&apos;m grateful that you have always loved me through it.
              </p>
              <p>
                You taught me kindness when it would have been easier to walk
                away, honesty when no one was watching, and humility when pride
                knocked at the door. Those lessons didn&apos;t stay in
                childhood&mdash;they became the compass I still follow.
              </p>
              <p>
                Because of you, I learned that being a good Christian isn&apos;t
                about looking perfect on the outside. It&apos;s about repentance,
                grace, and loving others the way we have been loved. I am forever
                grateful for that gift.
              </p>
              <p>
                Someday I hope to heal fully and be the son you&apos;re proud of.
                Until then, thank you for your faith, your patience, and your love.
              </p>
              <p className="section__signoff">
                Love you,
                <br />
                Berry
              </p>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.06}>
          <section className="section section--peach section--shimmer">
            <div className="section__inner section__inner--wide">
              <div className="photo-strip">
                <motion.figure
                  className="photo-strip__figure"
                  initial={{
                    opacity: reduceMotion ? 1 : 0,
                    scale: reduceMotion ? 1 : 0.96,
                    y: reduceMotion ? 0 : 16,
                  }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.75,
                    ease: easeOut,
                  }}
                >
                  <motion.img
                    src="/images/mom-and-son.png"
                    alt="A warm moment together: Mom and son smiling on the bed, full of joy"
                    width={1600}
                    height={900}
                    loading="lazy"
                    whileHover={
                      reduceMotion ? {} : { scale: 1.02 }
                    }
                    transition={{ duration: 0.45, ease: easeOut }}
                  />
                  <figcaption className="photo-strip__caption">
                    One of my favorite reminders of your warmth and our bond.
                  </figcaption>
                </motion.figure>
                <div>
                  <h2>A verse for you</h2>
                  <motion.blockquote
                    className="quote-block"
                    initial={{
                      opacity: reduceMotion ? 1 : 0,
                      x: reduceMotion ? 0 : 20,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.65,
                      delay: reduceMotion ? 0 : 0.12,
                      ease: easeOut,
                    }}
                  >
                    <p className="quote-text">
                      &ldquo;For I know the plans I have for you,&rdquo; declares
                      the Lord, &ldquo;plans to prosper you and not to harm you,
                      plans to give you hope and a future.&rdquo;
                    </p>
                    <cite>— Jeremiah 29:11 (NIV)</cite>
                  </motion.blockquote>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="section section--cream">
            <div className="section__inner">
              <h2>Today and always</h2>
              <p>
                Happy Mother&apos;s Day. May God bless you richly for every
                prayer you prayed, every sacrifice you made, and every example
                you set. I love you—and I thank God for you.
              </p>
            </div>
          </section>
        </Reveal>
      </main>

      <motion.footer
        className="site-footer"
        initial={{ opacity: reduceMotion ? 1 : 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: reduceMotion ? 0 : 0.6 }}
      >
        <p>
          <motion.span
            className="site-footer__heart"
            aria-hidden="true"
            animate={
              reduceMotion
                ? { scale: 1 }
                : {
                    scale: [1, 1.15, 1],
                  }
            }
            transition={{
              duration: reduceMotion ? 0 : 2.2,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            ♥
          </motion.span>{" "}
          Made with love · Mother&apos;s Day 2026
        </p>
      </motion.footer>
    </>
  );
}
