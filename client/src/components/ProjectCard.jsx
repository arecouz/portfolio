import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const ProjectCard = ({ name, link, image, description }) => {
  return (
    <Card >
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <img
            src={image} // Replace with your image source
            alt={image}
            className="w-full sm:w-1/2 h-auto rounded-md object-contain" // Image takes full width on small screens and half on small screens and up
          />
          <div className="w-full sm:w-1/2 flex items-center justify-center p-4 rounded-md">
            <p>
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
