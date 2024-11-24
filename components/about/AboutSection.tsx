import cosmic from "@/lib/cosmicClient";
import Image from "next/image";

export default async function AboutSection() {
    const aboutData = await cosmic.objects
        .findOne({
            type: "about-page",
            slug: "about-us",
        })
        .props("title,metadata")
        .depth(1);

  const { title, metadata } = aboutData?.object || {};
  const description = metadata?.["content_of_box"] || "Default description";
  const image = metadata?.image?.url || "/default-image.jpg";
    return (
        <div className="bg-black text-white min-h-screen w-full flex flex-col items-center p-10 space-y-10">
            <div style={{ marginLeft: '10%', marginRight: '10%', marginTop: '10%'}}>
                <section className="bg-neutral-800 p-6 rounded-lg shadow-md flex flex-col md:flex-row">
                {/* Left Column */}
                    <div className="flex flex-col justify-start w-full md:w-3/5 space-y-4 mr-10 ml-10 mb-10 mt-10">
                        <h2 className="text-2xl font-bold text-center md:text-left mb-4">{title}</h2>
                        <p className="text-gray-200 leading-relaxed">{description}</p>
                    </div>
                    {/* Right Column */}
                    <div className="w-full md:w-2/5" style={{position: "relative"}}>
                        <Image src={image} alt="film-picture" fill className="object-cover w-full h-full rounded-lg shadow-lg" style={{ height: '100%' }} placeholder="blur" 
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAADAAIDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAaEAACAgMAAAAAAAAAAAAAAAAAAgEDEiIx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AkHsfNtp6AC0f/9k="
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}