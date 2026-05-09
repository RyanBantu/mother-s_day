import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1];

function useHeroVariants(reduceMotion) {
  return useMemo(() => {
    const stagger = {
      hidden: {},
      visible: {
        transition: reduceMotion
          ? {}
          : {
              staggerChildren: 0.11,
              delayChildren: 0.15,
            },
      },
    };
    const fadeUp = {
      hidden: reduceMotion
        ? { opacity: 1, y: 0 }
        : { opacity: 0, y: 22 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: reduceMotion ? 0 : 0.58, ease: easeOut },
      },
    };
    return { stagger, fadeUp };
  }, [reduceMotion]);
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { stagger, fadeUp } = useHeroVariants(reduceMotion);

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__image-wrap">
        <motion.div
          className="hero__image-inner"
          initial={{
            clipPath: reduceMotion
              ? "inset(0 0 0% 0)"
              : "inset(0 0 100% 0)",
          }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{
            duration: reduceMotion ? 0 : 1.15,
            ease: [0.65, 0, 0.35, 1],
          }}
        >
          <motion.img
            className="hero__image"
            src="/images/mom-portrait.png"
            alt="Portrait of Mom standing happily at home, surrounded by plants and warm light"
            width={1200}
            height={1600}
            fetchPriority="high"
            initial={{ scale: reduceMotion ? 1 : 1.12 }}
            animate={{ scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 1.35,
              ease: easeOut,
            }}
          />
        </motion.div>
        {!reduceMotion && (
          <motion.div
            className="hero__shine"
            aria-hidden="true"
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{
              duration: 2.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        )}
      </div>

      <div className="hero__content hero__content--animated">
        <motion.div
          className="hero__blobs"
          aria-hidden="true"
          animate={
            reduceMotion
              ? undefined
              : {
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }
          }
          transition={{
            duration: reduceMotion ? 0 : 18,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="hero__text"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero__badge" variants={fadeUp}>
            With all my love
          </motion.span>
          <motion.h1 id="hero-heading" variants={fadeUp}>
            Happy Mother&apos;s Day, Mom
          </motion.h1>
          <motion.p className="hero__lead" variants={fadeUp}>
            Today I want you to know how grateful I am—not only for your love and
            care, but for the quiet strength of the values you lived in front of
            me. They shaped who I am and pointed me toward Christ.
          </motion.p>
          <motion.p className="hero__signature" variants={fadeUp}>
            Thank you for everything.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
