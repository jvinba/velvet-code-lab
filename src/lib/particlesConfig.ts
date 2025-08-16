import type { ISourceOptions } from "@tsparticles/engine";

export const particlesOptions: ISourceOptions = {
  background: {
    color: "transparent"
  },
  fpsLimit: 60,
  detectRetina: true,
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        width: 1920,
        height: 1080
      }
    },
    color: {
      value: ["#a855f7", "#ec4899", "#06b6d4"]
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: {
        enable: true,
        speed: 0.5,
        sync: false
      }
    },
    size: {
      value: { min: 1, max: 4 }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#a855f7",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "out"
      }
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      onClick: {
        enable: true,
        mode: "bubble"
      },
      resize: {
        enable: true
      }
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      bubble: {
        distance: 200,
        size: 8,
        duration: 2,
        opacity: 0.8
      }
    }
  }
};

// Reduced motion version
export const particlesOptionsReduced: ISourceOptions = {
  ...particlesOptions,
  particles: {
    ...particlesOptions.particles,
    number: {
      value: 20,
      density: {
        enable: true,
        width: 1920,
        height: 1080
      }
    },
    move: {
      enable: false
    },
    opacity: {
      value: 0.3
    }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: false
      },
      onClick: {
        enable: false
      },
      resize: {
        enable: true
      }
    }
  }
};