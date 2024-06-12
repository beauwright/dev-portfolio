import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  imagePath: string;
  title: string;
  description: string
}

export default function ProjectCard({ imagePath, title, description }: ProjectCardProps) {
  return (
    <Card className="w-64 rounded-lg shadow-md overflow-hidden bg-indigo-50">
      <img src={imagePath} alt="Card Image" className="w-full h-48 object-cover" />
      <CardTitle className="p-4 pb-1">
        {title}
      </CardTitle>
      <CardContent className="p-4">
        {description}
      </CardContent>
    </Card>
  );
}
