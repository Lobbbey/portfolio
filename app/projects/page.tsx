import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from "@/components/ui/card";
import { FaParagraph } from "react-icons/fa";


export default function Projects() {
    const projects = [
        {
            name: "LiveCap",
            duration: "GTXR Hackathon",
            description: {
                paragraph: "",
                tags: [
                    "Flutter",
                    "Unity",
                    "FastAPI",
                    "YOLO",
                    "WebSockets"
                ],
            },
            logo: "",
            image: "",
        },
        {

        },
    ]

    return (
        <>
            <h2 className="text-3xl font-bold"> Projects</h2>

            <div className="grid md:crid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                {projects.map((project, index) => (
                    <Card key={index} className="grid gap-4 relative ">
                        <CardHeader>
                            <div>
                                <h3 className="text-lg">
                                    <div>{project.name}</div>
                                </h3>


                                <p>
                                    {project.duration}
                                </p>
                            </div>

                        </CardHeader>
                        <CardContent>
                            {project.description?.paragraph}
                        </CardContent>

                    </Card>
                ))}
            </div>
        </>
    );
}