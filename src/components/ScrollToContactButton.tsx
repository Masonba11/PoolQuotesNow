"use client";

export default function ScrollToContactButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const scrollToContact = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className={className}
      style={
        className?.includes("bg-aqua-pool-500")
          ? { backgroundColor: "#14B8A6" }
          : undefined
      }
      onMouseEnter={(e) => {
        if (className?.includes("bg-aqua-pool-500")) {
          e.currentTarget.style.backgroundColor = "#06B6D4";
        }
      }}
      onMouseLeave={(e) => {
        if (className?.includes("bg-aqua-pool-500")) {
          e.currentTarget.style.backgroundColor = "#14B8A6";
        }
      }}
    >
      {children}
    </button>
  );
}
