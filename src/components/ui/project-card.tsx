"use client";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "./button";

interface ProjectCardProps {
  imagePath: string;
  title: string;
  description: string;
  linkDescription: string;
  linkPath: string;
}

export default function ProjectCard({
  imagePath,
  title,
  description,
  linkDescription,
  linkPath,
}: ProjectCardProps) {
  return (
    <Card className="rounded-lg shadow-md overflow-hidden bg-indigo-50">
      <img
        src={imagePath}
        alt="Card Image"
        className="w-full h-48 object-cover"
      />
      <CardTitle className="p-4 pb-1">{title}</CardTitle>
      <CardContent className="p-4">{description}</CardContent>
      <CardFooter>
        <Button
          onClick={() => window.open(linkPath, "_blank")}
        >
          {linkDescription}
        </Button>
      </CardFooter>
    </Card>
  );
}
