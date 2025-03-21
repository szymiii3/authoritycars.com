import Partners from "@/app/(landing)/partners";
import SubmissionForm from "@/features/global/submission-form";
import { Faq } from "@/features/ui/faq";
import Hero from "@/features/ui/hero";
import Contact from "./contact";
import Timeline from "./timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <section className="flex w-full flex-col items-start justify-start gap-4 px-4 pb-12 md:px-14 md:pb-24">
        <h1 className="text-3xl font-extrabold md:text-4xl">
          Popularne <span className="text-orange-400">pytania</span>
        </h1>
        <Faq />
      </section>
      <Timeline />
      <SubmissionForm />
      <Contact />
    </>
  );
}
