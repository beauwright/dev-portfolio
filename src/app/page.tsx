"use client";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ui/project-card";

export default function Home() {
  return (
    <main className="min-h-screen p-24 bg-gradient-to-b from from-indigo-900 to-black">
      <div className="flex items-center space-x-4 py-10">
        <img
          alt="Beau Wright Profile Picture"
          src="/beau-wright-profile.jpg"
          className="w-20 object-scale-down rounded-full"
        />
        <h1 className="text-6xl font-bold text-indigo-50">Beau Wright</h1>
      </div>
      <h2 className="text-4xl font-semibold text-indigo-200 py-4">
        Junior developer located in Salt Lake City, UT with a passion for using web
        technologies to build awesome experiences.
      </h2>
      <h3 className="text-3xl font-semibold text-indigo-400">
        Featured projects
      </h3>
      <div className="flex space-x-4 py-4">
        <ProjectCard
          title="Gospel Connections"
          description="Web app for AI semantic search of scriptures."
          imagePath="/gospel-connections-screenshot.png"
          linkDescription="Watch Demo"
          linkPath="https://drive.google.com/file/d/1dS5eoeo1kcK4fDQxlQZ3PQL12gzdqk6R/view?usp=sharing"
        />
        <ProjectCard
          title="Conform Sidekick"
          description="Desktop application to assist colorists with conforming."
          imagePath="/conform-sidekick-screenshot.png"
          linkDescription="View on GitHub"
          linkPath="https://github.com/beauwright/Conform-Sidekick"
        />
      </div>
      <Button
        variant="secondary"
        className="text-indigo-800"
        onClick={() => window.open("/BeauWrightResume.pdf", "_blank")}
      >
        View Resume
      </Button>
    </main>
  );
}
