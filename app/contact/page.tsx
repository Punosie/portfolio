import { Navbar } from "@/components/ui/navbar";
import FeedbackForm from "@/components/feedbackForm";
import ParticlesBackground from "@/components/particlesBackground";

const ContactPage = () => {
  return (
    <div className="relative h-screen w-screen bg-transparent">
      {/* Particles background */}
      <ParticlesBackground />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Centered Navbar */}
        <div className="flex justify-center p-4">
          <Navbar />
        </div>

        {/* Form centered */}
        <div className="flex-grow flex items-center justify-center px-4">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
